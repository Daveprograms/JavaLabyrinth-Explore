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

function searchQuestions() {
    var input, filter, questions, i, txtValue, foundMatch = false;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    questions = document.getElementsByClassName('question');
    var questionInFileMessage = document.getElementById('questionInFileMessage');
    var questionNotInFileMessage = document.getElementById('questionNotInFileMessage');
    var searchResultMessage = document.getElementById('searchResultMessage');
    
    
    document.getElementById('knowAnswerForm').style.display = 'none';
    document.getElementById('researchMessage').style.display = 'none';

    for (i = 0; i < questions.length; i++) {
        txtValue = questions[i].textContent || questions[i].innerText;
        if (txtValue.toUpperCase().includes(filter)) {
            questions[i].classList.add('highlighted-question');
            foundMatch = true;  // We found at least one match
        } else {
            questions[i].classList.remove('highlighted-question');
        }
    }

   
    searchResultMessage.style.display = filter ? 'block' : 'none';

  
    if (filter) {
        questionInFileMessage.style.display = foundMatch ? 'block' : 'none';
        questionNotInFileMessage.style.display = foundMatch ? 'none' : 'block';
    } else {
      
        searchResultMessage.style.display = 'none';
    }
}
function knowsAnswer() {
    
    document.getElementById('knowAnswerForm').style.display = 'block';
    document.getElementById('questionNotInFileMessage').style.display = 'none';
}

function hostResearch() {
    
    document.getElementById('researchMessage').style.display = 'block';
    document.getElementById('questionNotInFileMessage').style.display = 'none';
}
function submitQA() {
    var userQuestion = document.getElementById('userQuestion').value;
    var userAnswer = document.getElementById('userAnswer').value;

    
    if (!userQuestion.trim() || !userAnswer.trim()) {
        alert('Please enter both a question and an answer.');
        return;
    }

    
    console.log('New Q&A submitted:', { userQuestion, userAnswer });
    alert('Thank you for submitting your question and answer. We will review it shortly.');

    
    document.getElementById('userQuestion').value = '';
    document.getElementById('userAnswer').value = '';

    
    document.getElementById('knowAnswerForm').style.display = 'none';
}

