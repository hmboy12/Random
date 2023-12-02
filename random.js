//The function that generates the random number from the user interval
let generateButton = document.getElementById("generateRandomNumberButton");
generateButton.addEventListener('click', () => generateRandomNumberFromUserInterval());

function generateRandomNumberFromUserInterval(){
    let from = document.getElementById("randomNumberFrom");
    let to = document.getElementById("randomNumberTo");
    if(from.value>=to.value){
        alert("Invalid interval");
    } else {
        let randomNumber = getRandomNumber(from.value, to.value);
        let showResult = document.getElementById("randomNumberResult");
        showResult.innerText = "Result: "+ randomNumber.toString();
    }

}
//Gets random number
function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}