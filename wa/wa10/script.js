const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland",  "the White House"];
const insertZ = ["spontaneously combusted",    "froze into an ice cube", "turned into a slug and crawled away"];

let storyText = "It was 24 fahrenheit outside, so :insertx: went for a stroll. When they got to :inserty:, they stared in shock and awe for a while, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a chilly day.";


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY); 
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory =  newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    newStory = newStory.replace("300 pounds",`${weight} stones`);
    const temperature =  Math.round((24 -32) / 1.8);
    newStory = newStory.replace("24 fahrenheit", `${temperature} centegrade`);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}