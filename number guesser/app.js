let min=1,
    max=10,
    guessesLeft=3;

random = Math.floor(Math.random()*10)+1;
console.log(random);

// min = parseInt(document.querySelector('.min-num').value);
// max = parseInt(document.querySelector('.max-num').value);
const inp = document.querySelector('#guess-input');
const guess = document.querySelector('#guess-btn');
const text = document.querySelector('.message');

guess.addEventListener('click', sub);
function sub(e){
    text.textContent="";
    let i = 0;
    i = parseInt(inp.value);
    if(i>max || i<min || isNaN(i) && guessesLeft>0){
        text.textContent="Wrong input, guesses left "+guessesLeft;
        text.style.color="red";
        if(guessesLeft===0){
            text.textContent="Game over";
            text.style.color="red";
        }
    }
    else if(guessesLeft>0 && i===random){
            text.textContent="Correct Guess!";
            text.style.color="green";
            guess.value = "Play Again";

        }
    else if(i<=max && i>=min && guessesLeft>0 && i!==random){
            guessesLeft--;
            text.textContent="Wrong guess, guesses left "+guessesLeft;
            if(guessesLeft===0){
                text.textContent="Game over";
                guess.value = "Play Again";
            }
        }
}

const game= document.querySelector('.game');
game.addEventListener('mousedown', function(e){
    if(e.target.value==="Play Again"){
        window.location.reload();
    }
});



