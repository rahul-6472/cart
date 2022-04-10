document.querySelector("form").addEventListener("submit", validateLogin);
document.querySelector("#chkbox").addEventListener("click", togglePassword);

function togglePassword() {
  let passwordData = document.querySelector("#password");
  if (passwordData.type === "password") {
    passwordData.type = "text";
  } else {
    passwordData.type = "password";
  }
}

let logindata = JSON.parse(localStorage.getItem("signUpDetails"));

function validateLogin() {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (email == "") {
    alert("please fill email field !");
  }

  if (password == "") {
    alert("please fill password field !");
  }
  console.log(logindata);
  let passwordMatched = false;
  logindata.forEach((data) => {
    if (email == data.email && password == data.password) {
      passwordMatched = true;
    }
  });
  if (passwordMatched) {
    alert("login is successfull!");
  } else {
    alert("please fill correct credentials!");
  }
}
