document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav ul li a');
    var logoLight = document.getElementById('logo-light');
    var logoDark = document.getElementById('logo-dark');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'white'; 
            navLinks.forEach(link => {
                link.style.color = 'black'; //making it black
            });

            // LogoChanging on Scroll 
            logoLight.style.display = 'none';
            logoDark.style.display = 'block';

        } else {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0)'; // transparent
            navLinks.forEach(link => {
                link.style.color = 'white'; 
            });

            // Logo Reseting to default on not scrolling 
            logoLight.style.display = 'block';
            logoDark.style.display = 'none';

        }
    });

    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropbtn = document.querySelector('.dropbtn');

    dropbtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});
