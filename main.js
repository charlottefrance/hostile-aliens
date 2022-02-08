let motherPoints = document.querySelector(".mother-points");
let defenseOnePoints = document.querySelector(".defense-points0");
let defenseTwoPoints = document.querySelector(".defense-points1");
let defenseThreePoints = document.querySelector(".defense-points2");
let defenseFourPoints = document.querySelector(".defense-points3");
let defenseFivePoints = document.querySelector(".defense-points4");
let attackOnePoints = document.querySelector(".attack-points0");
let attackTwoPoints = document.querySelector(".attack-points1");
let attackThreePoints = document.querySelector(".attack-points2");
let attackFourPoints = document.querySelector(".attack-points3");
let attackFivePoints = document.querySelector(".attack-points4");
let attackSixPoints = document.querySelector(".attack-points5");
let attackSevenPoints = document.querySelector(".attack-points6");
let attackEightPoints = document.querySelector(".attack-points7");

const startGame = () => {
    motherPoints.innerHTML = 100;
    defenseOnePoints.innerHTML = 80;
    defenseTwoPoints.innerHTML = 80;
    defenseThreePoints.innerHTML = 80;
    defenseFourPoints.innerHTML = 80;
    defenseFivePoints.innerHTML = 80;
    attackOnePoints.innerHTML = 45;
    attackTwoPoints.innerHTML = 45;
    attackThreePoints.innerHTML = 45;
    attackFourPoints.innerHTML = 45;
    attackFivePoints.innerHTML = 45;
    attackSixPoints.innerHTML = 45;
    attackSevenPoints.innerHTML = 45;
    attackEightPoints.innerHTML = 45;



    var defenseShips = [
        defenseOnePoints, defenseTwoPoints, defenseThreePoints, defenseFourPoints, defenseFivePoints,
    ];
    
    var attackShips = [
        attackOnePoints, attackTwoPoints, attackThreePoints, attackFourPoints, attackFivePoints, attackSixPoints, attackSevenPoints, attackEightPoints
    ];

    var shipsArray = [
        motherPoints, 
        defenseOnePoints, defenseTwoPoints, defenseThreePoints, defenseFourPoints, defenseFivePoints,
        attackOnePoints, attackTwoPoints, attackThreePoints, attackFourPoints, attackFivePoints, attackSixPoints, attackSevenPoints, attackEightPoints
    ];
    
    hitShip = shipsArray[Math.floor(Math.random()*shipsArray.length)]
    points = hitShip.innerHTML;

    shipType = hitShip.className;
    return `${shipType} has ${points} points`
}

console.log(startGame())

class Ship {
    constructor(shipType, points) {
        this.shipType = shipType;
        this.points = points;
    }

    hit(newPoints) {
        if (this.shipType === "mother-points") {
            var points = motherPoints.innerHTML;
            newPoints = parseInt(points) - 9;
            return motherPoints.innerHTML = newPoints;
        } else if (this.shipType === "defense-points0") {
            var points = defenseOnePoints.innerHTML;
            newPoints = parseInt(points) - 10;
            return defenseOnePoints.innerHTML = newPoints;
        } else if (this.shipType === "defense-points1") {
            var points = defenseTwoPoints.innerHTML;
            newPoints = parseInt(points) - 10;
            return defenseTwoPoints.innerHTML = newPoints;
        } else if (this.shipType === "defense-points2") {
            var points = defenseThreePoints.innerHTML;
            newPoints = parseInt(points) - 10;
            return defenseThreePoints.innerHTML = newPoints;
        } else if (this.shipType === "defense-points3") {
            var points = defenseFourPoints.innerHTML;
            newPoints = parseInt(points) - 10;
            return defenseFourPoints.innerHTML = newPoints;
        } else if (this.shipType === "defense-points4") {
            var points = defenseFivePoints.innerHTML;
            newPoints = parseInt(points) - 10;
            return defenseFivePoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points0") {
            var points = attackOnePoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackOnePoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points1") {
            var points = attackTwoPoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackTwoPoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points2") {
            var points = attackThreePoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackThreePoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points3") {
            var points = attackFourPoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackFourPoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points4") {
            var points = attackFivePoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackFivePoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points5") {
            var points = attackSixPoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackSixPoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points6") {
            var points = attackSevenPoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackSevenPoints.innerHTML = newPoints;
        } else if (this.shipType === "attack-points7") {
            var points = attackEightPoints.innerHTML;
            newPoints = parseInt(points) - 12;
            return attackEightPoints.innerHTML = newPoints;
        }
    }
}



