// Un exemple basique : afficher une alerte quand on clique sur un bouton
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function() {
            alert("Merci de télécharger le mod !");
        });
    });
});
