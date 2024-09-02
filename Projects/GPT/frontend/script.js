
function startVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support voice recognition. Please use Chrome or another compatible browser.');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function () {
        console.log('Voice recognition started...');
    };

    recognition.onerror = function (event) {
        console.error('Error occurred in recognition:', event.error);
    };

    recognition.onresult = function (event) {
        const text = event.results[0][0].transcript;
        console.log('Recognized text:', text);
        sendQuery(text);
    };

    recognition.start();
}

function sendQuery(text) {
    // Display user query
    const messageContainer = document.getElementById("messages");
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = text;
    messageContainer.appendChild(userMessage);

    // Make a POST request to your backend server
    fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: text })
    })
    .then(response => response.json())
    .then(data => {
        const assistantMessage = document.createElement("div");
        assistantMessage.className = "message assistant";
        assistantMessage.textContent = data.response;
        messageContainer.appendChild(assistantMessage);
    })
    .catch(error => {
        console.error("Error:", error);
        const errorMessage = document.createElement("div");
        errorMessage.className = "message error";
        errorMessage.textContent = "An error occurred. Please try again.";
        messageContainer.appendChild(errorMessage);
    });
}
