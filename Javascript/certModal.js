// Modal para documentos de formación
document.addEventListener("DOMContentLoaded", function () {
  const CREDLY_VERIFY_URL =
    "https://www.credly.com/users/andres-plazas.437f9457";

  try {
    const modal = document.getElementById("certModal");
    const modalTitle = document.getElementById("certModalTitle");
    const modalImage = document.getElementById("certModalImage");
    const modalPlaceholder = document.querySelector(".cert-modal__placeholder");
    const modalHeader = document.querySelector(".cert-modal__header");
    const closeBtn = document.querySelector(".cert-modal__close");
    const modalBtns = document.querySelectorAll(".cert-modal-btn");

    if (
      !modal ||
      !modalTitle ||
      !modalImage ||
      !modalPlaceholder ||
      !modalHeader ||
      !closeBtn
    ) {
      console.warn("Algunos elementos del modal no fueron encontrados");
      return;
    }

    function removeCredlyLink() {
      const existing = document.getElementById("certModalVerify");
      if (existing) existing.remove();
    }

    function addCredlyLink() {
      removeCredlyLink();
      const link = document.createElement("a");
      link.id = "certModalVerify";
      link.className = "cert-modal__verify mono";
      link.href = CREDLY_VERIFY_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "Verificar en Credly →";
      modalHeader.appendChild(link);
    }

    function openModal(title, imagePath, options = {}) {
      if (!title || !imagePath) return;

      modalTitle.textContent = title;

      if (options.showCredly) {
        addCredlyLink();
      } else {
        removeCredlyLink();
      }

      const img = new Image();
      img.onload = function () {
        modalImage.src = imagePath;
        modalImage.style.display = "block";
        modalPlaceholder.style.display = "none";
      };
      img.onerror = function () {
        modalImage.style.display = "none";
        modalPlaceholder.style.display = "block";
      };
      img.src = imagePath;

      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeModal() {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      modalImage.src = "";
      modalImage.style.display = "none";
      modalPlaceholder.style.display = "none";
      removeCredlyLink();
    }

    modalBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const title = this.getAttribute("data-cert-title");
        const imagePath = this.getAttribute("data-cert-image");
        const showCredly = this.classList.contains("cert-modal-btn--credly");

        if (title && imagePath) {
          openModal(title, imagePath, { showCredly });
        }
      });
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        closeModal();
      }
    });
  } catch (error) {
    console.error("Error al inicializar el modal de certificados:", error);
  }
});
