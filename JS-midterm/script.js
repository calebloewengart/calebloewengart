let button = document.querySelector("#vol");
let text = document.createElement('p');
let volume = document.createElement('p');

text.textContent = "Click to change volume!";
button.appendChild(text);

function changeVolume()
{
    
    volume.textContent = Math.random()*100;
    button.appendChild(volume);
}

changeVolume();

let x = 0;

button.addEventListener('click', ()=>{
    if(x % 7 !== 0){
       changeVolume(); 
    }  
       
    x++;
    if (x % 2 === 0 && x % 10 !== 0){
        alert("Have you found your volume yet?");
    }
    if (x % 10 === 0){
        alert("you're still here?");
    }
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
    if(x % 7 === 0)
    {
        let vulome = prompt("Please enter your volume", "0");
        volume.textContext = vulome - 20;
    }
})