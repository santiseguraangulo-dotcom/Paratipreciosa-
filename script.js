// --- CONTADOR DE TIEMPO JUNTOS (31 de Mayo de 2026) ---
const fechaInicio = new Date(2026, 4, 31, 0, 0, 0); 

function actualizarContador() {
    const ahora = new Date();
    
    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        meses--;
        const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
        dias += mesAnterior.getDate();
    }
    if (meses < 0) { meses += 12; anos--; }

    let totalMeses = (anos * 12) + meses;

    document.getElementById('reloj').innerHTML = 
        `${totalMeses} meses, ${dias} días, ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// --- MÚSICA DE FONDO ---
function toggleMusica() {
    const musica = document.getElementById('audioAmor');
    const btn = document.querySelector('.btn-musica');
    if (musica.paused) {
        musica.play();
        btn.textContent = "⏸ Pausar Música";
    } else {
        musica.pause();
        btn.textContent = "🎵 Reproducir Nuestra Canción";
    }
}

// --- CARTA POPUP (MODAL) ---
function abrirCarta() {
    document.getElementById('modalCarta').classList.remove('oculto');
    for(let i = 0; i < 8; i++) { crearCorazon(); }
}

function cerrarCarta() {
    document.getElementById('modalCarta').classList.add('oculto');
}

// --- CAJITA DE RAZONES ---
const razones = [
    "Amo tu hermosa sonrisa que alegra mis días 😍",
    "Eres la mujer más increíble de este mundo 👑",
    "Tu forma de ser me vuelve loco de amor 💕",
    "Cada segundo a tu lado es un regalo del cielo ✨",
    "Tus abrazos son mi lugar favorito en el universo 🫂",
    "Me encantas completita, tal como eres ❤️"
];

function mostrarRazon() {
    const textoRazon = document.getElementById('texto-razon');
    const aleatoria = razones[Math.floor(Math.random() * razones.length)];
    textoRazon.textContent = aleatoria;
    crearCorazon();
}

// --- BOTÓN TRAVIESO "NO" ---
function moverNo() {
    const btnNo = document.getElementById('btnNo');
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 50 - 25;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// --- RESPUESTA DEL BOTÓN SÍ ---
function dijoSi() {
    const respuesta = document.getElementById('respuesta-amor');
    respuesta.textContent = "¡Sabía que mi reina me ama con la misma intensidad! Eres mi todo ❤️🔥👑";
    for(let i = 0; i < 15; i++) {
        setTimeout(crearCorazon, i * 100);
    }
}

// --- CORAZONES FLOTANTES ---
function crearCorazon() {
    const contenedor = document.getElementById('corazones');
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-flotante');
    
    const iconos = ['❤️', '💖', '🔥', '👑', '✨', '🌹', '💋'];
    corazon.textContent = iconos[Math.floor(Math.random() * iconos.length)];
    
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.fontSize = (Math.random() * 18 + 14) + 'px';
    corazon.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    contenedor.appendChild(corazon);

    setTimeout(() => {
    corazon.remove();
    }, 7000);
}

setInterval(crearCorazon, 700);
