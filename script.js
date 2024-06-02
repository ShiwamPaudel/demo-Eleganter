document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const navlist = document.querySelector('a')

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'white'; 
            navlist.style.color="black";

        } else {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0)'; // transparent
            navlist.style.color='white';
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
