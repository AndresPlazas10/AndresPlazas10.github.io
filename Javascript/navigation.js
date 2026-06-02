// Navegación multi-página: resalta el enlace de la página actual
document.addEventListener("DOMContentLoaded", function () {
  try {
    const navLinks = document.querySelectorAll(".masthead__nav a");
    const currentFile =
      window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const linkFile = href.split("/").pop();
      const isHome =
        currentFile === "" ||
        currentFile === "/" ||
        currentFile === "index.html";
      const isActive =
        linkFile === currentFile ||
        (isHome && (linkFile === "index.html" || linkFile === "./"));

      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  } catch (error) {
    console.error("Error al inicializar la navegación:", error);
  }
});
