const images = [
    "../images/bootstrap.png",
    "../images/css.png",
    "../images/flutter.png",
    "../images/github.png",
    "../images/html.png",
    "../images/java.png",
    "../images/javascript.png"
    // Add paths to your images
];

function createImage(i) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = images[i];

    // Set initial position randomly across the screen
    image.style.left = Math.random() * window.innerWidth + 'px';
    image.style.top = Math.random() * window.innerHeight + 'px';

    document.querySelector('.background').appendChild(image);
    return image;
}

function animateImage(image) {
    let x = parseFloat(image.style.left);
    let y = parseFloat(image.style.top);
    let vx = (Math.random() * 1.5 - 0.75) * 2; // Slower random horizontal speed
    let vy = (Math.random() * 1.5 - 0.75) * 2; // Slower random vertical speed

    function move() {
        x += vx;
        y += vy;

        // Bounce off the edges
        if (x <= 0 || x >= window.innerWidth - image.clientWidth) {
            vx = -vx;
        }
        if (y <= 0 || y >= window.innerHeight - image.clientHeight) {
            vy = -vy;
        }

        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        requestAnimationFrame(move);
    }

    move();
}

// Create and animate multiple images at the start
for (let i = 0; i < images.length; i++) {
    const image = createImage(i);
    animateImage(image);
}

// for (let i = 0; i < images.length; i++) {
//     const image = createImage(i);
//     animateImage(image);
// }

// Back to Top Button

// Get the button
// Back to Top Button

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};


document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.classList.add('hover-effect');
        setTimeout(() => {
            backToTopButton.classList.remove('hover-effect');
        }, 1000); // 1 second
    });
});
