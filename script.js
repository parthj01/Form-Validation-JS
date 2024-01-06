const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfpassword = document.getElementById("cnfpassword");
const submit = document.getElementById("btn");
//------------------------------------------------------------
//show password feature
const passwordField = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");
//show password feature check...
showPasswordCheckbox.addEventListener("change", function () {
  if (this.checked) {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const cnfpasswordField = document.getElementById("cnfpassword");
const showCnfPasswordCheckbox = document.getElementById("showCnfPassword");
//show password feature check...
showCnfPasswordCheckbox.addEventListener("change", function () {
  if (this.checked) {
    cnfpasswordField.type = "text";
  } else {
    cnfpasswordField.type = "password";
  }
});
//------------------------------------------------------------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cnfPasswordValue = cnfpassword.value.trim();
  //Username Check
  if (usernameValue === "") {
    setError(username, "Username is required!");
  } else {
    setSuccess(username);
  }
  //Password Check
  if (passwordValue === "") {
    setError(password, "Password is required!");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be atleast 8 characters long");
  } else {
    setSuccess(password);
  }
  //Confirm Password Check
  if (cnfPasswordValue === "") {
    setError(cnfpassword, "Required");
  } else if (cnfPasswordValue !== passwordValue) {
    setError(cnfpassword, "Password doesn't match");
  } else {
    setSuccess(cnfpassword);
  }
  //Email Check
  if (emailValue === "") {
    setError(email, "Email is Required");
  }
  //    else if (!isValidEmail(emailValue)) {
  //     setError(email, "Provide Valid Email Address");
  //   }
  else {
    setSuccess(email);
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
};
