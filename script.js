// Initialize EmailJS
(function () {
    emailjs.init("HhK3cjIVg3QwpL499"); // Replace with your EmailJS public key
  })();
  
  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_dkejeak", "template_ho9wile", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });
  