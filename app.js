//global variable declarations
const form = document.querySelector("#form");
const memeBoard = document.querySelector("#memeBoard");
let arr = [];
const url = document.querySelector('input[name="url"]');
const textTop = document.querySelector('input[name="textTop"]');
const textBottom = document.querySelector('input[name="textBottom"]');

//gets data from form and builds a 3 element array (arr)
form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (url.value && textTop.value && textBottom.value) {
        arr.push(url.value);
        arr.push(textTop.value);
        arr.push(textBottom.value);
        url.value = "";
        textTop.value = "";
        textBottom.value = "";
        buildMeme(arr);
    } else {  
        alert("You need an image, top text, and bottom text for your meme.");
        url.value = "";
        textTop.value = "";
        textBottom.value = "";
    }
});

//function that takes an array built from the input and creates the html
function buildMeme (array) {
    const div = document.createElement("div");
    const divImage = document.createElement("div");
    const image = document.createElement("img")
    const topH2 = document.createElement("h2");
    const bottomH2 = document.createElement("h2");
    const killButton = document.createElement("button");
    div.classList.add("meme");
    image.src = array[0];
    topH2.innerText = `${array[1]}`;
    bottomH2.innerText = `${array[2]}`;
    topH2.classList.add("topText");
    bottomH2.classList.add("bottomText")
    killButton.innerText = "Kill this meme";
    killButton.setAttribute("class","killButton");
    divImage.classList.add("imageWrapper");
    divImage.appendChild(image);
    div.appendChild(divImage);
    div.appendChild(topH2);
    div.appendChild(bottomH2);
    div.appendChild(killButton);
    memeBoard.prepend(div);
    arr.length = 0;
}

//powers the killMeme button which removes that meme on click
memeBoard.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
})