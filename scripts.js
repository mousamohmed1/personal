 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    window.location.href = `mailto:phy.mousa@gmail.com?subject=رسالة من ${name}&body=${message}`;
});

function openChat() {
    document.getElementById('chat-box').style.display = 'block';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim() === "") return;

    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    document.querySelector('.messages').appendChild(messageElement);
    input.value = "";
}

// Carousel functionality
let carouselIndex = 0;
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

function setSlidePosition(slide, index) {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

document.querySelector('.carousel').addEventListener('click', function() {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    } else {
        moveToSlide(track, currentSlide, slides[0]);
    }
});
