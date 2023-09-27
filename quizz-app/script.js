const quiz=[
    {
        question:"With which sport is Lionel Messi associated?",
        a:"Track and field",
        b:"Football",
        c:"Badminton",
        d:"Boxing",
        correct:"b",
    },
    {
        question:"Which actor has starred in films including Gladiator and Her?",
        a:"Alan Cumming",
        b:"Peter O'Toole",
        c:"Joaquin Phoenix",
        d:"Roger Moore",
        correct:"c",
    },
    {
        question:"Which artist painted \"Three Musicians\"",
        a:"Pablo Picasso",
        b:"Henri Matisse",
        c:"Sandro Botticelli",
        d:"Georges Seurat",
        correct:"a",
    }
]

const quizz_container = document.querySelector(".quizz-container");

const question = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

const ans = document.querySelectorAll(".answer");

let currentQuestion = 0;
let score= 0;

loadQuiz();

function loadQuiz(){
    deSelectAnswers();

    const currentData = quiz[currentQuestion];

    question.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

function deSelectAnswers(){
    ans.forEach((res) => {
        res.checked = false;
    });
}

function isSelected(){
    let answer = undefined;

    ans.forEach((res) => {
        if(res.checked){
            answer = res.id;
        }
    });

    return answer;
}

submitButton.addEventListener("click",()=>{
    const answer = isSelected();
    // console.log(answer);
    
    if(answer){
        if(answer === quiz[currentQuestion].correct){
            score++;
        }
        currentQuestion++;

        if(currentQuestion < quiz.length){
            loadQuiz();
        } else {
            //show message when questions are complete
            // alert("You completed the quiz. Grab yourself a beer and enjoy"); 
            quizz_container.innerHTML = `<h3>Your scored: ${score}/${quiz.length}</h3> 
            <button onclick="location.reload()">Play Again</button>`;
        }
    }else{
        alert("Please select an answer");
    }
});