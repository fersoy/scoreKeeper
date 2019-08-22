var player1Button = document.querySelector('#player1');
var player2Button = document.querySelector('#player2');
var display1 = document.querySelector('#display1');
var display2 = document.querySelector('#display2');
var resetButton = document.getElementById('reset');
var numInput = document.querySelector('input');
var winningScoreDisplay = document.querySelector('p span');
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var winningScore = 5; 

player1Button.addEventListener('click', function(){
    if(!gameOver){
        player1Score++;
        // console.log(player1Score, winningScore);//winning score must be a number. Use == or number()
        if (player1Score === winningScore){
            display1.classList.add("winner");
            gameOver = true;
        }
    }
   
    display1.textContent = player1Score;
});
player2Button.addEventListener('click', function(){
     if(!gameOver){
        player2Score++;
        if (player2Score === winningScore){
            display2.classList.add("winner");
            gameOver = true;
        }
    }
    display2.textContent = player2Score;
});

resetButton.addEventListener('click', function(){
reset();
})
function reset(){
    player1Score = 0;
    player2Score = 0;
    display1.textContent = 0;
    display2.textContent = 0;
    display1.classList.remove('winner');
    display2.classList.remove('winner');
gameOver= false;
}
numInput.addEventListener('change',function(){
winningScoreDisplay.textContent = numInput.value;
winningScore = Number(numInput.value);
reset();
})
