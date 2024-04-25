// ---------------------------------------- DEBUT NAVBAR----------------------------------------

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { /* Si la position de défilement est supérieure à 50 pixels */
            $('#neubar').addClass('navbar-scrolled'); /* Ajouter la classe .navbar-scrolled */
            $('#imglogo').addClass('navbar-scrolled'); /* Ajouter la classe .navbar-scrolled */
        } else {
            $('#neubar').removeClass('navbar-scrolled'); /* Sinon, supprimer la classe .navbar-scrolled */
            $('#imglogo').removeClass('navbar-scrolled'); /* Ajouter la classe .navbar-scrolled */
        }
    });
});

// ---------------------------------------- FIN NAVBAR----------------------------------------

// ---------------------------------------- DEBUT PROGRESS BAR----------------------------------------

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    progressBar.style.width = scrolledPercentage + '%';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

window.addEventListener('load', updateProgressBar);

// ---------------------------------------- FIN PROGRESS BAR----------------------------------------
