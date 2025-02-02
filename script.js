const gameMode = document.getElementById("game_mode");
const display = document.getElementById("display");
const input = document.getElementById("input");
const guessBtn = document.getElementById("guess_btn");


let attempts = 0;
const maxAttempts = 5;


function startGame(){
    attempts = 0;
    gameMode.innerText = `Game Started!`;
    display.innerText = `Guess a number between 1 and 100. You have 5 attempts.`;
    input.style.display = `block`;
    guessBtn.style.display = `block`;
    display.style.textAlign = `center`;
    display.style.fontSize = `1.2rem`;
    display.style.color = `black`;
    display.style.fontWeight = `normal`;
    input.value = '';
}


function guess(){
    if(input.value === '' || input.value > 100){
    alert(`Invalid entry - enter a number from 1 - 100.`);
            }
        
    else {
        const rightNumber = Math.floor(Math.random() * 100 + 1);

        attempts++; 

        if(input.value !== rightNumber){
            display.innerHTML = `${input.value} was a Wrong guess: (The right number was ${rightNumber}).<br>You have ${maxAttempts - attempts} attempts left`;
                    }

        if(attempts >= maxAttempts){
            gameMode.innerText = `Game Over!`;
            display.innerText = `Sorry, you have used all your attempts`;
            input.style.display = `none`;
            guessBtn.style.display = `none`;

            setTimeout(() => {
                gameMode.innerText = ``;
                display.innerHTML = `To Restart Game<br>Press Start`;
                display.className = `green`;
                display.style.textAlign = `center`;
                display.style.fontSize = `2.5rem`;
                input.style.display = `none`;
                guessBtn.style.display = `none`;
            }, 2000);
        }
        
        else {
         `Congratulations!: (The right number was ${rightNumber})`;
                }
            }
        
            input.value = "";       
}


function endGame(){
    attempts = 0;
    gameMode.innerText = `Goodbye!`;
    display.innerText = ``;
    input.style.display = `none`;
    guessBtn.style.display = `none`;

    setTimeout(() => {
        gameMode.innerText = ``;
        display.innerHTML = `To Resume Game<br>Press Start`;
        display.style.textAlign = `center`;
        display.style.fontSize = `2rem`;
    }, 2000);
}

