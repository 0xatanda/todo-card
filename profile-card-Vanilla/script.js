const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

const editForm = document.getElementById("editForm");
const cancelBtn = document.getElementById("cancelBtn");

const toggleBio = document.getElementById("toggleBio");
const bioSection = document.getElementById("bioSection");

const statusControl = document.getElementById("statusControl");
const status = document.getElementById("status");

/* ===== STATUS CONTROL ===== */
statusControl.addEventListener("change", () => {
  status.textContent = statusControl.value;
});

/* ===== BIO TOGGLE ===== */
let expanded = false;

toggleBio.addEventListener("click", () => {
  expanded = !expanded;
  bioSection.classList.toggle("collapsed");

  toggleBio.textContent = expanded ? "Collapse Bio" : "Expand Bio";
  toggleBio.setAttribute("aria-expanded", expanded);
});

/* ===== EDIT MODE ===== */
editBtn.addEventListener("click", () => {
  editForm.hidden = false;
});

cancelBtn.addEventListener("click", () => {
  editForm.hidden = true;
});

/* SAVE EDITS */
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("name").textContent =
    document.getElementById("editName").value;

  document.getElementById("title").textContent =
    document.getElementById("editTitle").value;

  document.getElementById("bio").textContent =
    document.getElementById("editBio").value;

  document.getElementById("email").textContent =
    document.getElementById("editEmail").value;

  editForm.hidden = true;
});

/* DELETE */
deleteBtn.addEventListener("click", () => {
  alert("Profile deleted");
});