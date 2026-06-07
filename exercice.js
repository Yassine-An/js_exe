let HumaneScrore=0
let MachineScore=0
function getHumaneChoice(){
    let choice=prompt("enter your choice : rock , paper ou scissor")
    return choice.toLowerCase()
}
function getMachineChoice(){
    choices=["rock","paper","scissor"]
    let choice=choices[Math.floor(Math.random()*3)]
    return choice
}
function playRound(humaneChoice,machineChoice){
    if(humaneChoice===machineChoice){
        return "Draw"
    }else if((humaneChoice==="rock" && machineChoice==="scissor") || (humaneChoice==="paper" && machineChoice==="rock") || (humaneChoice==="scissor" && machineChoice==="paper")){
        HumaneScrore++
        return  `human wins ${humaneChoice} beats ${machineChoice}`
    }else{
        MachineScore++
        return `Machine wins ${machineChoice} beats ${humaneChoice}`
    }
}

const playGame = (number) => {
      for(let i=0;i<number;i++){
    const humaneChoice=getHumaneChoice()
    const machineChoice=getMachineChoice()
    console.log(playRound(humaneChoice,machineChoice))
    console.log(`Humane Score : ${HumaneScrore} - Machine Score : ${MachineScore}`)
      }
    }
playGame(1)