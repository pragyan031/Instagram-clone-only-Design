const togglePassword = document.querySelector(".toggle-password");
const passwordField = document.querySelector("#pass");

togglePassword.style.display = "none"; // Initially hide the button

passwordField.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    togglePassword.style.display = "inline"; // Show the button when there is content
  } else {
    togglePassword.style.display = "none"; // Hide the button when there is no content
  }
});

togglePassword.addEventListener("click", function () {
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.textContent = type === "password" ? "Show" : "Hide";
});
