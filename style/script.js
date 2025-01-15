document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".content .fade-in");

  const checkVisibility = () => {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      // Jika elemen berada di dalam viewport
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  // Panggil fungsi saat halaman di-scroll
  window.addEventListener("scroll", checkVisibility);

  // Panggil fungsi saat halaman pertama kali dimuat
  checkVisibility();
});

function sendWhatsAppMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = new Date(document.getElementById("date").value);
  const eventDetail = document.getElementById("event").value;

  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const message = `Form Reservasi :\nNama : ${name}\nTanggal : ${formattedDate}\nKeperluan Acara : ${eventDetail}\nApakah tersedia ?`;

  const phoneNumber = "6281229426200";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}

const publicUrl = nhost.storage.getPublicUrl({
  fileId: "https://photos.app.goo.gl/uWiDJsR7g5xPVba59",
});
