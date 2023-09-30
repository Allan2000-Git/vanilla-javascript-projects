const API_URL = 'https://api.github.com/users/';
const REPO_URL = 'https://api.github.com/users/allan2000-git/repos'

const searchInput = document.getElementById('github');
const form = document.getElementById('form');

const mainContainer = document.getElementById('main-container');



//================================================================
//==================FETCHING THE USER DETAILS=====================
//================================================================

async function getUserDetails(user) {
    const response = await fetch(API_URL +user);
    const data = await response.json();

    // console.log(data);
    creatUserCard(data);

    getRepoDetails(user);
}



//================================================================
//==================FETCHING THE USER REPO DETAILS=====================
//================================================================

async function getRepoDetails(user) {
    const response = await fetch(API_URL +user + '/repos');
    const data = await response.json();

    displayRepos(data);
}


//================================================================
//======================CREATING PROFILE CARD=====================
//================================================================
function creatUserCard(data) {
    // const card = document.createElement('div');
    // card.classList.add('card');

    const cardHTML = `
        <div class="profile">
            <div class="profile-img">
                <img src="${data.avatar_url}" alt="${data.name}" class="user-img">
            </div>
            <div class="user-data">
                <h3>${data.name}</h3>
                <p>${data.bio}</p>
                <ul class="sub-data">
                    <li><i class="fa-solid fa-building"></i>${data.company}</li>
                    <li><i class="fa-solid fa-eye"></i>${data.followers}</li>
                    <li><i class="fa-solid fa-folder"></i>${data.public_repos}</li>
                </ul>
                <div class="repos-div" id="repos-div"></div>
            </div>
        </div>
    `;
    
    mainContainer.innerHTML = cardHTML;
}

getUserDetails('Allan2000-Git');



function displayRepos(repo){
    const repos = document.getElementById('repos-div');

    repo.forEach((rep) => {
        const a = document.createElement('a');
        a.classList.add('repos');

        a.href = rep.html_url;
        a.target = '_blank';

        a.innerText = rep.name;

        repos.appendChild(a);
    });
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = searchInput.value;

    if(user){
        getUserDetails(user);
        user.value = '';
    }
});

