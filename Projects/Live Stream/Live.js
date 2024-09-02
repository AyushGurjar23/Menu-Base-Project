const video = document.getElementById('video');
const startButton = document.getElementById('startStream');
const stopButton = document.getElementById('stopStream');
let stream;

// Start the webcam stream
startButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((mediaStream) => {
            stream = mediaStream;
            video.srcObject = stream;
            video.play();
        })
        .catch((err) => {
            console.error("Error accessing the webcam: ", err);
        });
});

// Stop the webcam stream
stopButton.addEventListener('click', () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
});
