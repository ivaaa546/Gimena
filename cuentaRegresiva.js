document.addEventListener("DOMContentLoaded", () => {
  // Cuenta regresiva
  const nextBirthday = new Date("April 16, 2026 00:00:00").getTime();
  const countdownElement = document.getElementById("countdown");

  setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = nextBirthday - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
  }, 1000);

  // Envío del deseo
  const wishForm = document.getElementById("wishForm");
  const wishInput = document.getElementById("wishInput");
  const wishMessage = document.getElementById("wishMessage");

  if (wishForm) {
    wishForm.addEventListener("submit", function (e) {
      e.preventDefault();
      wishInput.value = "";
      wishMessage.classList.add("show");

      setTimeout(() => {
        wishMessage.classList.remove("show");
      }, 3000);
    });
  }

  // Galería modal
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const imagenes = document.querySelectorAll(".img-modal");

  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  if (modal) {
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});
