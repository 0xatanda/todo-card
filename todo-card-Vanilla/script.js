/* ===== STATE ===== */
let completed = false;
let expanded = false;

let dueDate = new Date(Date.now() + 1000 * 60 * 60 * 6);

/* ===== ELEMENTS ===== */
const checkbox = document.getElementById("toggle");
const title = document.getElementById("title");
const status = document.getElementById("status");
const statusText = document.getElementById("statusText");

const timeRemaining = document.getElementById("timeRemaining");
const overdue = document.getElementById("overdue");

const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const viewMode = document.getElementById("view-mode");
const editForm = document.getElementById("editForm");

const expandBtn = document.getElementById("expandBtn");
const collapsible = document.getElementById("collapsible");

/* ===== STATUS SYNC ===== */
function syncStatus() {
  statusText.textContent = status.value;

  if (status.value === "Done") {
    checkbox.checked = true;
    title.classList.add("completed");
  } else {
    checkbox.checked = false;
    title.classList.remove("completed");
  }
}

/* ===== CHECKBOX ===== */
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    status.value = "Done";
  } else {
    status.value = "Pending";
  }
  syncStatus();
});

status.addEventListener("change", syncStatus);

/* ===== TIME LOGIC ===== */
function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  if (status.value === "Done") {
    timeRemaining.textContent = "Completed";
    overdue.textContent = "";
    return;
  }

  const mins = Math.floor(Math.abs(diff) / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);

  if (diff < 0) {
    overdue.textContent = "Overdue";

    if (days) timeRemaining.textContent = `Overdue by ${days} days`;
    else if (hrs) timeRemaining.textContent = `Overdue by ${hrs} hours`;
    else timeRemaining.textContent = `Overdue by ${mins} minutes`;
  } else {
    overdue.textContent = "";

    if (days) timeRemaining.textContent = `Due in ${days} days`;
    else if (hrs) timeRemaining.textContent = `Due in ${hrs} hours`;
    else timeRemaining.textContent = `Due in ${mins} minutes`;
  }
}

setInterval(updateTime, 60000);
updateTime();

/* ===== EXPAND / COLLAPSE ===== */
expandBtn.addEventListener("click", () => {
  expanded = !expanded;
  collapsible.classList.toggle("collapsed");

  expandBtn.textContent = expanded ? "Collapse" : "Expand";
  expandBtn.setAttribute("aria-expanded", expanded);
});

/* ===== EDIT MODE ===== */
editBtn.addEventListener("click", () => {
  viewMode.style.display = "none";
  editForm.hidden = false;
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  editForm.hidden = true;
  viewMode.style.display = "block";
});

editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTitle = document.getElementById("editTitle").value;
  const newDesc = document.getElementById("editDesc").value;

  title.textContent = newTitle || title.textContent;
  document.getElementById("description").textContent = newDesc;

  editForm.hidden = true;
  viewMode.style.display = "block";
});

/* ===== DELETE ===== */
deleteBtn.addEventListener("click", () => {
  alert("Delete clicked");
});