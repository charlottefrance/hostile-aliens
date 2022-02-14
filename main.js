// let motherPoints = document.querySelector(".mother-points");
// let defenseOnePoints = document.querySelector(".defense-points0");
// let defenseTwoPoints = document.querySelector(".defense-points1");
// let defenseThreePoints = document.querySelector(".defense-points2");
// let defenseFourPoints = document.querySelector(".defense-points3");
// let defenseFivePoints = document.querySelector(".defense-points4");
// let attackOnePoints = document.querySelector(".attack-points0");
// let attackTwoPoints = document.querySelector(".attack-points1");
// let attackThreePoints = document.querySelector(".attack-points2");
// let attackFourPoints = document.querySelector(".attack-points3");
// let attackFivePoints = document.querySelector(".attack-points4");
// let attackSixPoints = document.querySelector(".attack-points5");
// let attackSevenPoints = document.querySelector(".attack-points6");
// let attackEightPoints = document.querySelector(".attack-points7");

class Ship {
    constructor(shipType, points) {
        this.shipType = shipType;
        this.points = points;
    }

    hit() {
        if (this.shipType === "MotherShip") {
            this.points -= 9;
            if (this.points < 0) this.points = 0;
        } else if (this.shipType === "DefenseShip") {
            this.points -= 10;
            if (this.points < 0) this.points = 0;
        } else {
            this.points -= 12;
            if (this.points < 0) this.points = 0;
        } 
    } 

    checkPoints() {
        if (this.points = 0) this.shipType.remove();
    }
}
// document.querySelector(".random-ship").addEventListener("click", new Ship(shipType, points).hit())
let hitButtonLog = document.querySelector(".random-select")
var hitButton = document.querySelector(".random-ship");
// hitButton.onclick = shoot = ()  => {
//     var shipsArray = [
//         motherPoints, 
//         defenseOnePoints, defenseTwoPoints, defenseThreePoints, defenseFourPoints, defenseFivePoints,
//         attackOnePoints, attackTwoPoints, attackThreePoints, attackFourPoints, attackFivePoints, attackSixPoints, attackSevenPoints, attackEightPoints
//     ];
    
//     hitShip = shipsArray[Math.floor(Math.random()*shipsArray.length)]
//     points = hitShip.innerHTML;

//     shipType = hitShip.className;
//     console.log(motherPoints.shipType)
//     return new Ship(shipType, points).hit();
// }


let shipsArray = []
const startGame = () => {
    for (let i = 0; i < 14; i++) {
        if (i === 0) {
          shipsArray.push(new Ship("MotherShip", 100));
        } else if (i > 0 && i <= 5) {
          shipsArray.push(new Ship("DefenseShip", 80));
        } else {
          shipsArray.push(new Ship("AttackShip", 45));
        }
    }
}

console.log(startGame()) 

var restartButton = document.querySelector(".restart");
restartButton.onclick = startGame;



console.log(shipsArray)

hitButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random()*shipsArray.length)
    console.log(shipsArray[randomNumber])
    let currentShip = shipsArray[randomNumber]
    currentShip.hit()
    console.log(shipsArray)
    const shipOnPage = document.getElementById(`${currentShip.shipType}${randomNumber}`)
    shipOnPage.innerHTML = currentShip.points;
    console.log(shipOnPage)
})
hitButtonLog.innerHTML = `${hitButton.shipOnPage} was just attacked!`