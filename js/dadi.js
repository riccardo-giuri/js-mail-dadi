const playerDiceValue = document.getElementById("playerDice_Value");
const playerDiceMsg = document.getElementById("playerDice_Msg");
const pcDiceValue = document.getElementById("pcDice_Value");
const pcDiceMsg = document.getElementById("pcDice_Msg");
const diceBtn = document.getElementById("dice_btn");

diceBtn.addEventListener("click", function() {
    diceRoll_player = Math.floor((Math.random() * (6) + 1));
    diceRoll_pc = Math.floor((Math.random() * (6) + 1));

    playerDiceValue.innerHTML = diceRoll_player;
    pcDiceValue.innerHTML = diceRoll_pc;

    if(diceRoll_player > diceRoll_pc) {
        playerDiceMsg.innerHTML = "VITTORIA!";
        pcDiceMsg.innerHTML = "";
    }
    else if(diceRoll_player < diceRoll_pc){
        pcDiceMsg.innerHTML = "VITTORIA!";
        playerDiceMsg.innerHTML = "";
    }
    else {
        pcDiceMsg.innerHTML = "";
        playerDiceMsg.innerHTML = "";
    }
})