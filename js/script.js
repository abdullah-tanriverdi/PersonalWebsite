// Menü ikonu ve navbar'ın açılıp kapanması
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Sayfa kaydırıldığında navbar linklerinin etkinleştirilmesi ve sticky header
window.addEventListener('scroll', () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', top > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Dark mode geçişi
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

// Sayfa içeriğinin belirli bir mesafeden ScrollReveal ile gösterilmesi
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});




// Mixitup plugininin etkinleştirilmesi
var mixer = mixitup('.yazilar-container');

// Sayfa içeriğinin belirli bir animasyonla gösterilmesi
ScrollReveal().reveal('.anasayfa-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.anasayfa-img img, .beceriler-container, .projelerim-box,.yazilar-box,.sertifika-box', {origin: 'bottom'});
ScrollReveal().reveal('.anasayfa-content h1 , .hakkimda-img img', {origin: 'left'});
ScrollReveal().reveal('.anasayfa-content h3, .anasayfa-content p , .hakkimda-content', {origin: 'right'});


