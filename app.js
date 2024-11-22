// const title = window.document.getElementsByTagName("h1")[0];
// const title2 = document.getElementsByClassName("class")[0];
// const title3 = document.getElementById("id");
// const descripion = document.querySelector("p");
// const descripion2 = document.querySelector(".lorem");
// const descripion3 = document.querySelector("#dis");
// const uni = document.querySelectorAll("p");

// title.textContent = "Nursultan";
// title2.textContent = "sssss";

// console.log(title);



const title = document.getElementsByTagName("h1");
const paragraphs = document.querySelectorAll("p");
const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const displayTextButton = document.getElementById("displayText")

const buttonStyles = {
    margin: '10px',
    padding: '10px 15px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};

const buttonHoverStyles = {
    backgroundColor: '[#0056b3]',
};

Object.assign(button1.style, buttonStyles);
Object.assign(button2.style, buttonStyles);
Object.assign(displayTextButton.style, buttonStyles);

button1.addEventListener('mouseover', () => Object.assign(button1.style, buttonHoverStyles));
button1.addEventListener('mouseout', () => Object.assign(button1.style, buttonStyles));

button2.addEventListener('mouseover', () => Object.assign(button2.style, buttonHoverStyles));
button2.addEventListener('mouseout', () => Object.assign(button2.style, buttonStyles));

displayTextButton.addEventListener('mouseover', () => Object.assign(displayTextButton.style, buttonHoverStyles));
displayTextButton.addEventListener('mouseout', () => Object.assign(displayTextButton.style, buttonStyles));

const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "flex-end";
buttonContainer.style.position = "absolute"; 
buttonContainer.style.top = "20px";
buttonContainer.style.right = "20px"; 

function changeColors() {
    for (let h1 of title) {
        h1.style.color = "white";
    }
    paragraphs.forEach((p) => {
        p.style.color = "white";
    });
    document.body.style.backgroundColor = "black";
}

function resetColors() {
    for (let h1 of title) {
        h1.style.color = "";
    }
    paragraphs.forEach((p) => {
        p.style.color = "";
    });
    document.body.style.backgroundColor = "";
}


function displayText() {
    const text = textInput.value;
    if (text.trim()) { 
        const newText = document.createElement("p");
        newText.textContent = text;
        newText.style.color = "black"; 
        newText.style.backgroundColor = "white"; 
        newText.style.padding = "5px"; 
        newText.style.borderRadius = "5px"; 
        newText.style.marginTop = "5px"; 

        output.appendChild(newText);
        textInput.value = ""; 
    }
}

button1.addEventListener("click", function () {
    const newParagraphs = output.querySelectorAll("p");
    newParagraphs.forEach((p) => {
        p.style.color = "white"; 
    });
    changeColors(); 
});
button2.addEventListener("click", resetColors);
displayTextButton.addEventListener("click", displayText);
