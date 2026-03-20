const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const nextBtn = document.getElementById("nextBtn");
const nightToggle = document.getElementById("nightToggle");

const redTimeInput = document.getElementById("redTime");
const greenTimeInput = document.getElementById("greenTime");
const yellowTimeInput = document.getElementById("yellowTime");

const countdownEl = document.getElementById("countdown");
const messageEl = document.getElementById("message");
const circle = document.querySelector(".circle circle");

const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");

let lightIndex = 0;
let timeout, countdownInterval;

function getDurations() {
  return [
    parseInt(redTimeInput.value || "3"),
    parseInt(greenTimeInput.value || "3"),
    parseInt(yellowTimeInput.value || "2")
  ];
}

function resetLights() {
  red.classList.remove("active-red");
  green.classList.remove("active-green");
  yellow.classList.remove("active-yellow", "blinking");
}

function setMessage(index) {
  const messages = ["STOP", "GO", "WAIT"];
  messageEl.textContent = messages[index];
}

function updateProgress(seconds) {
  let fullDash = 220;
  let step = fullDash / seconds;
  let offset = 0;
  circle.style.strokeDashoffset = offset;

  countdownInterval = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;
    offset += step;
    circle.style.strokeDashoffset = offset;

    if (seconds <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

function updateLight() {
  resetLights();
  beep.play();

  const durations = getDurations();
  const currentDuration = durations[lightIndex];
  countdownEl.textContent = currentDuration;

  switch (lightIndex) {
    case 0:
      red.classList.add("active-red");
      break;
    case 1:
      green.classList.add("active-green");
      break;
    case 2:
      yellow.classList.add("active-yellow", "blinking");
      break;
  }

  setMessage(lightIndex);
  updateProgress(currentDuration);
  lightIndex = (lightIndex + 1) % 3;

  timeout = setTimeout(updateLight, currentDuration * 1000);
}

function startSystem() {
  clearTimeout(timeout);
  clearInterval(countdownInterval);
  lightIndex = 0;
  updateLight();
}

function stopSystem() {
  clearTimeout(timeout);
  clearInterval(countdownInterval);
  resetLights();
  countdownEl.textContent = "0";
  circle.style.strokeDashoffset = 0;
  messageEl.textContent = "System Stopped";
}

function nextManual() {
  clearTimeout(timeout);
  clearInterval(countdownInterval);
  updateLight();
}

startBtn.addEventListener("click", startSystem);
stopBtn.addEventListener("click", stopSystem);
nextBtn.addEventListener("click", nextManual);

nightToggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  nightToggle.textContent = document.body.classList.contains("night")
    ? "Day Mode"
    : "Night Mode";
});
