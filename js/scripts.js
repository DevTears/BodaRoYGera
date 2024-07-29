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

document.addEventListener('DOMContentLoaded', function() {
    const recomendarButton = document.getElementById('recomendarButton');
    const modal = document.getElementById('recomendacionModal');
    const closeBtn = document.querySelector('.close');
    const recomendacionForm = document.getElementById('recomendacionForm');
    const successMessage = document.getElementById('successMessage');

    recomendarButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    recomendacionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cancionInput = document.getElementById('cancion');
        if (cancionInput.value.trim() === '') {
            alert('El campo "Nombre de la Canción" es requerido.');
            return;
        }

        const formData = new FormData(recomendacionForm);
        fetch(recomendacionForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                recomendacionForm.reset();
                successMessage.style.display = 'block';
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    modal.style.display = 'none';
                }, 5000);
            } else {
                alert('Hubo un error al enviar tu recomendación. Por favor, intenta nuevamente.');
            }
        }).catch(error => {
            alert('Hubo un error al enviar tu recomendación. Por favor, intenta nuevamente.');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1 // Adjust this value to trigger the animation earlier or later
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('section-hidden');
        observer.observe(section);
    });

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





