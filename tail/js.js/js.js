    const menu = document.getElementById("menu-lateral");
    const btn = document.getElementById("btn-menu");
    const overlay = document.getElementById("overlay");

    btn.addEventListener("click", () => {
      menu.classList.toggle("menu-abierto");
      menu.classList.toggle("menu-cerrado");
      overlay.classList.toggle("activo");

      btn.textContent = menu.classList.contains("menu-abierto") ? "✖" : "☰";
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("menu-abierto");
      menu.classList.add("menu-cerrado");
      overlay.classList.remove("activo");
      btn.textContent = "☰";
    });

    // Fondo Matrix
    const canvas = document.getElementById("fondo-matrix");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    const letras = "01";
    const tamaño = 16;
    const columnas = canvas.width / tamaño;
    const drops = Array(Math.floor(columnas)).fill(1);

    function dibujar() {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0ea5e9";
      ctx.font = tamaño + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        const text = letras.charAt(Math.floor(Math.random() * letras.length));
        ctx.fillText(text, i * tamaño, drops[i] * tamaño);
        if (drops[i] * tamaño > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }
    setInterval(dibujar, 40);

    window.addEventListener("resize", () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    });

    // mensaje emergente
    // Seleccionamos todos los enlaces del menú
const menuLinks = document.querySelectorAll('.menu-navegacion a');
const notificacion = document.getElementById('notificacion');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const apartado = link.querySelector('.texto-menu').textContent;

    // Mostrar notificación
    notificacion.textContent = `Ahora estás en el apartado: ${apartado}`;
    notificacion.classList.add('mostrar');

    // Ocultar después de 2.5 segundos
    setTimeout(() => {
      notificacion.classList.remove('mostrar');
    }, 3000);
  });
});

