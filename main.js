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