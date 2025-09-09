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

  const LineList = [];
  
  let prevWord = tokens[0];
  let line = [prevWord];
  for (let i = 1; i < tokens.length; i++) {
    if (haveSharesLetters(prevWord, tokens[i])) {
      LineList.push(line.join(' '));

      while (i < tokens.length && haveSharesLetters(prevWord, tokens[i])) 
        i++;

      if (i < tokens.length) {
        prevWord = tokens[i];
        line = [prevWord];
      } 
      else {
        line = [];
        break;
      }
    } 
    else {
      line.push(tokens[i]);
      prevWord = tokens[i];
    }
  }

  if (line.length) 
    LineList.push(line.join(' '));
  
  outputP.html(LineList.join('<br>'));
}

function haveSharesLetters(w1, w2){
  const s1 = new Set(w1.toLowerCase());
  const s2 = new Set(w2.toLowerCase());
  for (const ch of s1) 
    if (s2.has(ch)) 
      return true;
  return false;
}
