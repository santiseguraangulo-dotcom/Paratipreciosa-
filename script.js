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
        btn.textContent = "⏸ Pausar";
    } else {
        musica.pause();
        btn.textContent = "🎵 Reproducir";
    }
}

// --- CARTA POPUP (MODAL) ---
function abrirCarta() {
    document.getElementById('modalCarta').classList.remove('oculto');
    lanzarLluviaBrillos();
}

function cerrarCarta() {
    document.getElementById('modalCarta').classList.add('oculto');
}

// --- FOTO INTERACTIVA GRANDE ---
function abrirFotoGrande() {
    document.getElementById('modalFoto').classList.remove('oculto');
    lanzarLluviaBrillos();
}

function cerrarFotoGrande() {
    document.getElementById('modalFoto').classList.add('oculto');
}

// --- MODAL: PALABRAS / FRASES (NUEVO) ---
function abrirRazon() {
    document.getElementById('modalRazon').classList.remove('oculto');
    lanzarLluviaBrillos();
}

function cerrarRazon() {
    document.getElementById('modalRazon').classList.add('oculto');
}

// --- MODAL: CUMPLEAÑERA (NUEVO) ---
function abrirCumple() {
    document.getElementById('modalCumple').classList.remove('oculto');
    lanzarLluviaBrillos();
}

function cerrarCumple() {
    document.getElementById('modalCumple').classList.add('oculto');
}

// --- CAJITA DE RAZONES EN ORDEN EXACTO (DEL 1 AL 7) ---
const razonesEnOrden = [
    "1. Tus ojos ✨",
    "2. Tus labios 💋",
    "3. Tu sonrisa 💫",
    "4. Tu forma de ser 🤍",
    "5. Lo bien que la pasamos juntos 🌙",
    "6. el detalle que me diste 🔥",
    "7. Me encanta todo de ti, mi reina 😘🫶 "
];

let indiceRazonActual = 0;

function mostrarRazonOrden() {
    const textoRazon = document.getElementById('texto-razon');
    textoRazon.textContent = razonesEnOrden[indiceRazonActual];
    crearBrillo();
    indiceRazonActual = (indiceRazonActual + 1) % razonesEnOrden.length;
}

// --- BOTÓN TRAVIESO "NO" ---
function moverNo(idBtn) {
    const btnNo = document.getElementById(idBtn);
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 50 - 25;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

// --- ACCIÓN BOTÓN FINAL ---
function mostrarMensajeFinal() {
    const contenedor = document.getElementById('respuesta-amor-container');
    if (contenedor) {
        contenedor.classList.remove('oculto');
    }
    lanzarLluviaBrillos();
}

// --- CREAR PARTÍCULAS DE BRILLO ---
function crearBrillo() {
    const contenedor = document.getElementById('brillos');
    if (!contenedor) return;
    
    const brillo = document.createElement('div');
    brillo.classList.add('brillo-particula');
    
    const iconosBrillo = ['✨', '⭐', '💫', '💖', '🌟', '💎'];
    brillo.textContent = iconosBrillo[Math.floor(Math.random() * iconosBrillo.length)];
    
    brillo.style.left = Math.random() * 100 + '%';
    brillo.style.fontSize = (Math.random() * 14 + 10) + 'px';
    brillo.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
    
    contenedor.appendChild(brillo);

    setTimeout(() => {
        brillo.remove();
    }, 4500);
}

// --- LANZAR LLUVIA INTENSA DE BRILLOS ---
function lanzarLluviaBrillos() {
    for(let i = 0; i < 20; i++) {
        setTimeout(crearBrillo, i * 80);
    }
}

setInterval(crearBrillo, 500);
