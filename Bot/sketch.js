let markov;
let nameGenerator;

let button;
let textOutput;

let posWordDict = {};
let nameList = [];

let namePlaceholder = "";
let pronPlaceholder = "";
let possPlaceholder = "";

async function setup() {
  noCanvas();
  button = createButton("Generate Text").mousePressed(generateText); 
  button.mousePressed(generateText);
  textOriginal = createP("");
  textOutput = createP("");

  /* for persona generation */
  markov = RiTa.markov(4);
  await addMarkov("data/nemotron_personas.txt");
  await addMarkov("data/personas.txt");
  await addMarkov("data/personas.txt");
  await addMarkov("data/cyborgmanifesto.txt");
  await addMarkov("data/xenofeminism.txt");
  // await addMarkov("data/Metamorphosis.txt");
  await addMarkov("data/frankenstein.txt");
  await createLexicon();    // build substitue lexicon
  // Load names list, this is a little fix for dataset personas.txt
  let namesJson = await loadJSON("data/nemotron_personas_names.json");
  nameList = Object.values(namesJson);
  nameList.sort((a, b) => b.length - a.length);

  /* for name generation */
  nameGenerator = new MarkovGenerator(1, 5);  // N-gram length and maximum length
  let lines = await loadStrings("data/xenofeminism.txt");
  for (let i = 0; i < lines.length; i++) {
    nameGenerator.feed(lines[i]);
  }

  /* for pron generation */
  grammar = RiTa.grammar(alienPronouns);
}

function replaceNames(sentence) {
  let newText = sentence;
  for (let name of nameList) {
    let regex = new RegExp("\\b" + name + "\\b", "g");
    newText = newText.replace(regex, namePlaceholder);
  }
  return newText;
}

async function addMarkov(data_path) {
  let data = await loadStrings(data_path);
  markov.addText(data.join('\n'));
}

async function createLexicon(){
  let corpusText1 = await loadStrings("data/cyborgmanifesto.txt");
  let corpusText2 = await loadStrings("data/xenofeminism.txt");
  let text = corpusText1.join("\n") + "\n" + corpusText2.join("\n");
  
  let words = RiTa.tokenize(text);
  let tags = RiTa.pos(text);

  for (let i = 0; i < words.length; i++) {
    let w = words[i].toLowerCase();
    let pos = tags[i];
    if (!/^[a-zA-Z'-]+$/.test(w)) continue;
    if (!posWordDict[pos]) 
      posWordDict[pos] = [];
    posWordDict[pos].push(w);
  }
}

function replaceWithCorpus(sentence) {
  let words = RiTa.tokenize(sentence);
  let tags = RiTa.pos(sentence);
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let pos = tags[i];
    let newWord = word;
    if (word === namePlaceholder || word === namePlaceholder +'\'s') {
      newWord = word;
    }
    else if (RiTa.isAdjective(word)) {
      newWord = replaceOneWord(word, pos, 0.5);
    }
    else if (pos === "nn" || pos === "nns") {
      newWord = replaceOneWord(word, pos, 0.3);
    }
    else if (pos === "nnp" || pos === "nnps") {
      newWord = replaceOneWord(word, pos, 0.9);
    }
    else if (pos === "prp") {
      newWord = pronPlaceholder;
    }
    else if (pos === "prp$") {
      newWord = Math.random() > 0.5 ? possPlaceholder : "the";
    }
    if (/^[A-Z]/.test(word) && /^[a-z]/.test(newWord)) {
      newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
    }
    newWords.push(newWord);
  }
  return RiTa.untokenize(newWords);
}


function replaceOneWord(word, pos, possibilities=0.5) {
  if (Math.random() > possibilities) {
    return word;
  }
  if (posWordDict[pos] && posWordDict[pos].length > 0) {
    let wordList = posWordDict[pos];
    let randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  } 
  else {
    return word;
  }
}

function generatePersona(){
  let lines = markov.generate(2);
  let output = lines.join(" ");
  // let lines = markov.generate();
  // let output = lines;
  output = replaceNames(output);  // replace names with placeholder
  let replacedSentence = replaceWithCorpus(output);
  return replacedSentence;
}

function generatePron(){
  let result = grammar.expand(); 
  lines = result.split(" / ");
  pronPlaceholder = lines[0];
  possPlaceholder = lines[1];
  return result;
}

function generateName(){
  let temperature = 1.0;
  let result = nameGenerator.generate(temperature);
  result = result.replace(/\s+/g, "").replace(/^[^\w]+|[^\w]+$/g, "").replace(/,/g, "");
  if (result.length > 0) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }
  namePlaceholder = result;
  return result;
}

function generateText() {
  let nameText = generateName();
  let pronText = generatePron();
  let personaText = generatePersona();

  let final = "Name: " + nameText + "<br>Pronoun: " + pronText + "<br>Persona: " + personaText;
  textOutput.html(final);
  
  // textOriginal.html(output);
  // textOriginal.html(RiTa.posInline(output));
}
