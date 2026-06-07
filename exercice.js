let HumaneScore = 0;
let MachineScore = 0;
let gameOver = false; 

function getMachineChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humaneChoice) {
    
    if (gameOver) return;

    const machineChoice = getMachineChoice();
    let resultMessage = "";

    
    if (humaneChoice === machineChoice) {
        resultMessage = `Draw! Both chose ${humaneChoice}`;
    } else if (
        (humaneChoice === "rock" && machineChoice === "scissor") || 
        (humaneChoice === "paper" && machineChoice === "rock") || 
        (humaneChoice === "scissor" && machineChoice === "paper")
    ) {
        HumaneScore++;
        resultMessage = `Human wins this round! ${humaneChoice} beats ${machineChoice}`;
    } else {
        MachineScore++;
        resultMessage = `Machine wins this round! ${machineChoice} beats ${humaneChoice}`;
    }

    
    let finalResultMessage = "";
    if (HumaneScore === 5) {
        finalResultMessage = "\n GAME OVER: Human wins the game! ";
        gameOver = true;
    } else if (MachineScore === 5) {
        finalResultMessage = "\n GAME OVER: Machine wins the game! ";
        gameOver = true;
    }

    
    mettreAJourAffichage(resultMessage, finalResultMessage);
}

function mettreAJourAffichage(resultatText, finalMessage) {
    const container = document.querySelector("#container");
    let scoreDiv = document.querySelector("#score-display");
    
    if (!scoreDiv) {
        scoreDiv = document.createElement("div");
        scoreDiv.id = "score-display";
        scoreDiv.style.whiteSpace = "pre-line";
        scoreDiv.style.marginTop = "20px";
        scoreDiv.style.fontWeight = "bold";
        container.appendChild(scoreDiv);
    }
    
    
    scoreDiv.textContent = `${resultatText}\nHumane Score: ${HumaneScore} - Machine Score: ${MachineScore}${finalMessage}`;

    
    if (gameOver && !document.querySelector("#reset-btn")) {
        creerBoutonReset(container);
    }
}

function creerBoutonReset(container) {
    const resetBtn = document.createElement("button");
    resetBtn.id = "reset-btn";
    resetBtn.textContent = "Play Again";
    resetBtn.style.marginTop = "15px";
    resetBtn.style.display = "block";
    
    resetBtn.onclick = () => {
        HumaneScore = 0;
        MachineScore = 0;
        gameOver = false;
        document.querySelector("#score-display").textContent = "Game reset! Make your move.";
        resetBtn.remove(); 
    };
    
    container.appendChild(resetBtn);
}


window.playRound = playRound;