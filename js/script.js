
const choice = document.querySelectorAll('#selection > div') ;
const yourScore = document.querySelector('#yourScore') ;
const computerScore = document.querySelector('#computerScore') ;
const gameLog = document.querySelector('#gameLog')

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
    let newDiv = document.createElement('div') ;
    if(palyerSelection === computerSelection){
        newDiv.innerHTML = `<p>It's a tie both choose ${palyerSelection}.</p>` ;
        newDiv.className = 'tie';
    }
    else if ( ( palyerSelection === "rock" && computerSelection === "scissor" ) || 
    ( palyerSelection === "paper" && computerSelection === "rock" ) || 
    ( palyerSelection === "scissor" && computerSelection === "paper" ) ){
        newDiv.innerHTML = `<p>You win! ${palyerSelection} beats ${computerSelection}.</p>` ;
        newDiv.className = 'win';
        yourScore.textContent = +(yourScore.textContent) + 1 ;
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${palyerSelection}. `) ;
        newDiv.innerHTML = `<p>You lose! ${computerSelection} beats ${palyerSelection}.</p>` ;
        newDiv.className = 'lose';
        computerScore.textContent = +(computerScore.textContent) + 1;
    }
    gameLog.insertBefore(newDiv,gameLog.firstElementChild) ;
    if(computerScore.textContent === '5' || yourScore.textContent === '5'){
        choice.forEach(item => item.removeEventListener('click',game)) ;
        gameover();
    }
}

function game (e) {
    palyerSelection = e.target.alt ;
    const computerSelection = getComputerChoice();
    playRound(palyerSelection,computerSelection);
}

function gameover () {
    gameLog.innerHTML = '';
    if(computerScore.textContent === '5'){
        gameLog.innerHTML = `<p>Computer is the final winner.</p>`
        gameLog.className = 'lose'
    }else{
        gameLog.innerHTML = `<p>You are the final winner.</p>`
        gameLog.className = 'win'
    }
    let endButton = document.createElement('button') ;
    endButton.textContent = 'Restart Game' ;
    gameLog.appendChild(endButton);
    endButton.addEventListener('click',()=>{
        location.reload()
    });
}
