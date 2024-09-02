// Access the DOM elements
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const downloadLink = document.getElementById('downloadLink');

// Get access to the webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => {
        console.error("Error accessing the webcam: ", err);
    });

// Capture photo when button is clicked
snapButton.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas image to a data URL
    const dataURL = canvas.toDataURL('image/png');

    // Update the download link with the image data
    downloadLink.href = dataURL;
    downloadLink.style.display = 'block';
    downloadLink.innerHTML = 'Download Photo';
});
