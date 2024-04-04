const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const pics = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png"];

const altText = ["channel shift glitch 01", "channel shift glitch 02", "channel shift glitch 03", "channel shift glitch 04", "channel shift glitch 05"];


for (let i = 0; i < pics.length; i++)
{
    let pic = document.createElement("img");
    pic.setAttribute('src', 'images/'+ pics[i]);
    pic.setAttribute('alt', altText[i]);
    thumbBar.append(pic);

    pic.addEventListener('click', function(){
        displayedImage.setAttribute('src', this.src);
    });
    
}

btn.addEventListener('click', () => {
    if (btn.getAttribute('class')=== "dark")
    {
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else if (btn.getAttribute('class') == "light")
    {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
});
/* Wiring up the Darken/Lighten button */
