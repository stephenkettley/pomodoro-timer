const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");
const timer = document.getElementById("timer");

let interval;
let timeLeft = 1500;
updateTimer();

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formattedTime;
}

function startTimer() {
  btnStart.classList.add("hide");
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up!");
      btnStart.classList.remove("hide");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  btnStart.classList.remove("hide");
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
  btnStart.classList.remove("hide");
}

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
