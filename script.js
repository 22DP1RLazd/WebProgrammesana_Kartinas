const openModalButtons = document.querySelectorAll(".open-modal-btn");
const closeModalButtons = document.querySelectorAll(".close-btn");
const modals = document.querySelectorAll(".modal");

const darkModeToggleButton = document.getElementById('modeToggle');
const bodyElement = document.body;
const cardElements = document.querySelectorAll('.card');

const hamburgerIcon = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigacija');

// Atvert modālo logu ar pogu, un funkcijas saistītas ar to
openModalButtons.forEach(button => {
    button.addEventListener("click", function() {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId); 
        modal.style.display = "block"; 
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", function() {
        const modal = button.closest(".modal"); 
        modal.style.display = "none";
    });
});

// Lai var aiztaisit ari ja uzspies uz tā div, nevis krustiņa
window.addEventListener("click", function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


// Pārbauda vai dark mods bija enablots ieprieks, bet dazreiz saluzt???
if (localStorage.getItem('darkMode') === 'enabled') {
    bodyElement.classList.add('dark-mode'); 
    cardElements.forEach(card => card.classList.add('dark-mode'));
}

darkModeToggleButton.addEventListener('click', function() {
    // Toggle dark mode on the body and cards
    bodyElement.classList.toggle('dark-mode');
    cardElements.forEach(card => card.classList.toggle('dark-mode'));

    // Vēlreiz pārbaudīt šo, iespējams nesaglabā pareizi
    if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode'); 
    }
});

// Hamburgera ikona un navigacijas joslas slēpšana, noņemt konsoles loggeri!!!
hamburgerIcon.addEventListener('click', function() {
    navigationBar.classList.toggle('active');
});