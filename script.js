
/*
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 500);
};
*/

const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.min.js";
document.body.appendChild(sweetAlertScript);

window.onload = function() {
    const audio = document.getElementById('musica');
    const playBtn = document.getElementById('playMusic');
    if (audio) {
        audio.play().catch(() => {
            // Mostrar el botón si el navegador bloquea el autoplay
            if (playBtn) {
                playBtn.style.display = 'block';
                playBtn.onclick = function() {
                    audio.play();
                    playBtn.style.display = 'none';
                };
            }
        });
    }
};
sweetAlertScript.onload = () => {
    // Función para mostrar los mensajes de amor secuencialmente
    function showLoveMessages() {
        Swal.fire({
            title: '❤️',
            text: 'Para ti, mi Danisita preciosa, que en estos meses has alegrado todos mis días, ojalá lo hagas todos los que me queden <3.',
            icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Siguiente'
        }).then(() => {
            // Reproducir la canción al presionar el primer siguiente
            const audio = document.getElementById('musica');
            if (audio) {
                audio.play();
            }
            Swal.fire({
                title: '❤️',
                text: 'Tu tendrás buenos gustos musicales pero mis gustos son mejores, me gustas tu.',
                icon: 'info',
                showConfirmButton: true,
                confirmButtonText: 'Siguiente'
            }).then(() => {
                Swal.fire({
                    title: '❤️',
                    text: 'Eres la mujer más hermosa del mundo, y lo único bonito que ha salido de tinaco ❤.',
                    icon: 'info',
                    showConfirmButton: true,
                    confirmButtonText: 'Empezar'
                }).then(() => {
                    Swal.fire({
                        title: '❤️',
                        text: 'Te amo mucho mi Danisita ❤️.',
                        icon: 'info',
                        showConfirmButton: true,
                        confirmButtonText: 'Empezar'
                    }).then(() => {
                        // Después de mostrar los mensajes, iniciamos la animación de las flores
                        startAnimation();
                    });
                });
            });
        });
    }

    // Función para iniciar la animación de las flores
    function startAnimation() {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 500);
    }

    // Mostrar los mensajes de amor antes de iniciar la animación
    showLoveMessages();
};