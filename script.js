const card = document.getElementById("card");
const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const successPanel = document.getElementById("success-panel");
const confirmedEmail = document.getElementById("confirmed-email");
const dismissBtn = document.getElementById("dismiss-btn");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = emailInput.value.trim();

  if (!isValidEmail(value)) {
    card.classList.add("invalid");
    return;
  }

  card.classList.remove("invalid");
  confirmedEmail.textContent = value;
  successPanel.classList.add("visible");
  successPanel.hidden = false;

  document.querySelector(".card__form-side").style.display = "none";
  document.querySelector(".card__image-side").style.display = "none";
});

emailInput.addEventListener("input", () => {
  if (card.classList.contains("invalid") && isValidEmail(emailInput.value.trim())) {
    card.classList.remove("invalid");
  }
});

dismissBtn.addEventListener("click", () => {
  form.reset();
  successPanel.classList.remove("visible");
  successPanel.hidden = true;
  document.querySelector(".card__form-side").style.display = "";
  document.querySelector(".card__image-side").style.display = "";
});
