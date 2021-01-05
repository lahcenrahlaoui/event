
var images = [], x = -1 , i ;
for(i = 0 ; i < 5 ; i++){
    images[i] = i+".jpg";
}

function next() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img-id").src = images[x];
}


function timer() {
    setInterval(next, 5000 );
}
