const textAnimation = ["Web Designer", "UI/UX Designer"]; 
let iterator = 0;
let currentString = 0;


const ticker = document.querySelector(".tickerBar");
const textAddition = document.querySelector(".textAdder");

ticker.addEventListener("animationiteration", (e)=> {
    console.log(e);
    if (iterator < textAnimation[currentString].length)
    {
        addText(textAddition, textAnimation[currentString], iterator);
        ++iterator;
    }
})


function addText(nodeToManipulate, stringToAdd ,iteration) {
    nodeToManipulate.textContent = nodeToManipulate.textContent + stringToAdd[iteration];
}


function deleteText(nodeToManipulate, stringToAdd ,iteration) {

}