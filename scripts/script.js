// start Random Theme
function getRandomLightColor() {
  let h = Math.floor(Math.random() * 360);
  let s = 20;
  let l = 90;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

document.getElementById("theme-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomLightColor();
});
// end Random Theme
// start today date
const date = new Date();
const dateArray = String(date).split(" ");
let dayName = dateArray[0];
let dayNumber = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
let monthName = dateArray[1];
let year = date.getFullYear();

document.getElementById("day-Name").innerText = dayName;
document.getElementById(
  "calender-date"
).innerHTML = `<span class="space-x-[3px]">
          <span>${monthName}</span> <span>${dayNumber}</span>
          <span>${year}</span>
        </span>`;
// end today date

// start Clear History
document
  .getElementById("clear-history-btn")
  .addEventListener("click", function () {
    const activityLog = document.getElementById("activity-log");
    // alert("All Log Cleared");
    activityLog.innerHTML = "";
  });
// end Clear History

// start complete button part
// start task Number function
function taskLeft() {
  let taskLeft = parseInt(
    document.getElementById("task-left-number").innerText
  );
  document.getElementById("task-left-number").innerText = taskLeft - 1;
}
function taskDone() {
  let taskLeft = parseInt(
    document.getElementById("task-done-number").innerText
  );
  document.getElementById("task-done-number").innerText = taskLeft + 1;
}
// end  task Number function

// main button
document.querySelectorAll(".complete-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log("Clicked button:", event.target.innerText);
    event.target.disabled = true;
    event.target.classList.add(
      "bg-[#3752FD]",

      "cursor-not-allowed",
      "hover:bg-[#3752FD]",
      "active:scale-100",
      "opacity-20"
    );
    taskLeft();
    taskDone();
  });
});
