const adviceTitle = document.querySelector(".advice-title");
const adviceText = document.querySelector(".advice-text");
const diceButton = document.querySelector(".dice-button");


async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const myJson = await response.json();
    const advice = myJson.slip;

    return advice;
}


diceButton.addEventListener("click", () => {
    getAdvice().then(advice => {
        adviceTitle.innerText = `ADVICE #${advice.id}`;
        adviceText.innerText = `"${advice.advice}"`; 
    }).catch(error =>{
        adviceTitle.innerText = `ADVICE #Error`;
        adviceText.innerText = error.message;
    });
});


