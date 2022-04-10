document.querySelector("form").addEventListener("submit", addSignupData);

let signUpDetails;

if (localStorage.getItem("signUpDetails") == null) {
  signUpDetails = [];
} else {
  signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
}

function addSignupData() {
  

  event.preventDefault();

  if (document.querySelector("#email").value == "" && document.querySelector("#mob").value == "" && document.querySelector("#password").value == ""  ){
    alert("please fill all fields !")
  }

  else if (document.querySelector("#email").value == ""){
    alert ("please fill email !")
  }

  else if (document.querySelector("#mob").value == ""){
    alert ("please fill mob no !")
  }

  else if(document.querySelector("#password").value == ""){
    alert ("please fill password !")
  }

  let userObj = {
    email: document.querySelector("#email").value,
    mob: document.querySelector("#mob").value,
    password: document.querySelector("#password").value,
  };

  signUpDetails.push(userObj);
  console.log(signUpDetails)

  localStorage.setItem("signUpDetails", JSON.stringify(signUpDetails));

  reset()
  
}
function reset(){
  document.querySelector("#email").value = ""
  document.querySelector("#mob").value = ""
  document.querySelector("#password").value = ""
}