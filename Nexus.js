document.addEventListener('DOMContentLoaded', function() {
    displayWelcomeMessage();
});

function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}

function displayWelcomeMessage() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.innerHTML = `<h1>Welcome to JAVA LABYRINTH EXPLORE, ${userName}</h1>`;
        document.body.insertBefore(welcomeDiv, document.body.firstChild);
    }
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
   
    displayWelcomeMessage();
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    localStorage.setItem('userName', name);
    displayWelcomeMessage();
}

function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const reason = document.getElementById('reason').value;
    console.log('Contact Form Submission:', { email, phone, reason });
});
