const STATE_ROCK = 0;
const STATE_PAPER = 1;
const STATE_SCISSORS = 2;

const buttonRock = document.querySelector(".game-rock");
const buttonPaper = document.querySelector(".game-paper");
const buttonScissors = document.querySelector(".game-scissors");

const animEntry = document.querySelector(".anim-entry-loop");
const animTension = document.querySelector(".anim-tension-loop");
const animResults = document.querySelector(".game-result");
const gameResultsText = document.querySelector(".game-result-text");

const resultHandRock = document.querySelector(".game-result-rock");
const resultHandPaper = document.querySelector(".game-result-paper");
const resultHandScissors = document.querySelector(".game-result-scissors");

buttonRock.addEventListener('click', function() {
  confirmVote(STATE_ROCK);
});
buttonPaper.addEventListener('click', function() {
  confirmVote(STATE_PAPER);
});
buttonScissors.addEventListener('click', function() {
  confirmVote(STATE_SCISSORS);
});

function confirmVote( voteState ) {
  buttonRock.disabled = true;
  buttonPaper.disabled = true;
  buttonScissors.disabled = true;
  
  gameResultsText.classList.add('inactive');

  animEntry.classList.add("inactive");
  animTension.classList.remove("inactive");
  animResults.classList.add("inactive");

  setTimeout(function () {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;

    let cpuVote = getRandomInt(0,2);

    if(cpuVote==STATE_ROCK) {
      resultHandRock.style.display = "block";
      resultHandPaper.style.display = "none";
      resultHandScissors.style.display = "none";
    }
    if(cpuVote==STATE_PAPER) {
      resultHandRock.style.display = "none";
      resultHandPaper.style.display = "block";
      resultHandScissors.style.display = "none";
    }
    if(cpuVote==STATE_SCISSORS) {
      resultHandRock.style.display = "none";
      resultHandPaper.style.display = "none";
      resultHandScissors.style.display = "block";
    }

    if(cpuVote==voteState) {
      gameResultsText.innerHTML = "DRAW";
    } else if(cpuVote==STATE_ROCK && voteState == STATE_SCISSORS || cpuVote==STATE_PAPER && voteState==STATE_ROCK || cpuVote==STATE_SCISSORS && voteState==STATE_PAPER) {
      gameResultsText.innerHTML = "CPU WON";
    } else {
      gameResultsText.innerHTML = "YOU WON";
    }

    gameResultsText.classList.remove('inactive');

    animTension.classList.add("inactive");
    animResults.classList.remove("inactive");
  }, 4000);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
