function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function makeControlNumber(date) {
  let year = date.getFullYear();
  let dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  let rand = floor(random(1000, 9999));
  return `XN-${year}${dayOfYear}-${rand}`;
}

function setup() {
  noCanvas();
  grammar = tracery.createGrammar(data);
  select('#generate').mousePressed(generate);
  generate();
}

function generate() {

  let name = grammar.flatten('#name#');
  let pron = grammar.flatten('#pron#');
  let age = grammar.flatten('#age#');
  let embodied = grammar.flatten('#embodied_mode#');
  let repro = grammar.flatten('#repro_pattern#');
  let bodyform = grammar.flatten('#body_form#');
  let mental = grammar.flatten('#mental_form#');
  let relation = grammar.flatten('#relational_config#');
  let visaCode = random(["X1","X2","R1","R2","P1","L1"]);

  let issue = new Date();
  let exp = new Date(issue);
  exp.setFullYear(issue.getFullYear() + 5);

  let issueStr = formatDate(issue);
  let expStr = formatDate(exp);

  let controlNumber = makeControlNumber(issue);

  function wrapField(label, value) {
  return `
    <div class="field">
      <span class="label">${label}</span>
      <span class="value">${value}</span>
    </div>
  `;
}

  let html = `
    ${wrapField("Given Name", name)}
    ${wrapField("Control Number", controlNumber)}
    ${wrapField("Visa Type / Class", visaCode)}
    ${wrapField("Pronoun Mode", pron)}
    ${wrapField("Age", age)}
    ${wrapField("Embodied Mode\n[Legacy Gender]", embodied)}
    ${wrapField("Body Form", bodyform)}
    ${wrapField("Mental Form", mental)}
    ${wrapField("Reproduction Pattern", repro)}
    ${wrapField("Relational Configuration", relation)}
    ${wrapField("Issue Date ", issueStr)}
    ${wrapField("Expiration Date", expStr)}
  `;

  select('#visa-info').html(html);

  let mrzHTML = generateMRZ(name, embodied, visaCode, controlNumber);
  select('#visa-mrz').html(mrzHTML);
}

function esc(x) {
  return x.replace(/</g, "&lt;");
}

function cleanMRZ(x) {
  return x
    .toUpperCase()
    .replace(/[^A-Z]/g, "")     // remove spaces, hyphens, symbols
    .slice(0, 12);               // limit length (MRZ-style)
}

function generateMRZ(name, embodied, visaCode, controlNumber) {

  let nameMRZ = cleanMRZ(name);
  let embodiedMRZ = cleanMRZ(embodied);

  // Line 1
  let line1 = `XENO&lt;&lt;${nameMRZ}&lt;&lt;${embodiedMRZ}&lt;`;
  line1 = padMRZ(line1);

  // Line 2
  let line2 = `${visaCode}&lt;${controlNumber.replace(/-/g,"")}&lt;`;
  line2 = padMRZ(line2);

  return `${line1}${line2}`;
}

function padMRZ(str, length=44) {
  // counts HTML entity as 4 chars, but visually it's OK
  while (str.length < length) str += "&lt;";
  return str;
}

