// ⬇️ Fungsi ini HARUS di luar DOMContentLoaded biar bisa dipanggil langsung dari HTML
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
window.toggleSidebar = toggleSidebar; // Register biar bisa dipanggil dari onclick="..."

document.addEventListener("DOMContentLoaded", () => {
  // 🔢 Counter animasi angka
  const counters = document.querySelectorAll('.count');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/[^0-9]/g, '');
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(updateCount, 10);
      } else {
        if (target >= 1000000) {
          counter.innerText = (target / 1000000).toFixed(1) + 'M';
        } else if (target >= 1000) {
          counter.innerText = (target / 1000).toFixed(0) + 'K';
        } else {
          counter.innerText = target;
        }
      }
    };

    updateCount();
  });

  // 🎡 Hero Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Otomatis 2 detik sekali

  // Biar tombol bisa dipanggil dari HTML
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;

  // 📱 Dropdown menu toggle
  const toggles = document.querySelectorAll('.dropdown-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;

      // Tutup semua dropdown lain
      document.querySelectorAll('.dropdown').forEach(drop => {
        if (drop !== parent) {
          drop.classList.remove('show');
        }
      });

      // Toggle dropdown sekarang
      parent.classList.toggle('show');
    });
  });

  // Tutup dropdown kalau klik di luar
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(drop => {
        drop.classList.remove('show');
      });
    }
  });

  // 🔄 Info Card Slider
  const wrapper = document.querySelector('.info-card-wrapper');
  const cards = document.querySelectorAll('.info-card');
  let index = 0;
  let interval;

  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => {
      interval = setInterval(() => {
        index = (index + 1) % cards.length;
        updateCards();
      }, 3000);
    });

    wrapper.addEventListener('mouseleave', () => {
      clearInterval(interval);
    });

    function updateCards() {
      cards.forEach((card, i) => {
        card.style.transform = `translateY(${(i - index) * 100}%)`;
      });
    }

    updateCards();
  }
});
