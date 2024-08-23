const optionsMenu = document.querySelector(".options");
const opRoboPedra = document.querySelector(".pedra-r");
const opRoboPapel = document.querySelector(".papel-r");
const opRoboTesoura = document.querySelector(".tesoura-r");
const playerPontos = document.querySelector("#player-pontos");
const roboPontos = document.querySelector("#robo-pontos");
const resultado = document.querySelector(".resultado");

const escolhas = ["R", "P", "T"]
let pessoaPonto = 0;
let compPonto = 0;

const getComputerEscolha = () => {
    const compEscolha = Math.floor(Math.random() * 3)
    return escolhas[compEscolha]
}

const displayCompEscolha = (roboEscolha) =>{
    opRoboPedra.style.display = "none"
    opRoboPapel.style.display = "none"
    opRoboTesoura.style.display = "none"
    switch(roboEscolha){
        case "R":
            opRoboPedra.style.display = "block"
            break;
        case "P":
            opRoboPapel.style.display = "block"
            break;
        case "T":
            opRoboTesoura.style.display = "block"
            break;
    }
}

function playgame(){
    if(pessoaPonto >= 10){
        resultado.style.color = "green"
        resultado.textContents = `Você Ganhou: ${pessoaPonto} x ${comPonto}`
        compPonto = 0
        pessoaPonto = 0
        playerPontos.textContent = pessoaPonto
        roboPontos.textContent = compPonto
    }else if (compPonto >= 10){
        resultado.style.color = "red"
        resultado.textContents = `Você Perdeu: ${pessoaPonto} x ${comPonto}`
        compPonto = 0
        pessoaPonto = 0
        playerPontos.textContent = pessoaPonto
        roboPontos.textContent = compPonto
    }
}

const playRound = (escolhas, compEscolha) => {
    displayCompEscolha(compEscolha)
    if(escolhas == compEscolha ){
        resultado.textContent = 'Empate'
    }else if(escolhas == "R" && compEscolha == "P"){
        resultado.textContent = 'Papel enrola Pedra! Você perdeu'
        compPonto++
        roboPontos.textContent = compPonto
    }else if(escolhas == "P" && compEscolha == "R"){
        resultado.textContent = 'Papel enrola Pedra! Você ganhou'
        pessoaPonto++
        playerPontos.textContent = pessoaPonto
    }else if(escolhas == "R" && compEscolha == "T"){
        resultado.textContent = 'Pedra destroi Tesoura! Você ganhou'
        pessoaPonto++
        playerPontos.textContent = pessoaPonto
    }else if(escolhas == "T" && compEscolha == "R"){
        resultado.textContent = 'Pedra destroi Tesoura! Você perdeu'
        compPonto++
        roboPontos.textContent = compPonto
    }else if(escolhas == "P" && compEscolha == "T"){
        resultado.textContent = 'Tesoura corta Papel! Você perdeu'
        compPonto++
        roboPontos.textContent = compPonto
    }else if(escolhas == "T" && compEscolha == "P"){
        resultado.textContent = 'Tesoura corta Papel! Você ganhou'
        pessoaPonto++
        playerPontos.textContent = pessoaPonto
    }
    playgame()
}

optionsMenu.addEventListener("click", (e) =>{
    const target = e.target
    resultado.style.color = "black"
    switch(target.className){
        case "pedra":
            playRound("R", getComputerEscolha())
            break;
        case "papel":
            playRound("P", getComputerEscolha())
            break;
        case "tesoura":
            playRound("T", getComputerEscolha())
            break;
    }
})