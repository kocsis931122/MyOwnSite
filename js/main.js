(function () {


    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|hu)\b/;

    var validateContactData = function () {
      var validName = false;
      var validEmail = false;
      var validMessage = false;
    if (!(name.value.length > 3 && name.value.length < 30)){
      document.getElementById("name").style.borderColor = "red";
      alert('The name must be longer than 3 character and less than or equal to 30 character');
      name.focus;
      return validName = true;
    }
    else if (!emailValidation.test(email.value)) {
      document.getElementById("email").style.borderColor = "red";
      alert('The email must be end with .hu or .com');
      email.focus;
      return validEmail = true;

    }
    else if (!(message.value.length > 20 && message.value.length < 500)) {
      document.getElementById("message").style.borderColor = "red";
      alert('Message text must contain at least 20 at most 500 character');
      message.focus;
      return validMessage = true;
    }

  };
    var sendMessage = function() {
    alert(name.value + "\n" + email.value + "\n" + message.value + "\n" + "Your message was sent!");

  };
  document.getElementById("sendBtn").addEventListener("click", sendMessage);
  name.addEventListener("change", validateContactData);
  email.addEventListener("change", validateContactData);
  message.addEventListener("change", validateContactData);
})();


/*var button = document.querySelector("#sendBtn");
button.addEventListener("click", sendMessage);*/
