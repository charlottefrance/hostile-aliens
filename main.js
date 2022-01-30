const motherShip = document.querySelector(".mother-ship");
let motherPoints = document.querySelector(".mother-points");


const defenseShipOne = document.querySelector(".defense-ship0");
const defenseShipTwo = document.querySelector(".defense-ship1");
const defenseShipThree = document.querySelector(".defense-ship2");
const defenseShipFour = document.querySelector(".defense-ship3");
const defenseShipFive = document.querySelector(".defense-ship4");

let defenseOnePoints = document.querySelector(".defense-points0");
let defenseTwoPoints = document.querySelector(".defense-points1");
let defenseThreePoints = document.querySelector(".defense-points2");
let defenseFourPoints = document.querySelector(".defense-points3");
let defenseFivePoints = document.querySelector(".defense-points4");


const attackShipOne = document.querySelector(".attack-ship0");
const attackShipTwo = document.querySelector(".attack-ship1");
const attackShipThree = document.querySelector(".attack-ship2");
const attackShipFour = document.querySelector(".attack-ship3");
const attackShipFive = document.querySelector(".attack-ship4");
const attackShipSix = document.querySelector(".attack-ship5");
const attackShipSeven = document.querySelector(".attack-ship6");
const attackShipEight = document.querySelector(".attack-ship7");

let attackOnePoints = document.querySelector(".attack-points0");
let attackTwoPoints = document.querySelector(".attack-points1");
let attackThreePoints = document.querySelector(".attack-points2");
let attackFourPoints = document.querySelector(".attack-points3");
let attackFivePoints = document.querySelector(".attack-points4");
let attackSixPoints = document.querySelector(".attack-points5");
let attackSevenPoints = document.querySelector(".attack-points6");
let attackEightPoints = document.querySelector(".attack-points7");

motherPoints.innerHTML = parseInt(100);
defenseOnePoints.innerHTML = parseInt(80);
defenseTwoPoints.innerHTML = parseInt(80);
defenseThreePoints.innerHTML = parseInt(80);
defenseFourPoints.innerHTML = parseInt(80);
defenseFivePoints.innerHTML = parseInt(80);
attackOnePoints.innerHTML = parseInt(45);
attackTwoPoints.innerHTML = parseInt(45);
attackThreePoints.innerHTML = parseInt(45);
attackFourPoints.innerHTML = parseInt(45);
attackFivePoints.innerHTML = parseInt(45);
attackSixPoints.innerHTML = parseInt(45);
attackSevenPoints.innerHTML = parseInt(45);
attackEightPoints.innerHTML = parseInt(45);

function randomItem(shipsArray) {
    var shipsArray = [
        motherShip, 
        defenseShipOne, defenseShipTwo, defenseShipThree, defenseShipFour, defenseShipFive,
        attackShipOne, attackShipTwo, attackShipThree, attackShipFour, attackShipFive, attackShipSix, attackShipSeven, attackShipEight
    ]

    shipsArray[Math.floor(Math.random()*shipsArray.length)];
}


function ifMotherIsHit(motherShip, motherPoints, randomItem) {
    this.motherShip = motherShip,
    this.motherPoints = motherPoints,
    this.randomItem = randomItem;

    if(randomItem() = motherShip) {
        motherPoints.innerHTML = parseInt()-9;
    } else {
        return;
    }

    randomItem(shipsArray);
};

function ifDefenseAreHit(defenseShipOne, defenseShipTwo, defenseShipThree, defenseShipFour, defenseShipFive) {
    this.d
}
