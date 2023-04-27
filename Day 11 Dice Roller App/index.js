function roll() {
    const min = 1;
    const max = 6;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("dice-roller-text").innerHTML = number ;
    const diceImg = document.getElementById("dice");
        if (number == 1) {
            document.getElementById("dice").src = "./1.png";
        }
        else if (number == 2) {
            document.getElementById("dice").src = "./2.png";

        }

        else if (number == 3) {
            document.getElementById("dice").src = "./3.png";

        }
        else if (number == 4) {
            document.getElementById("dice").src = "./4.png";

        }
        else if (number == 5) {
            document.getElementById("dice").src = "./5.png";

        }
        else {
            document.getElementById("dice").src = "./6.png";

        }
    }
