let button = document.querySelector("#vol");
let submit = document.querySelector("#submit");
let container = document.querySelector('#container');
let text = document.createElement('p');
let volume = document.createElement('p');


text.textContent = "Click to change volume!";
button.appendChild(text);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

function changeVolume()
{
    
    volume.textContent = random(0,100);
    return volume;
}

function changeButtonColor(){
    document.getElementById("vol").style.backgroundColor = randomRGB();
}

function alert1(){
    alert("Have you found your volume yet?");
}

function alert2(){
    alert("you're still here?");
}

function goofyPrompt(){
    const prompt = prompt("you good bro? (answer yes or no)", "no");
    if (prompt.toLowerCase() === "yes"){
        alert("Glad to hear it :-)");
    }
    else
    {
        alert("Womp womp, cry about it."); 
    }
}

function disappearButton(){
    document.getElementById("vol").style.backgroundColor = "rgb(30, 30, 30)";
}


function enterVolume(){
    let newVolume = prompt("Please enter your volume", "0");
    if (newVolume !== null) {
        volume.textContent = parseFloat(newVolume) + random(0, 50); // Update volume with the new value
    }
}

function popups(){
    const popup = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=Jlr_2XOJvrY", "https://www.youtube.com/watch?v=Sdkwu2FvFfI","https://www.youtube.com/watch?v=M9K2guaz_7E", "https://www.youtube.com/watch?v=GtRuQqqVLZE"];
    window.open(popup[random(0,4)],
    "", "width=500, height=500");
}

changeVolume();
button.appendChild(volume);

let x = 0;
const functions = [
    alert1,
    alert2,
    goofyPrompt,
    disappearButton,
    enterVolume,
    popups
]

button.addEventListener('click', ()=>{ 

    changeVolume(); 
    changeButtonColor();
    functions[random(0,5)]();

})

submit.addEventListener('click', ()=>{
    let submission = document.createElement('div');
    submission.setAttribute('id', 'submitted');
    let sub = document.createElement('p');
    sub.textContent = "You've set your volume to: " + volume.textContent;
    submission.appendChild(sub);
    container.appendChild(submission);
})
