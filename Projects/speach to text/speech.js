document.getElementById('start-btn').addEventListener('click', function() {
    const output = document.getElementById('output');

    // Check if browser supports SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();

        // Set properties
        recognition.continuous = true; // Keep listening until stopped
        recognition.interimResults = true; // Show partial results
        recognition.lang = 'en-US'; // Set language

        // Start recognition
        recognition.start();

        // Handle the result
        recognition.onresult = function(event) {
            let transcript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }

            output.textContent = transcript;
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error detected: ' + event.error);
        };

        recognition.onend = function() {
            console.log('Speech recognition ended.');
        };
    } else {
        output.textContent = "Your browser doesn't support Speech Recognition.";
    }
});