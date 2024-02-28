/********************************************/
/*    función de validación                 */
/********************************************/


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar los campos del formulario
        const isValid = validateLoginForm();

        if (isValid) {
            // Si la validación es exitosa, puedes enviar el formulario aquí
            alert('Inicio de sesión exitoso. Redirigiendo...');
            // loginForm.submit(); // Descomenta esta línea para enviar el formulario
        }
    });

    function validateLoginForm() {
        let isValid = true;

        // Validar el campo de usuario
        isValid = validateField('user', 'userError', 'Usuario', /^[a-zA-Z0-9]+$/) && isValid;

        // Validar el campo de contraseña
        isValid = validateField('password', 'passwordError', 'Contraseña', /^.{6,}$/) && isValid;

        return isValid;
    }

    function validateField(fieldName, errorId, fieldLabel, regex) {
        const field = document.getElementById(fieldName);
        const error = document.getElementById(errorId);
        const fieldValue = field.value.trim();

        // Validar el campo
        if (fieldValue === '') {
            error.textContent = `El campo ${fieldLabel} es obligatorio.`;
            error.style.visibility = 'visible'; // Muestra el mensaje de error
            return false;
        } else if (regex && !regex.test(fieldValue)) {
            error.textContent = `Por favor, ingrese un valor válido en el campo ${fieldLabel}.`;
            error.style.visibility = 'visible'; // Muestra el mensaje de error
            return false;
        } else {
            error.textContent = '';
            error.style.visibility = 'hidden'; // Oculta el mensaje de error
            return true;
        }
    }
});