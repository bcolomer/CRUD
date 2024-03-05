/********************************************/
/*    función de validación                 */
/********************************************/


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const isValid = validateLoginForm();

        if (isValid) {
          //  alert('Inicio de sesión exitoso. Redirigiendo...');
            loginForm.submit(); 
        }
    });

    function validateLoginForm() {
        let isValid = true;

        isValid = validateField('user', 'userError', 'Usuario', /^[a-zA-Z0-9]+$/) && isValid;

isValid = validatePassword('password', 'passwordErrorMessage') && isValid;
        return isValid;
    }
    function validatePassword(fieldName, errorMessageId) {
    const field = document.getElementById(fieldName);
    const errorMessage = document.getElementById(errorMessageId);
    const fieldValue = field.value.trim();

    if (fieldValue === '') {
        errorMessage.textContent = 'El campo Contraseña es obligatorio.';
        errorMessage.style.visibility = 'visible'; 
        return false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,}$/.test(fieldValue)) {
        errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.';
        errorMessage.style.visibility = 'visible'; 
        return false;
    } else {
        errorMessage.textContent = '';
        errorMessage.style.visibility = 'hidden'; 
        return true;
    }
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