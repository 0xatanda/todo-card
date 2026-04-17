```md id="todo_readme_final"
# Advanced Todo Card – Stage 1a (Vanilla JavaScript)

## 📌 Overview
This project is an interactive Todo Card built using **pure HTML, CSS, and JavaScript** as part of Stage 1a requirements.

It extends a basic static todo card into a fully interactive component with edit mode, status synchronization, collapsible sections, and dynamic time updates.

---

## 🚀 Live Demo
[Add your Vercel deployment link here]

Example:
https://todo-card-vanilla.vercel.app

---

## 📁 Project Structure

```

todo-card-vanilla/
│
├── index.html      # UI structure (semantic HTML)
├── styles.css      # Styling and responsive design
├── script.js       # All interactive logic (state + DOM updates)
└── README.md       # Documentation

```id="todo_structure"

---

## ✨ Features

### 1. Todo Display
- Task title, description, and tags
- Priority indicator (Low / Medium / High)
- Due date display
- Status indicator (Pending / In Progress / Done)

---

### 2. Edit Mode (Stateful UI)
- Edit title, description, priority, and due date
- Save updates apply changes instantly
- Cancel restores original view
- Toggle between view and edit modes

---

### 3. Status Management
- Dropdown status control:
  - Pending
  - In Progress
  - Done
- Checkbox syncs with status automatically
- Status stays consistent across all UI elements

---

### 4. Expand / Collapse Description
- Long descriptions are collapsible
- Expand/collapse toggle button
- Uses `aria-expanded` for accessibility

---

### 5. Time Management System
- Displays dynamic time remaining:
  - "Due in X minutes / hours / days"
  - "Overdue by X time"
- Updates every 60 seconds
- Stops updating when status is "Done"
- Shows "Completed" when task is finished

---

### 6. Overdue Indicator
- Visual warning when task is overdue
- Red-highlighted indicator shown when deadline is exceeded

---

## ♿ Accessibility Features

- All inputs use proper `<label for="">`
- Keyboard navigation supported across all controls
- `aria-expanded` and `aria-controls` used for collapsible section
- Focusable buttons and form elements
- Logical tab order maintained

---

## 📱 Responsiveness

Fully responsive layout:

- Mobile (320px): stacked layout
- Tablet (768px): balanced spacing
- Desktop (1024px+): centered card layout

No overflow issues across screen sizes.

---

## 🧠 Technical Implementation

### State Management
Handled manually using vanilla JavaScript:

- `completed` → checkbox state
- `status.value` → task status
- `expanded` → collapse state
- `dueDate` → time calculations

---

### DOM Updates
- Direct DOM manipulation using `textContent`
- Class toggling for visual state changes
- Conditional rendering using `hidden` attribute

---

### Time Logic
- Uses `setInterval()` for periodic updates
- Calculates:
  - Minutes
  - Hours
  - Days
- Handles overdue vs active states separately

---

## 📦 Data-testid Coverage

### Core Elements
- `test-todo-card`
- `test-todo-title`
- `test-todo-description`
- `test-todo-priority`
- `test-todo-priority-indicator`
- `test-todo-status`
- `test-todo-status-control`
- `test-todo-due-date`
- `test-todo-time-remaining`
- `test-todo-overdue-indicator`

---

### Interaction Elements
- `test-todo-complete-toggle`
- `test-todo-edit-button`
- `test-todo-delete-button`
- `test-todo-expand-toggle`

---

### Edit Form Elements
- `test-todo-edit-form`
- `test-todo-edit-title-input`
- `test-todo-edit-description-input`
- `test-todo-edit-priority-select`
- `test-todo-edit-due-date-input`
- `test-todo-save-button`
- `test-todo-cancel-button`

---

### Tags
- `test-todo-tags`
- `test-todo-tag-work`
- `test-todo-tag-urgent`

---

## ⚠️ Known Limitations

- No backend persistence (data resets on refresh)
- Delete action is a demo (no permanent removal)
- No database or API integration

---

## 🧪 How to Run Locally

Simply open:

```

index.html

```

OR use VS Code Live Server for best experience.

---

## 📤 Deployment

Deployed using Vercel:

### Steps:
1. Push project to GitHub
2. Import repository into Vercel
3. Set framework preset to **Other**
4. No build command required
5. Deploy

---

## 👨‍💻 Author
Frontend Stage 1 Submission Project

---

## 📌 Notes
This project strictly uses:
- Vanilla HTML
- Vanilla CSS
- Vanilla JavaScript

No frameworks or build tools were used.
```

---
