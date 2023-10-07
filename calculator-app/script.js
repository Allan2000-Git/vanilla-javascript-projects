const answer = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let btnValue = button.textContent;
        if(btnValue === 'C'){
            answer.value = "";
        } else if(btnValue === "="){
            answer.value = eval(answer.value);
        } else if(btnValue === "DEL"){
            answer.value = answer.value.slice(0, -1)
        } else {
            answer.value += btnValue; //append each value
        }
    })
})