//The function that generates the random number from the user interval
let generateButton = document.getElementById("generateRandomNumberButton");
generateButton.addEventListener('click', () => generateRandomNumberFromUserInterval());

function generateRandomNumberFromUserInterval(){
    let from = document.getElementById("randomNumberFrom");
    let to = document.getElementById("randomNumberTo");
    let showResult = document.getElementById("randomNumberResult");
    if(from.value===to.value || from.value > to.value){
        showResult.innerText = "Result: Invalid interval"
    } else {
        let randomNumber = getRandomNumber(from.value, to.value);
        showResult.innerText = "Result: "+ randomNumber.toString();
    }

}
//Gets random number
function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//The function thats swaps the interval
let swapButton = document.getElementById("swapButton");
swapButton.addEventListener("click", ()=> swapInterval());

function swapInterval(){
    let from = document.getElementById("randomNumberFrom");
    let to = document.getElementById("randomNumberTo");
    let valueFrom = from.value;
    from.value = to.value;
    to.value = valueFrom;
}

//Roll orginal dice
let rollOrginalDiceButton = document.getElementById("rollOrginalDiceButton");
rollOrginalDiceButton.addEventListener("click", ()=>rollOrginalDice());

function rollOrginalDice(){
    let eyes = getRandomNumber(1,6);
    let showResult = document.getElementById("normalDiceResult");
    showResult.innerText = "Result: " + eyes.toString();
}

//Gets the sum and average of n dices
let sumButton = document.getElementById("sumButton");
let averageButton = document.getElementById("averageButton");
sumButton.addEventListener("click", ()=> calculateSum());
averageButton.addEventListener("click", ()=>calculateAverage());

function calculateSum(){
    let numberOfDices = document.getElementById("numberOfDices").value;
    if(numberOfDices>1000000){
        alert("The number of dices is too high");
    } else {
        let result = 0;
        for(let i=1; i<=numberOfDices;i++){
            result += getRandomNumber(1,6);
        }
        let resultElement = document.getElementById("nDicesResult");
        resultElement.innerText="Result: "+ result.toString();
    }
}

function calculateAverage(){
    let numberOfDices = document.getElementById("numberOfDices").value;
    if(numberOfDices >1000000){
        alert("The number of dices it too high")
    } else {
        let result = 0;
        for(let i=1; i<=numberOfDices;i++){
            result += getRandomNumber(1,6);
        }
        result = result/numberOfDices;
        let resultElement = document.getElementById("nDicesResult");
        resultElement.innerText="Result: "+ result.toString();
    }
}

//Pick random name
let pickNameButton = document.getElementById("pickRandomPersonButton");
pickNameButton.addEventListener("click", ()=>pickRandomName())

function pickRandomName(){
    let names = document.getElementById("personsToPickBetween").value.trim();
    let arrayNames = names.split(',');
    let randomIndex = getRandomNumber(0, arrayNames.length -1);
    let randomName = arrayNames[randomIndex];
    let resultElement = document.getElementById("personResult");
    resultElement.innerText = "Result: "+randomName;
}

//Lock in names
let lockButton = document.getElementById("lockNamesButton");
lockButton.addEventListener("click", ()=> lockInNames());

function lockInNames(){
    let names = document.getElementById("namesToEliminate").value.trim();
    let arrayNames = names.split(',');
    let result="";
    arrayNames.forEach((e) => {
        result +=e
        if(e!==arrayNames[arrayNames.length-1]){
            result += " - "
        }
    });
    let lockedNamesResult = document.getElementById("lockedNamesResult");
    lockedNamesResult.innerText = result;
    let namesNewValue = document.getElementById("namesToEliminate");
    namesNewValue.value="";
}

function fromArrayToString(array){
    let result = ""
    array.forEach((e) => {
        result += e
        if(array.indexOf(e)!==array.length-1){
            result += " - "
        }
    })
    return result
}

//Eliminate one name
let eliminateButton = document.getElementById("eliminateButton");
eliminateButton.addEventListener("click", () => eliminateName());

//Function that checks if the last man standing is over
function isLastManStandingOver(array){
    if(array.length < 2){
        return true
    } else {
        return false
    }
}

function eliminateName(){
    let namesToEliminateBetween = document.getElementById("lockedNamesResult").innerText;
    let arrayWithNamesToEliminateBetween = namesToEliminateBetween.split(' - ');
    if(!isLastManStandingOver(arrayWithNamesToEliminateBetween)){
        let randomIndex = getRandomNumber(0, arrayWithNamesToEliminateBetween.length - 1);
        let arrayWithNamesWithoutTheEliminatedName = arrayWithNamesToEliminateBetween.slice(0); // Copy the array
        arrayWithNamesWithoutTheEliminatedName.splice(randomIndex, 1);
        let eliminateNamesDocument = document.getElementById("lockedNamesResult");
        eliminateNamesDocument.innerText = fromArrayToString(arrayWithNamesWithoutTheEliminatedName)
    } else {
        namesToEliminateBetween = "The winner is found"
        let lastManStandingWinnerLabel = document.getElementById("lastManStandingWinnerLabel")
        lastManStandingWinnerLabel.innerText = fromArrayToString(arrayWithNamesWithoutTheEliminatedName)
    }


}
