function validateContactData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|hu)\b/;


  if (name.length < 3 && name.length >= 30){
    document.getElementById("name").style.borderColor = "red";
    alert('The name must be longer than 3 character and less than or equal to 30 character');
    name.focus;
    return false;
  }
  else if (!emailValidation.test(email)) {
    document.getElementById("email").style.borderColor = "red";
    alert('The email must be end with .hu or .com');
    email.focus;
    return false;

  }
  else if (message.length <= 20 && message.length >= 500) {
    document.getElementById("message").style.borderColor = "red";
    alert('Message text must contain at least 20 at most 500 character');
    message.focus;
    return false;
  }
};

/*var button = document.querySelector("#sendBtn");
button.addEventListener("click", sendMessage);*/

function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  alert(name + "\n" + email + "\n" + message + "\n" + "Your message was sent!");

};
