const pw1 = document.getElementById("pw");
const pw2 = document.getElementById("pw-confirm");
const errorMessage = document.querySelector(".error-message");

pw1.addEventListener("input", checkPassword);
pw2.addEventListener("input", checkPassword);

function checkPassword() {
  if (pw2.value !== pw1.value && pw2.value !== "") {
    pw1.setCustomValidity(" ");
    pw2.setCustomValidity(" ");
    errorMessage.textContent = "Passwords don't match";
    errorMessage.classList.add("show");
  } else {
    pw2.setCustomValidity("");
    pw1.setCustomValidity("");
    errorMessage.classList.remove("show");
  }
}
