// Establecer la fecha de la boda
const weddingDate = new Date('September 28, 2024 20:00:00').getTime();

// Actualizar la cuenta regresiva cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '¡Es el día de la boda!';
    }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('floating-play-button');
    const playIcon = document.getElementById('play-icon');
    const audio = document.getElementById('background-music');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-stop');
        } else {
            audio.pause();
            playIcon.classList.remove('fa-stop');
            playIcon.classList.add('fa-play');
        }
    });
});


