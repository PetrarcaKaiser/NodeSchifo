const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".sign-up-container form");
    const signInForm = document.querySelector(".sign-in-container form");

    function showError(messageElement, message) {
        messageElement.textContent = message;
    }

    function clearError(messageElement) {
        messageElement.textContent = "";
    }

    signUpForm.addEventListener("submit", function (event) {
        const nicknameInput = this.querySelector("input[name='nickname']");
        const emailInput = this.querySelector("input[name='email']");
        const passwordInput = this.querySelector("input[name='password']");
        const messageElement = document.getElementById("messRegister");

        clearError(messageElement);

        if (!nicknameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim()) {
            event.preventDefault();
            showError(messageElement, "Compila tutti i campi.");
        }
    });

    signInForm.addEventListener("submit", function (event) {
        const emailInput = this.querySelector("input[name='email']");
        const passwordInput = this.querySelector("input[name='password']");
        const messageElement = document.getElementById("messLogin");

        clearError(messageElement);

        if (!emailInput.value.trim() || !passwordInput.value.trim()) {
            event.preventDefault();
            showError(messageElement, "Compila tutti i campi.");
        }
    });
});


document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${email}&password=${password}`,
    });
  
    const result = await response.json();
  
    if (result.success) {
      // Login riuscito, puoi reindirizzare o manipolare l'interfaccia utente
      console.log('Login riuscito, nickname:', result.nickname);
    } else {
      // Login fallito, mostra un messaggio di errore
      console.log('Login fallito:', result.message);
    }
  });