let button = document.querySelector("#vol");
let text = document.createElement('p');
let volume = document.createElement('p');

function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

text.textContent = "Click to change volume!";
button.appendChild(text);

function changeVolume()
{
    volume.textContent = Math.random()*100;
    button.appendChild(volume);
}

changeVolume();
button.addEventListener('click', changeVolume);

let x = 0;

button.addEventListener('click', ()=>{
    
   
    x++;
    if (x % 2 === 0 && x % 10 !== 0){
        alert("Have you found your volume yet?");
    }
    if (x % 10 === 0){
        alert("you're still here?");
    }
})