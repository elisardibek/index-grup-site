// Şirketlerimiz dropdown menüsü açılıp kapandığında
// aria-expanded değerini güncelleyerek ekran okuyuculara doğru bilgi verir
var dropdown = document.querySelector('.nav-dropdown');
var buton = document.querySelector('.nav-dropdown-tetik');

if (dropdown && buton) {
    dropdown.addEventListener('mouseenter', function () {
        buton.setAttribute('aria-expanded', 'true');
    });
    dropdown.addEventListener('mouseleave', function () {
        buton.setAttribute('aria-expanded', 'false');
    });
    dropdown.addEventListener('focusin', function () {
        buton.setAttribute('aria-expanded', 'true');
    });
    dropdown.addEventListener('focusout', function () {
        buton.setAttribute('aria-expanded', 'false');
    });
}