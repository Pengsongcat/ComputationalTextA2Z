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
  generate();
}

function generate() {

  // ----------------------------
  //  Retrieve user answers
  // ----------------------------
  let name = getAnswer("givenName") || "UNSPECIFIED";

  let ageMode = getAnswer("ageMode");              // "number" / "cycle" / "undefined"
  let embodiedMode = getAnswer("embodiedMode");    // "stable" / "fluid" / "diffuse"
  let bodyFormMode = getAnswer("bodyForm");        // soft / dense / flat / twist / fragment
  let mentalMode = getAnswer("mentalForm");        // stream / resonant / weave / flare / inward / scatter
  let reproMode = getAnswer("reproductionMode");   // natural / emotional / interaction / random
  let relationMode = getAnswer("relationalMode");  // self / paired / multi / momentary / none

  // ----------------------------
  //  CFG mapping by category
  // ----------------------------

  // AGE
  let ageKey = "#age_undefined#";
  if (ageMode === "number") ageKey = "#age_number#";
  if (ageMode === "cycle") ageKey = "#age_cycle#";
  if (ageMode === "undefined") ageKey = "#age_undefined#";
  // ageMode undefined → fallback to #age_undefined#

  // EMBODIED MODE
  // EMBODIED MODE
  const embodiedMap = {
    stable: "#embodied_mode_stable#",
    fluid: "#embodied_mode_fluid#",
    diffuse: "#embodied_mode_diffuse#"
  };
  let embodiedKey = grammar.flatten(embodiedMap[embodiedMode] || "#embodied_mode_stable#");


  // BODY FORM
  const bodyFormMap = {
    soft: "#soft_float_form#",
    dense: "#dense_solid_form#",
    flat: "#flat_compressed_form#",
    twist: "#twist_shifting_form#",
    fragment: "#fragment_segment_form#"
  };
  let bodyform = grammar.flatten(bodyFormMap[bodyFormMode] || "#soft_float_form#");

  // MENTAL FORM
  const mentalMap = {
    stream: "#mf_stream#",
    resonant: "#mf_resonant#",
    weave: "#mf_weave#",
    flare: "#mf_flare#",
    inward: "#mf_inward#",
    scatter: "#mf_scatter#"
  };
  let mental = grammar.flatten(mentalMap[mentalMode] || "#mf_stream#");

  // REPRODUCTION PATTERN
  const reproMap = {
    natural: "#description_natural#",
    emotional: "#description_emotional#",
    interaction: "#description_interaction#",
    random: "#description_random#"
  };
  let repro = grammar.flatten(reproMap[reproMode] || "#description_random#");

  // RELATIONAL CONFIG
  const relationMap = {
    self: "#rc_self_aligned#",
    paired: "#rc_shadow_pair#",
    multi: "#rc_drifting#",
    momentary: "#rc_transient#",
    none: "#rc_non_aligned#"
  };
  let relation = grammar.flatten(relationMap[relationMode] || "#rc_non_aligned#");

  // AGE (generate using the chosen key)
  let age = grammar.flatten(ageKey);

  // PRONOUN
  let pron = grammar.flatten("#pron#");

  // Random visa class
  let visaCode = random(["X1","X2","R1","R2","P1","L1"]);


  // ----------------------------
  // Issue / Expiration dates
  // ----------------------------
  let issue = new Date();
  let exp = new Date(issue);
  exp.setFullYear(issue.getFullYear() + 5);

  let issueStr = formatDate(issue);
  let expStr = formatDate(exp);

  let controlNumber = makeControlNumber(issue);


  // ----------------------------
  // Assemble Visa Fields
  // ----------------------------
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
    ${wrapField("Embodied Mode", grammar.flatten(embodiedKey))}
    ${wrapField("Body Form", bodyform)}
    ${wrapField("Mental Form", mental)}
    ${wrapField("Reproduction Pattern", repro)}
    ${wrapField("Relational Configuration", relation)}
    ${wrapField("Issue Date", issueStr)}
    ${wrapField("Expiration Date", expStr)}
  `;

  select('#visa-info').html(html);

  // MRZ
  let mrzHTML = generateMRZ(name, grammar.flatten(embodiedKey), visaCode, controlNumber);
  select('#visa-mrz').html(mrzHTML);
}


// ============= MRZ helpers ============= //

function esc(x) {
  return x.replace(/</g, "&lt;");
}

function cleanMRZ(x) {
  return x
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .slice(0, 12);
}

function generateMRZ(name, embodied, visaCode, controlNumber) {

  let nameMRZ = cleanMRZ(name);
  let embodiedMRZ = cleanMRZ(embodied);

  let line1 = `XENO&lt;&lt;${nameMRZ}&lt;&lt;${embodiedMRZ}&lt;`;
  line1 = padMRZ(line1);

  let line2 = `${visaCode}&lt;${controlNumber.replace(/-/g,"")}&lt;`;
  line2 = padMRZ(line2);

  return `${line1}${line2}`;
}

function padMRZ(str, length=44) {
  while (str.length < length) str += "&lt;";
  return str;
}
