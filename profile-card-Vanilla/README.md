
```md
# Profile Card – Stage 1a (Vanilla JavaScript)

## 📌 Overview
This project is an interactive Profile Card built using **pure HTML, CSS, and JavaScript** as part of Stage 1a requirements.

It extends a basic static profile card into a dynamic, stateful UI component with edit functionality, collapsible content, and live status updates.

---

## 🚀 Live Demo
https://todo-card-xsow.vercel.app/


---

## 📁 Project Structure

```

profile-card-vanilla/
│
├── index.html      # Main UI structure
├── styles.css      # Styling and responsive layout
├── script.js       # All interactive logic
└── README.md       # Documentation

```

---

## ✨ Features

### 1. Profile Display
- Avatar image
- Name and title
- Email and location
- Status indicator

### 2. Edit Mode (Stateful UI)
- Edit profile details (name, title, bio, email)
- Save updates instantly
- Cancel restores previous view
- Toggle between view and edit modes

### 3. Status Control
- Dropdown to change status:
  - Active
  - Inactive
  - Busy
- Updates UI dynamically

### 4. Expand / Collapse Bio
- Bio section is collapsible
- Uses accessible toggle button
- Supports `aria-expanded`

### 5. Delete Action
- Simple delete button (demo action)
- Shows confirmation via alert

---

## ♿ Accessibility Features

- Proper `<label for="">` usage for all form fields
- Keyboard navigable buttons and inputs
- `aria-expanded` used for collapsible bio
- Logical tab order maintained
- Focusable interactive elements

---

## 📱 Responsiveness

The design is fully responsive:

- Mobile (320px): stacked layout
- Tablet (768px): balanced layout
- Desktop (1024px+): compact centered card

No horizontal overflow at any screen size.

---

## 🧠 Technical Implementation

### State Handling
All state is managed using vanilla JavaScript:

- `let expanded` → controls bio toggle
- DOM manipulation for updates (no frameworks used)
- Direct element updates instead of virtual DOM

### UI Updates
- Manual DOM updates using `textContent`
- Class toggling for visual states
- Conditional rendering via `hidden` attribute

---

## 📦 Data-testid Coverage

This project includes all required test selectors:

- `test-profile-card`
- `test-profile-avatar`
- `test-profile-name`
- `test-profile-title`
- `test-profile-status`
- `test-profile-bio`
- `test-profile-edit-form`
- `test-profile-edit-name-input`
- `test-profile-edit-title-input`
- `test-profile-edit-bio-input`
- `test-profile-edit-email-input`
- `test-profile-save-button`
- `test-profile-cancel-button`
- `test-profile-status-control`
- `test-profile-expand-toggle`
- `test-profile-edit-button`
- `test-profile-delete-button`

---

## ⚠️ Known Limitations

- No persistent storage (data resets on refresh)
- No backend integration
- Delete button is a demo action only

---

## 🧪 How to Run Locally

Simply open:

```

index.html

```

OR use VS Code Live Server extension for better development experience.

---

## 📤 Deployment

This project is deployed using Vercel.

Steps used:
1. Push code to GitHub
2. Import repository into Vercel
3. Set framework as "Other"
4. Deploy without build step

---

## 👨‍💻 Author
Frontend Stage 1 Submission Project

---

## 📌 Notes
This project strictly uses:
- No frameworks (React/Vue/etc.)
- No build tools
- Pure HTML, CSS, JavaScript only
```
