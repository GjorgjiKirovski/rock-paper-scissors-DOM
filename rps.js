const buttons = document.querySelectorAll('div#wrapper>#buttons-menu>button');
buttons.forEach(button => {
    button.addEventListener('click', e => {
        console.log(e.target.innerText)
        playRound(e.target.innerText, computerPlay());
    })
})



// function userInput(){
//     let userInput;
//     do{
//         userInput = prompt("Rock, Paper, Scissors? Choose one of the three moves");
//         userInput = userInput.slice(0,1).toUpperCase().concat(userInput.slice(1).toLowerCase());
//     }while(userInput !== 'Rock' && userInput !=='Paper' && userInput !== 'Scissors')

//     return userInput;
// }

function computerPlay(){
    let play = ['Rock', 'Paper', 'Scissors'];
    return play[Math.floor(Math.random()*3)];
}

let output = document.getElementById('result');
let playerScoreDOM = document.getElementById('user-score');
let playerScore = 0;
let computerScoreDOM = document.getElementById('computer-score');
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if(playerScore === 5 || computerScore === 5){
        playerScoreDOM.textContent = '0';
        computerScoreDOM.textContent = '0';
        playerScore = 0;
        computerScore = 0;
        while(output.firstChild){
            output.removeChild(output.lastChild);
        }
    }
    let resultPara = document.createElement('p');
    if(playerSelection === computerSelection){
        console.log(`Draw! Player: ${playerSelection}, Computer: ${computerSelection}`);
        resultPara.textContent = `Draw! Player: ${playerSelection}, Computer: ${computerSelection}`;
        output.appendChild(resultPara);
        
    }else if(
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        resultPara.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        output.appendChild(resultPara);
        computerScore++;
        computerScoreDOM.textContent = computerScore;
        
    }else{
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        resultPara.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreDOM.textContent = playerScore;
        output.appendChild(resultPara);
        
    }
}


// console.log("Play game!");
// playRound(userInput(), computerPlay()); 

// function game(){
//     let userScore = 0;
//     let computerScore = 0;
//     for(let i = 1; i <= 5; i++){
//         let match = playRound(userInput(),computerPlay());
//         if (match===-1){
//             computerScore++;
//         }
//         else if(match===1){
//             userScore++;
//         }
//     }
//     console.log(`Scoreboard:`);
//     console.log(`User: ${userScore}, Computer: ${computerScore}`);
//     if(!(userScore-computerScore)){
//         return 'Draw!'
//     }
//     else if(userScore-computerScore>0){
//         return 'You Win!';
//     }else{
//         return 'You Lose!'
//     }
// }