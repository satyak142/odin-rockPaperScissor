


function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else {
        return "scissor"
    }
}

function playRound(palyerSelection,computerSelection){
    if(palyerSelection === computerSelection){
        console.log(`It's a tie both choose ${palyerSelection}`)
    }
    else if ( ( palyerSelection === "rock" && computerSelection === "scissor" ) || 
              ( palyerSelection === "paper" && computerSelection === "rock" ) || 
              ( palyerSelection === "scissor" && computerSelection === "paper" ) ){
                console.log(`You win! ${palyerSelection} beats ${computerSelection}. `)
              }
    else {
        console.log(`You lose! ${computerSelection} beats ${palyerSelection}. `)
    }
}

function game () {
    let palyerSelection = prompt("Select from rock paper scissor :","");
    palyerSelection = palyerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(palyerSelection,computerSelection);
}




