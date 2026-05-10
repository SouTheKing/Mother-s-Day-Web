// Mother's Day Website Script

// Lightbox functionality for single photos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');
const singlePhotos = document.querySelectorAll('.single-photo');

// Open lightbox when a single photo is clicked
singlePhotos.forEach(photo => {
    photo.addEventListener('click', (e) => {
        lightbox.classList.add('active');
        lightboxImg.src = e.target.src;
    });
});

// Close lightbox when X is clicked
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    }
});

// Intro banner button
const introBanner = document.getElementById('introBanner');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    document.body.classList.remove('intro-active');
    introBanner.style.display = 'none';
    const audio = document.getElementById('bg-music');
    audio.play().catch(() => {});
});

// Typing animation for message
const messageText = `Dear Tama,

Happy Mother's Day! [Though it is a little late] I wanted to create something special for you to show how much you mean to me.

Happy Mother’s Day, Mom! Thank you for your unconditional love, patience, and support. I’m grateful for everything you do every single day. Love you always. ❤️

Love always,
[Soumyadeep]`; // Replace 'YOUR_MESSAGE_HERE' with your actual message

let i = 0;
const speed = 50; // typing speed in ms
let hasStartedTyping = false;

function typeWriter() {
    if (i < messageText.length) {
        document.getElementById("typing-text").innerHTML += messageText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Intersection Observer for message section - starts typing when 50% visible
const messageSection = document.getElementById('message');
const observerOptions = {
    threshold: 0.5 // Trigger when 50% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasStartedTyping) {
            hasStartedTyping = true;
            typeWriter();
        }
    });
}, observerOptions);

observer.observe(messageSection);

// Start background music on page load
window.addEventListener('load', () => {
    // Start background music (muted by default, user can unmute)
    const audio = document.getElementById('bg-music');
    audio.volume = 0.5; // Set volume to 50%
    // Note: Browsers may prevent autoplay, so music starts on user interaction
    document.addEventListener('click', () => {
        audio.play().catch(e => console.log('Audio play failed:', e));
    }, { once: true });
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and add active class to corresponding dot
    slides[slideIndex-1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
    
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Create dots for slideshow
function createDots() {
    const slides = document.getElementsByClassName("slide");
    const dotsContainer = document.querySelector(".dots");
    
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => currentSlide(i + 1);
        dotsContainer.appendChild(dot);
    }
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Initialize dots when DOM is loaded
document.addEventListener('DOMContentLoaded', createDots);