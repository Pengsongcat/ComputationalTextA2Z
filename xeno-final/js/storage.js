function saveAnswer(key, value) {
    localStorage.setItem(key, value);
}

function getAnswer(key) {
    return localStorage.getItem(key);
}

function clearAnswers() {
    localStorage.clear();
}
