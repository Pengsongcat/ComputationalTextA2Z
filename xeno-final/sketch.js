let grammar;

let p;

function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  p = select('#menu');

  generate();
}

function generate() {
  let pron = grammar.flatten('#pron#');


  p.html(grammar.flatten('#start#'));
}