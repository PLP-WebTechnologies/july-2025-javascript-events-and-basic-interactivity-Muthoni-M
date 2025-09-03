// ===== Part 1: Event Handling =====

// Light/Dark mode toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// ===== Part 2: Interactive Elements =====

// Counter
let count = 0;
const countBtn = document.getElementById("countBtn");
const countSpan = document.getElementById("count");

countBtn.addEventListener("click", function() {
  count++;
  countSpan.textContent = count;
});

// FAQ (click question to toggle answer)
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

question.addEventListener("click", function() {
  if (answer.style.display === "none") {
    answer.style.display = "block";
  } else {
    answer.style.display = "none";
  }
});

// ===== Part 3: Form Validation =====
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from refreshing the page
  let valid = true;

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";
  successMsg.textContent = "";

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name cannot be empty";
    valid = false;
  }

  // Validate email
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // Validate password
  if (passInput.value.length < 6) {
    passError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // If all good
  if (valid) {
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
  }
});
