const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error msg//
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success outline//
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
//check email is valid//
function checkEmail(input) {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test( input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }
}
//check required feild//
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFeildName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//check input lenght//
function checklength(input, min, max) {
  if (input.value.lenght < min) {
    showError(
      input,
      `${getFeildName(input)} must be at least ${min} Characters`
    );
  } else if (input.value.lenght > max) {
    showError(
      input,
      `${getFeildName(input)} must bh less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//Get feild Name//
function getFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Events listeners//
form.addEventListener('submit', function(e){
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checklength(username, 3, 15);
  checklength(password, 6, 25);
  checkEmail(email)
});

//   e.preventDefault();

//   if (username.value === "") {
//     showError(username, "username is required");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "Email is required");
//   }else if(!isValidEmail(email.value)){
//     showError(email, "Email is not valid");

//   }
//   else {
//     showSuccess(email);
//   }
//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }
//   if (password2.value === "") {
//     showError(password2, "Confirm password  is required");
//   } else {
//     showSuccess(password2);
//   }
// });

//Check required feilds//

//event listener;
