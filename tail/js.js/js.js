function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay-movil");
  const textos = document.querySelectorAll(".menu-text");
  const menuBtn = document.getElementById("menuBtn");

  if (window.innerWidth < 1024) {
    // Móviles: sidebar sobrepuesto
    sidebar.classList.toggle("abierto-movil");
    overlay.classList.toggle("visible");
  } else {
    // Escritorio: comportamiento original
    sidebar.classList.toggle("w-64");
    sidebar.classList.toggle("w-16");
    document.getElementById("mainContent").classList.toggle("ml-64");
    document.getElementById("mainContent").classList.toggle("ml-16");
  }

  if (sidebar.classList.contains("w-64") || sidebar.classList.contains("abierto-movil")) {
    setTimeout(() => textos.forEach(el => el.classList.remove("opacity-0")), 200);
    menuBtn.textContent = "✕";
  } else {
    textos.forEach(el => el.classList.add("opacity-0"));
    menuBtn.textContent = "☰";
  }
}
