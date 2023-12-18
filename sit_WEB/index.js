// Ajoute une animation de défilement fluide pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tu peux ajouter d'autres fonctionnalités JavaScript ici en fonction de tes besoins.
