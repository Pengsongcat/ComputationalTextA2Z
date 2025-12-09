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

  // —— 抽取 CFG 字段 ——
  let name = grammar.flatten('#name#');
  let pron = grammar.flatten('#pron#');
  let age = grammar.flatten('#age#');
  let embodied = grammar.flatten('#embodied_mode#');
  let repro = grammar.flatten('#repro_pattern#');
  let bodyform = grammar.flatten('#body_form#');
  let mental = grammar.flatten('#mental_form#');
  let relation = grammar.flatten('#relational_config#');
  let visaCode = random(["X1","X2","R1","R2","P1","L1"]);

  // —— 日期 ——
  let issue = new Date();
  let exp = new Date(issue);
  exp.setFullYear(issue.getFullYear() + 5);

  let issueStr = formatDate(issue);
  let expStr = formatDate(exp);

  // —— 控制编号 ——
  let controlNumber = makeControlNumber(issue);

  // —— 信息排版（自动缩进） ——
  function wrapField(label, value) {
    return `
      <div class="field">
        <span class="label">${label}</span>
        <span class="value">${value}</span>
      </div>
    `;
  }

  let html = `
    ${wrapField("Control Number:", controlNumber)}
    ${wrapField("Given Name:", name)}
    ${wrapField("Visa Type / Class:", visaCode)}
    ${wrapField("Pronoun Mode:", pron)}
    ${wrapField("Age:", age)}
    ${wrapField("Embodied Mode [Legacy Gender]:", embodied)}
    ${wrapField("Body Form:", bodyform)}
    ${wrapField("Mental Form:", mental)}
    ${wrapField("Reproduction Pattern:", repro)}
    ${wrapField("Relational Config:", relation)}
    ${wrapField("Issue Date:", issueStr)}
    ${wrapField("Expiration Date:", expStr)}
  `;

  select('#visa-info').html(html);

  // —— MRZ —— (可以更外星一点)
  select('#visa-mrz').html(
    `XENO<<${name.toUpperCase().replace(/ /g, "<")}<<${visaCode}<<${controlNumber.replace(/-/g,"")}<`
  );
}
