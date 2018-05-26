(function() {
    let correctElements = document.querySelectorAll('div.answer > div.correct');
    for (let element of correctElements) {
        element.classList.remove('correct');
    }
    let incorrectElements = document.querySelectorAll('div.answer > div.incorrect');
    for (let element of incorrectElements) {
        element.classList.remove('incorrect');
    }
    let correctnessIcons = document.getElementsByClassName("questioncorrectnessicon");
    for (let icon of correctnessIcons) {
        icon.style.display = "none";
    }
    let radioButtons = document.querySelectorAll("input[type=radio]");
    for (let radio of radioButtons) {
        radio.removeAttribute("checked");
    }
    let rightAnswers = document.querySelectorAll('div.rightanswer');
    for (let rightAnswer of rightAnswers) {
        rightAnswer.style.display = "none";
    }
})();