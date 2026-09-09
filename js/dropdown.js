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
// Hamburger menü - butonu JS ile oluşturup nav'a ekler (HTML dosyalarına dokunmaya gerek yok)
var anaMenu = document.querySelector('nav > ul');

if (anaMenu) {
    anaMenu.id = 'ana-menu';

    var hamburgerButon = document.createElement('button');
    hamburgerButon.type = 'button';
    hamburgerButon.className = 'hamburger-tetik';
    hamburgerButon.setAttribute('aria-expanded', 'false');
    hamburgerButon.setAttribute('aria-controls', 'ana-menu');
    hamburgerButon.setAttribute('aria-label', 'Menüyü aç/kapat');
    hamburgerButon.innerHTML = '<span></span><span></span><span></span>';

    anaMenu.parentNode.insertBefore(hamburgerButon, anaMenu);

    hamburgerButon.addEventListener('click', function () {
        var acikMi = anaMenu.classList.toggle('acik');
        hamburgerButon.setAttribute('aria-expanded', acikMi ? 'true' : 'false');
    });
}
// Şirketlerimiz dropdown - tıklanınca aç/kapa (sadece mobilde, masaüstünde blur ile hover'a bırakılıyor)
var dropdownButonlari = document.querySelectorAll('.nav-dropdown-tetik');

dropdownButonlari.forEach(function (buton) {
    buton.addEventListener('click', function (e) {
        if (window.innerWidth > 768) {
            buton.blur();
            return;
        }
        e.preventDefault();
        var dropdown = buton.closest('.nav-dropdown');
        var acikMi = dropdown.classList.toggle('acik');
        buton.setAttribute('aria-expanded', acikMi ? 'true' : 'false');
    });
});