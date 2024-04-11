const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', () => {
    getQuote();
    getImage();
});

const pic = document.querySelector('.quote-pic');

const endpoint = "https://cat-fact.herokuapp.com/facts/random";
const cars = "https://dog.ceo/api/breeds/image/random";

const image = document.getElementById('catpic');

async function getQuote()
{
   // console.log("Test");
   try {
    const response = await fetch(endpoint);
  

    if (!response.ok) {
        throw Error(response.statusText);
    }

    const json = await response.json();


    console.log(json['text']);
    displayQuote(json['text']);
    

   } catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
   }

}

function displayQuote(quote)
{
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getImage()
{
fetch(cars)
    .then(res => res.json())
    .then(result => {
        console.log(result)
        image.src = result.message
        image.setAttribute("width", '50%');
    
    })
    .catch(err => console.log(err))
}



getQuote();
getImage();
