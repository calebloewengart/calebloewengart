let button = document.querySelector("#vol");
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
    
    volume.textContent = Math.random()*100;
}

changeVolume();
button.appendChild(volume);

let x = 0;

button.addEventListener('click', ()=>{ 

    changeVolume(); 
    document.getElementById("vol").style.backgroundColor = randomRGB();
    x++; 

    if (x % 2 === 0 && x % 10 !== 0){
        alert("Have you found your volume yet?");
    }
    else if (x % 10 === 0){
        alert("you're still here?");
    }

    //Goofy prompt
    if (x % 4 === 0){
        let prompt = prompt("you good bro? (answer yes or no)", "no");
        if (prompt.toLowerCase() === "yes"){
            alert("Glad to hear it :-)");
        }
        else
        {
            alert("Womp womp, cry about it."); 
        }
    }

    //Change button color


    else if(x % 6 === 0)
    {
        document.getElementById("vol").style.backgroundColor = "rgb(30, 30, 30)";
    }
    else if (x % 6 === 1)
    {
        document.getElementById("vol").style.backgroundColor = "rgb(246, 221, 34)";
    }

    if(x % 7 === 0)
    {
        let newVolume = prompt("Please enter your volume", "-50");
        if (newVolume !== null) {
            volume.textContent = parseFloat(newVolume) + 50; // Update volume with the new value
        }
    }

    //Popups
    if(x % 9 === 0)
    {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "", "width=500, height=500");
    }
    else if(x % 3 === 0 && x >= 9)
    {
        window.open("https://www.youtube.com/watch?v=Jlr_2XOJvrY",
        "", "width=500, height=500");
    }

})
