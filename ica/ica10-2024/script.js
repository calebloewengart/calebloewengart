const button = document.querySelector("button");

function greet()
{
    const name = prompt("Hi, my name is ");
    
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hi ${name}, nice to meet you!`;
}

button.addEventListener("click", greet);

const button2 = document.querySelector("#red"); 
const style = 
{
    backgroundColor: "red",
    color: "white",
    padding:  "2em"
}

function makeRed()
{
    Object.assign(button2.style, style);
}

button2.addEventListener("click", makeRed);
