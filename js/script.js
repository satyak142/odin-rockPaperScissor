
const choice = document.querySelectorAll('#selection > div') ;
const yourScore = document.querySelector('#yourScore') ;
const computerScore = document.querySelector('#computerScore') ;


choice.forEach( item => item.addEventListener('click',game)) ;


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
                console.log(`You win! ${palyerSelection} beats ${computerSelection}. `) ;
                yourScore.textContent = +(yourScore.textContent) + 1 ;
              }
    else {
        console.log(`You lose! ${computerSelection} beats ${palyerSelection}. `) ;
        computerScore.textContent = +(computerScore.textContent) + 1;
    }
}

function game (e) {
    palyerSelection = e.target.alt ;
    const computerSelection = getComputerChoice();
    playRound(palyerSelection,computerSelection);
}




