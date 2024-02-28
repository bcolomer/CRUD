/********************************************/
/*    función de validación                 */
/********************************************/

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Validar los campos del formulario
    const isValid = validateForm();

    if (isValid) {
        // Si la validación es exitosa, puedes enviar el formulario aquí
        alert('El formulario es válido. Puedes enviarlo.');
        // form.submit();
    }
});

function validateForm() {
    let isValid = true;

    // Campo de nombre
    isValid = validateField('fname', 'fnameError', 'Nombre', /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/) && isValid;
    // Campo de apellidos
    isValid = validateField('lname', 'lnameError', 'Apellidos', /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/) && isValid;
    // Otros campos del formulario...
// Validar los campos del formulario
isValid = validateField('telefono', 'telefonoError', 'Telefono', /^[0-9-+\s]+$/) && isValid;
isValid = validateField('fechaNacimiento', 'fechaNacimientoError', 'Fecha de Nacimiento', null) && isValid;
isValid = validateField('correoElectronico', 'correoElectronicoError', 'Correo Electrónico', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) && isValid;
isValid = validateSelectField('country', 'countryError', 'Ciudad') && isValid;
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
    } else if (!regex.test(fieldValue)) {
        error.textContent = `Por favor, ingrese solo letras en el campo ${fieldLabel}.`;
        error.style.visibility = 'visible'; // Muestra el mensaje de error
        return false;
    } else {
        error.textContent = '';
        error.style.visibility = 'hidden'; // Oculta el mensaje de error
        return true;
    }
}
function validateSelectField(fieldName, errorId, fieldLabel) {
    const field = document.getElementById(fieldName);
    const error = document.getElementById(errorId);

    // Validar el campo
    if (field.value === '') {
        error.textContent = `Por favor, selecciona una ${fieldLabel}.`;
        error.style.visibility = 'visible'; // Muestra el mensaje de error
        return false;
    } else {
        error.textContent = '';
        error.style.visibility = 'hidden'; // Oculta el mensaje de error
        return true;
    }
}
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

