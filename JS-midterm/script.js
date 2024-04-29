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
button.addEventListener('click', changeVolume);