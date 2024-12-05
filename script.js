// Скрипт для плавної прокрутки до секцій 
document.querySelectorAll('nav ul li a').forEach(anchor => { 
    anchor.addEventListener('click', function (e) { 
        e.preventDefault(); 
        const target = document.querySelector(this.getAttribute('href')); 
        target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        }); 
    }); 
});