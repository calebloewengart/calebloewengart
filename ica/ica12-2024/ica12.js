const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const ansBtn = document.querySelector("#js-tweet");
ansBtn.addEventListener('click', getAnswer);
let answer = '';

const ansText = document.querySelector("#js-answer-text");

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote()
{
   // console.log("Test");
   ansText.textContent = '';
   try {
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }

    const json = await response.json();
    console.log(json['question']);
    displayQuote(json['question']);
    
    console.log(json['answer']);
    answer = json['answer'];

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

function getAnswer()
{
    ansText.textContent = answer;
}

getQuote();