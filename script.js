document.addEventListener('DOMContentLoaded', function() {
     /** On annule le comportemen par defaut du formulaire */
     document.getElementById("incoming").addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
})