/*function checkEmail() {
  var email = document.getElementById("txtEmail");
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    alert("Please provide a valid email address");
    email.focus;
    return false;
  } else {
    true;
  }
}*/
///////////////////////////////////////////////////////////////////////////////////////
function combo() {
  return validate && message();
}

function validate() {
  var firstname = document.getElementById("first");
  var lastname = document.getElementById("last");

  if (firstname.value.trim() == "" || lastname.value.trim() == "") {
    alert("no blank space allowed in Lastname or Firstname field");
    return false;
  } else {
    true;
  }
}

function message() {
  alert("username and password sent to your entered email id!");
}
