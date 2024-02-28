/********************************************/
/*    función de validación                 */
/********************************************/


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const isValid = validateLoginForm();

        if (isValid) {
            alert('Inicio de sesión exitoso. Redirigiendo...');
            loginForm.submit(); 
        }
    });

    function validateLoginForm() {
        let isValid = true;

        isValid = validateField('user', 'userError', 'Usuario', /^[a-zA-Z0-9]+$/) && isValid;

        isValid = validateField('password', 'passwordError', 'Contraseña', /^.{6,}$/) && isValid;

        return isValid;
    }

    function validateField(fieldName, errorId, fieldLabel, regex) {
        const field = document.getElementById(fieldName);
        const error = document.getElementById(errorId);
        const fieldValue = field.value.trim();

        if (fieldValue === '') {
            error.textContent = `El campo ${fieldLabel} es obligatorio.`;
            error.style.visibility = 'visible'; 
            return false;
        } else if (regex && !regex.test(fieldValue)) {
            error.textContent = `Por favor, ingrese un valor válido en el campo ${fieldLabel}.`;
            error.style.visibility = 'visible'; 
            return false;
        } else {
            error.textContent = '';
            error.style.visibility = 'hidden'; 
            return true;
        }
    }
});