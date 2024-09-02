const video = document.getElementById('video');
const recordBtn = document.getElementById('recordBtn');
const uploadBtn = document.getElementById('uploadBtn');

let mediaRecorder;
let recordedBlobs;

// Access the user's webcam
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        video.srcObject = stream;

        recordBtn.addEventListener('click', () => {
            if (recordBtn.textContent === 'Start Recording') {
                startRecording();
            } else {
                stopRecording();
            }
        });

        uploadBtn.addEventListener('click', () => {
            // This should trigger an upload to Instagram (Backend Required)
            alert("error in uploding!!");
        });
    })
    .catch(err => console.error('Error accessing media devices.', err));

function startRecording() {
    recordedBlobs = [];
    mediaRecorder = new MediaRecorder(video.srcObject);
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();

    recordBtn.textContent = 'Stop Recording';
    uploadBtn.disabled = true;
}

function stopRecording() {
    mediaRecorder.stop();
    recordBtn.textContent = 'Start Recording';
    uploadBtn.disabled = false;
}

function handleDataAvailable(event) {
    if (event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}
