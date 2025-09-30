let grammar;

let data = {
  "start": [
    "<div class='menu-title'>Appetizers</div>#appetizer#<br>#appetizer#<br>" +
    "<div class='menu-title'>Mains</div>#main#<br>#main#<br>" +
    "<div class='menu-title'>Desserts</div>#dessert#<br>" +
    "<div class='menu-title'>Drinks</div>#drink#<br>"
  ],

  // Appetizers
  "appetizer": [
    "#adj.capitalize# #food# #appetizerType#",
    "#adj.capitalize# #food# with #adj# #food#",
    "#food.capitalize# and #food# #appetizerType#"
  ],

  "appetizerType": [
    "salad", "bites", "snack", "platter", "dip"
  ],

  // Mains
  "main": [
    "#adj.capitalize# #food# #method#",
    "#food.capitalize# and #food# #method#",
    "#adj.capitalize# #food# with #adj# #food#",
    "#food.capitalize#-#food# #mainCombo#"
  ],

  "mainCombo": [
    "casserole", "soup", "stew", "surprise", "special"
  ],

  // Desserts
  "dessert": [
    "#adj.capitalize# #food# #dessertType#",
    "#food.capitalize# #dessertType#",
    "#adj.capitalize# #food# #dessertType# with #food#",
    "#food.capitalize#-#food# #dessertType#"
  ],

  "dessertType": [
    "cake", "tart", "jelly", "pudding", "pie", "mousse"
  ],


  // Drinks 
  "drink": [
    "#food.capitalize# #drinkType#",
    "#adj.capitalize# #food# #drinkType#",
    "#food.capitalize# #drinkType# with a #adj# twist",
    "#food.capitalize# #drinkType# with #food# topper",
    "#adj.capitalize# #food# #drinkType#"
  ],

  "drinkType": [
    "brew", "juice", "infusion", "cocktail", "martini", "smoothie", "elixir", "punch", "tonic"
  ],

  // Components
  "adj": [
    "slimy", "moldy", "burnt", "rotten", "sticky", "wriggling", "decayed"
  ],

  "food": [
    "bat", "spiders", "moss", "cockroaches", "frogs", "worms", "rats", "toads", "leeches", "centipedes", 
    "maggots", "beetles", "flies", "snakes", "lizards", "snails", "scorpions", "caterpillars"
  ],

  "method": [
    "fried", "roasted", "stewed", "pickled", "grilled", "boiled", "baked", "charred"
  ]
}




let palettes = [
  { bg: "#2c1f1f", menu: "#f2e6e6" }, 
  { bg: "#1e1e2f", menu: "#e0e0f8" }, 
  { bg: "#2b3a2b", menu: "#e6f2e6" }, 
  { bg: "#3a2b3a", menu: "#f2e6f2" },
  { bg: "#453c3c", menu: "#ffffff" },
  { bg: "#2b2b3a", menu: "#f0f0ff" },
  { bg: "#2c102b", menu: "#fff0f0" }
];
let day = 0;

function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  let button = select('#generate');
  button.mousePressed(generate);

  generate();
}

function generate() {
  let expansion = grammar.flatten('#start#');
  let p = select('#menu');
  p.html(expansion);

  day = (day + 1) % palettes.length;
  let choice = palettes[day];
  select('html').style('background-color', choice.bg);
  p.style('background-color', choice.menu);
}