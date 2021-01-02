function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-id").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img-id").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000 );
}

var images = [], x = -1;
images[0] = "1.jpg";
images[1] = "2.jpg";
images[2] = "3.jpg";