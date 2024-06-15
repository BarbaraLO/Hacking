document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Validar los campos del formulario
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const subject = form.subject.value.trim();
        const contactPref = form.contactPref.value;
        const message = form.message.value.trim();

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const phonePattern = /^\+?[1-9]\d{1,14}$/;

        if (!emailPattern.test(email)) {
            alert('Por favor, introduzca un correo electrónico válido.');
            return;
        }

        if (!phonePattern.test(phone)) {
            alert('Por favor, introduzca un número de teléfono válido.');
            return;
        }

        if (name && email && phone && subject && contactPref && message) {
            // Mostrar mensaje de éxito
            successMessage.style.display = 'block';
            
            // Ocultar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);

            // Resetear el formulario
            form.reset();
        } else {
            alert('Por favor, complete todos los campos del formulario.');
        }
    });
});