document.addEventListener("DOMContentLoaded", function () {
  // FAQ Accordion function
  const accordionButtons = document.querySelectorAll(".accordion-item");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const accordionItem = button.closest(".accordion-item");
      const accordionHeader = accordionItem.querySelector(".accordion-header");
      const accordionContent =
        accordionItem.querySelector(".accordion-content");
      const img = accordionItem.querySelector("img");
      // Menutup semua konten accordion kecuali yang terkait dengan item yang sedang dibuka
      document.querySelectorAll(".accordion-content").forEach((content) => {
        if (content !== accordionContent) {
          content.classList.add("hidden");
          content.parentElement.classList.remove("open");
          content.parentElement
            .querySelector(".accordion-header")
            .classList.remove("bg-secondary");
          content.parentElement.querySelector("img").style.transform =
            "rotate(0)";
        }
      });
      // Menggunakan toggle() untuk menambah/menghapus kelas 'hidden'
      accordionContent.classList.toggle("hidden");
      accordionItem.classList.toggle("open");
      // Menambahkan efek bayangan saat item terbuka
      if (!accordionContent.classList.contains("hidden")) {
        accordionHeader.classList.add("bg-secondary");
        img.style.transform = "rotate(180deg)";
      } else {
        accordionHeader.classList.remove("bg-secondary");
        img.style.transform = "rotate(0)";
      }
    });
  });

  // Menu responsive function
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const hiddenDiv = document.getElementById("hiddenDiv");
  const overlay = document.getElementById("overlay");
  menuBtn.addEventListener("click", function () {
    hiddenDiv.classList.toggle("hidden");
  });
  closeBtn.addEventListener("click", function () {
    hiddenDiv.classList.add("hidden");
  });
  overlay.addEventListener("click", function () {
    hiddenDiv.classList.toggle("hidden");
  });

  // Testimonial carousel function
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const carousel = document.querySelector(".carousel");
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");
  nextButton.addEventListener("click", function () {
    let nextIndex = (currentIndex + 1) % slides.length;
    // Memeriksa apakah slide berikutnya kosong, jika ya, mencari slide yang tidak kosong
    while (!slides[nextIndex].querySelector("img")) {
        nextIndex = (nextIndex + 1) % slides.length;
        // Jika semua slide kosong, keluar dari loop
        if (nextIndex === currentIndex) {
            return;
        }
    }
    // Menyembunyikan slide saat ini
    slides[currentIndex].classList.add("hidden");
    // Mengganti currentIndex dengan nextIndex
    currentIndex = nextIndex;
    // Menampilkan slide saat ini
    slides[currentIndex].classList.remove("hidden");
    // Memperbarui tampilan carousel
    updateCarousel();
  });
  prevButton.addEventListener("click", function () {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    // Memeriksa apakah slide sebelumnya kosong, jika ya, mencari slide yang tidak kosong
    while (!slides[prevIndex].querySelector("img")) {
        prevIndex = (prevIndex - 1 + slides.length) % slides.length;
        // Jika semua slide kosong, keluar dari loop
        if (prevIndex === currentIndex) {
            return;
        }
    }
    // Menyembunyikan slide saat ini
    slides[currentIndex].classList.add("hidden");
    // Mengganti currentIndex dengan prevIndex
    currentIndex = prevIndex;
    // Menampilkan slide saat ini
    slides[currentIndex].classList.remove("hidden");
    // Memperbarui tampilan carousel
    updateCarousel();
  });
  function updateCarousel() {
    const offset = -currentIndex * slides[0].offsetWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    slides.forEach((slide) => {
      slide.classList.add("hidden");
    });
    // Menampilkan slide saat ini, kecuali jika itu adalah slide kosong
    if (slides[currentIndex].querySelector("img")) {
      slides[currentIndex].classList.remove("hidden");
    }
  }
});
