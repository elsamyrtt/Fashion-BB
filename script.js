function showBar() {
        bar = document.getElementById("barmenu");
        bar.style.display = "block";
        exitbt = document.getElementById("CloseOpcID");
        exitbt.style.display = "block";
        navbar = document.getElementById("navbarID");
        navbar.style.opacity = "50%";    
}  
function ExitButtonBar(){
    exitbt = document.getElementById("CloseOpcID");
    exitbt.style.display = "none";
    bar = document.getElementById("barmenu");
    bar.style.display = "none";
    navbar.style.opacity = "100%";
}

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('notification-modal');
    const closeModal = document.getElementById('close-modal');
    const notificationForm = document.getElementById('notification-form');
    
    setTimeout(() => {
        modal.style.display = 'block';
    }, 60000);

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Manejar el envío del formulario
    notificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email-input').value;
        alert(`¡Gracias por suscribirte! Te enviaremos notificaciones a: ${email}`);
        modal.style.display = 'none';
    });
    const searchIcon = document.getElementById('searchFa');
    const searchInput = document.querySelector('.searchInput');
});