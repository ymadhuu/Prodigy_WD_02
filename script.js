let [hours, minutes, seconds] = [0, 0, 0];
let timerDisplay = document.getElementById("display");
let timer = null;
let laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerText = `${h}:${m}:${s}`;
}

function startTimer() {
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = '';
}

function addLap() {
  const lapTime = timerDisplay.innerText;
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap - ${lapTime}`;
  laps.appendChild(lapItem);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", addLap);

updateDisplay();