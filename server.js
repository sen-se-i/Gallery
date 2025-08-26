// calendar.js
const calendarBody = document.getElementById("calendarBody");
const startHour = 8, endHour = 17; // 8AM - 5PM
const days = 7;

function renderCalendar() {
  for (let hour = startHour; hour < endHour; hour++) {
    // Time column
    const timeDiv = document.createElement("div");
    timeDiv.className = "time-col";
    timeDiv.textContent = `${hour}:00 - ${hour+1}:00`;
    calendarBody.appendChild(timeDiv);

    // Days columns
    for (let d = 0; d < days; d++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.day = d;
      cell.dataset.hour = hour;
      cell.textContent = "";
      cell.addEventListener("click", handleCellClick);
      calendarBody.appendChild(cell);
    }
  }
}

let editMode = false;
document.getElementById("toggleEdit").addEventListener("click", () => {
  editMode = !editMode;
  alert(editMode ? "Edit mode enabled" : "Edit mode disabled");
});

// Temporary user simulation
const currentUser = "user1"; // Replace with real login later
let events = {}; // { "day-hour": { user: "user1", text: "Meeting" } }

function handleCellClick(e) {
  if (!editMode) return;

  const cell = e.target;
  const key = `${cell.dataset.day}-${cell.dataset.hour}`;
  const event = events[key];

  if (event) {
    if (event.user === currentUser) {
      const newText = prompt("Edit or remove (leave empty to delete):", event.text);
      if (!newText) {
        delete events[key];
        cell.textContent = "";
        cell.classList.remove("occupied", "mine");
      } else {
        events[key].text = newText;
        cell.textContent = newText;
      }
    } else {
      alert("This slot is occupied by another user.");
    }
  } else {
    const text = prompt("Enter event:");
    if (text) {
      events[key] = { user: currentUser, text };
      cell.textContent = text;
      cell.classList.add("occupied", "mine");
    }
  }
}

renderCalendar();
