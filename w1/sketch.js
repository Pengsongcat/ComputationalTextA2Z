let textArea, outputP;

function setup() {
  noCanvas();

  textArea = createElement('textarea', '');
  textArea.attribute('rows', '20');
  textArea.attribute('cols', '80');

  outputP = createP('');

  textArea.input(() => process(textArea.value()));
}

function process(text) {
  const tokens = text.match(/[A-Za-z]+/g) || [];    // ONLY LETTERS
  if (tokens.length == 0) {
    outputP.html('');
    return;
  }

  const outLines = [];
  let prev = tokens[0];
  let line = [prev];

  for (let i = 1; i < tokens.length; i++) {
    const w = tokens[i];

    if (haveSharesLetters(prev, w)) {
      outLines.push(line.join(' '));

      while (i < tokens.length && haveSharesLetters(prev, tokens[i])) 
        i++;

      if (i < tokens.length) {
        prev = tokens[i];
        line = [prev];
      } 
      else {
        line = [];
        break;
      }
    } 
    else {
      line.push(w);
      prev = w;
    }
  }

  if (line.length) outLines.push(line.join(' '));

  outputP.html(outLines.join('<br>'));
}

function haveSharesLetters(w1, w2){
  const s1 = new Set(w1.toLowerCase());
  const s2 = new Set(w2.toLowerCase());
  for (const ch of s1) 
    if (s2.has(ch)) 
      return true;
  return false;
}
