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
        adviceTitle.innerHTML = `ADVICE #${advice.id}`;
        adviceText.innerHTML = advice.advice; 
    }).catch(error =>{
        adviceTitle.innerHTML = `ADVICE #Error`;
        adviceText.innerHTML = error.message;
    });
});


