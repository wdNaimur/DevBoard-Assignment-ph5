// start Random Theme
function getRandomLightColor() {
  let h = Math.floor(Math.random() * 360);
  let s = 20;
  let l = 90;
  return `hsl(${h}, ${s}%, ${l}%)`;
}
document.body.style.backgroundColor = getRandomLightColor();
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
  let taskDone = parseInt(
    document.getElementById("task-done-number").innerText
  );
  document.getElementById("task-done-number").innerText = taskDone + 1;
}
// end  task Number function
// start time for activity log
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let period = hours >= 12 ? "PM" : "AM";

// Convert 24-hour format to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12;
let hour = hours < 10 ? "0" + hours : hours;
let minute = minutes < 10 ? "0" + minutes : minutes;
let second = seconds < 10 ? "0" + seconds : seconds;
// end time for activity log
// main button
document.querySelectorAll(".complete-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    //disable button style
    event.target.disabled = true;
    event.target.classList.add(
      "bg-[#3752FD]",
      "cursor-not-allowed",
      "hover:bg-[#3752FD]",
      "active:scale-100",
      "opacity-20"
    );
    alert("✔️ Board Updated Successfully! 🎯");
    console.log(document.getElementById("task-left-number").innerText);
    if (document.getElementById("task-left-number").innerText === "1") {
      alert(
        "✨ Congratulations! 🎉 You have successfully completed all your current tasks.🔥"
      );
    }
    // taskLeft and taskDone
    taskLeft();
    taskDone();

    // individual complete button heading
    const taskCard = event.target.parentElement.parentElement;
    const heading = taskCard.querySelector("h2");
    const taskList = document.createElement("p");
    taskList.innerHTML = `<p class="text-black opacity-70 p-2.5 bg-blue-100 rounded-lg">
            You have Complete The Task ${heading.textContent} at ${hour}:${minute}:${second} ${period}
          </p>`;
    document.getElementById("activity-log").appendChild(taskList);
  });
});

document
  .getElementById("discover-new")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "blog.html";
  });
