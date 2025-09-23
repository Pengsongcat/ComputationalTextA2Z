let houseJson;

let houseListOrignal = [];
let rhymesMap = {};
let houseList = [];

let pickBtn;
let houseName;
let houseWords;

let sentence = "";

async function setup() {
  let response = await fetch('json/game-of-thrones-houses.json');
  houseJson = await response.json();
  processHouseJson();
  
  for (let house of houseListOrignal){
    let rhymes = RiTa.rhymesSync(house, { limit: 13 });
    if(rhymes.length >= 5){
      rhymesMap[house] = rhymes;
    }
  }
  houseList = Object.keys(rhymesMap);
  console.log(rhymesMap);
  console.log(houseList);
  
  // Interaction
  pickBtn = createButton("Generate your Game-of-Thrones House");
  pickBtn.addClass("pick-btn");
  
  houseName = createP("");
  houseName.addClass("house-name");

  houseWords = createP("");
  houseWords.addClass("house-words");
  
  pickBtn.mousePressed(pickRandomHouse);
}


function processHouseJson() {
  let keys = Object.keys(houseJson);
  for (let key of keys) {
    if (key != "description"){
      for (let house of houseJson[key]) {
        if (!house.includes(" ")) {
          houseListOrignal.push(house);
        }
      }
    }
  }
}

function pickRandomHouse() {
  selectAll(".rhyme").forEach(el => el.remove());
  sentence = "Pick Your House Words: ";
  houseWords.html(sentence);
  
  let chosenHouse = random(houseList);
  houseName.html(chosenHouse);
  
  let rhymes = rhymesMap[chosenHouse];
  for (let r of rhymes){
    r = r.charAt(0).toUpperCase() + r.slice(1);
    let b = createButton(r);
    b.class("rhyme");
    b.mousePressed(() => addWord(r));
  }

}

function addWord(word) {
  if (sentence === "Pick Your House Words: ") sentence = "";
  sentence += word + " ";
  console.log(sentence)
  houseWords.html(sentence);
}
