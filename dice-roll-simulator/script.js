const dice = document.getElementById('dice');
const roll = document.getElementById('roll');

const ul = document.querySelector('ul');

const diceArray = ['&#9856;','&#9857;','&#9858;','&#9859;','&#9860;','&#9861;']

let count = 0;

roll.addEventListener('click',()=>{
    dice.classList.add("roll-animation");
    setTimeout(()=>{dice.classList.remove("roll-animation")},1000);

    let randomNumber = Math.floor(Math.random() * diceArray.length);
    dice.innerHTML = diceArray[randomNumber];

    count+=1;

    const li = document.createElement("li");
    li.innerHTML = `Roll:${count}`
    const span = document.createElement("span");
    span.innerHTML = diceArray[randomNumber];
    li.appendChild(span);

    ul.appendChild(li);
});

const clear = document.querySelector("a");
clear.addEventListener("click",()=>{
    ul.innerHTML = "";
})

