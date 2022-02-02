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

let gameActive = true;

var shipsArray = [
    motherPoints, 
    defenseOnePoints, defenseTwoPoints, defenseThreePoints, defenseFourPoints, defenseFivePoints,
    attackOnePoints, attackTwoPoints, attackThreePoints, attackFourPoints, attackFivePoints, attackSixPoints, attackSevenPoints, attackEightPoints
];

shipAttack = shipsArray[Math.floor(Math.random()*shipsArray.length)]


class shipsHit{
    constructor(shipsArray, shipAttack, motherPoints, defenseOnePoints, defenseTwoPoints, defenseThreePoints, defenseFourPoints, defenseFivePoints) {
        this.shipsArray = shipsArray;
        this.shipAttack = shipAttack;

        this.motherPoints = motherPoints.innerHTML = 100;
        this.defenseOnePoints = defenseOnePoints.innerHTML = 80;
        this.defenseTwoPoints = defenseTwoPoints.innerHTML = 80;
        this.defenseThreePoints = defenseThreePoints.innerHTML = 80;
        this.defenseFourPoints = defenseFourPoints.innerHTML = 80;
        this.defenseFivePoints = defenseFivePoints.innerHTML = 80;
    }
    
    

    ifMotherisHit(shipAttack) {
        if (shipAttack.className = "mother-points") {
            motherPoints.innerHTML = `${this.motherPoints -9}`;
            console.log("Mother has been hit")
        }
    }

    ifDefenseOneisHit() {
        if (shipAttack.className = "defense-points0"){
            defenseOnePoints.innerHTML = `${this.defenseOnePoints -10}`;
        } return "Defense One hit"
    };

    ifDefenseTwoisHit() {};
    ifDefenseThreeisHit() {};
    ifDefenseFourisHit() {};
    ifDefenseFiveisHit() {};
};

console.log(new shipsHit(shipsArray, shipAttack, motherPoints, defenseOnePoints, defenseTwoPoints, defenseThreePoints, defenseFourPoints, defenseFivePoints))


function ifAttackOneisHit() {};
function ifAttackTwoisHit() {};
function ifAttackThreeisHit() {};
function ifAttackFourisHit() {};
function ifAttackFiveisHit() {};
function ifAttackSixisHit() {};
function ifAttackSevenisHit() {};
function ifAttackEightisHit() {};




