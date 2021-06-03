function userInput(){
    let userInput;
    do{
        userInput = prompt("Rock, Paper, Scissors? Choose one of the three moves");
        userInput = userInput.slice(0,1).toUpperCase().concat(userInput.slice(1).toLowerCase());
    }while(userInput !== 'Rock' && userInput !=='Paper' && userInput !== 'Scissors')

    return userInput;
}

function computerPlay(){
    let play = ['Rock', 'Paper', 'Scissors'];
    return play[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log(`Draw! Player: ${playerSelection}, Computer: ${computerSelection}`);
        return 0;
    }else if(
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")
    ){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }else{
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
        let match = playRound(userInput(),computerPlay());
        if (match===-1){
            computerScore++;
        }
        else if(match===1){
            userScore++;
        }
    }
    console.log(`Scoreboard:`);
    console.log(`User: ${userScore}, Computer: ${computerScore}`);
    if(!(userScore-computerScore)){
        return 'Draw!'
    }
    else if(userScore-computerScore>0){
        return 'You Win!';
    }else{
        return 'You Lose!'
    }
}

console.log("Best of five!");
console.log(game());