// 1. Hamburger Menu Toggle (Untuk Mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle class 'active' pada nav-links
    navLinks.classList.toggle('active');
});

// 2. Simple Form Alert (Interaksi)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman
        
        const name = document.getElementById('name').value;
        
        // Tampilkan alert sederhana
        alert(`Terima kasih, ${name}! Pesan Anda telah "terkirim" (simulasi).`);
        
        // Reset form
        contactForm.reset();
    });
}

// 3. Dynamic Greeting (Opsional - Text berubah sesuai jam)
const heroText = document.querySelector('.hero p');
const hour = new Date().getHours();

if (hour < 12) {
    heroText.innerText = "Selamat Pagi! Junior Web Developer.";
} else if (hour < 18) {
    heroText.innerText = "Selamat Siang! Junior Web Developer.";
} else {
    heroText.innerText = "Selamat Malam! Junior Web Developer.";
}