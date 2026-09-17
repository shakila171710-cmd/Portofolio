// ==========================================
// 1. Menu Navigasi Hamburger Smartphone
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// ==========================================
// 2. Modal Foto Timbul (Profile Image)
// ==========================================
const avatarCard = document.getElementById('avatarCard');
const profileImg = document.getElementById('profileImg');
const imageModal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeImageModal = document.getElementById('closeImageModal');

avatarCard.addEventListener('click', () => {
  modalImg.src = profileImg.src;
  imageModal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeImageModal.addEventListener('click', () => {
  imageModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

imageModal.addEventListener('click', (e) => {
  if (e.target === imageModal) {
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// ==========================================
// 3. Modal "Hubungi Saya" (IG & EMAIL)
// ==========================================
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');
const openContactButtons = document.querySelectorAll('.open-contact-btn');

openContactButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeContactModal.addEventListener('click', () => {
  contactModal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// ==========================================
// 4. Tutup semua modal menggunakan tombol ESC
// ==========================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    imageModal.classList.remove('active');
    contactModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// ==========================================
// 5. Submit Form di Halaman Terakhir
// ==========================================
const finalForm = document.getElementById('quickMessageForm');
if (finalForm) {
  finalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value;
    alert(`Thank you ${name}! Your message has been received.`);
    finalForm.reset();
  });
}