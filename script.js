function checkForm(input) {
  if (input.value.length < 1) {
    console.log("username is empty");
    return false;
  }
}

addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const inputUsername = document.getElementById("username");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (form.checkValidity()) {
      form.submit();
    } else {
      event.stopPropagation();
      inputUsername.nextElementSibling.style.display = "block";
    }
  });
});
