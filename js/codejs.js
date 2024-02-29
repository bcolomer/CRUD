/********************************************/
/*    función de validación                 */
/********************************************/

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const isValid = validateForm();

    if (isValid) {
         form.submit();
       // alert('El formulario es válido. Puedes enviarlo.');
    }
});

function validateForm() {
    let isValid = true;

    isValid = validateField('fname', 'fnameError', 'Nombre', /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/) && isValid;
    isValid = validateField('lname', 'lnameError', 'Apellidos', /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/) && isValid;
    isValid = validateField('correoElectronico', 'correoElectronicoError', 'Correo Electrónico', /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) && isValid;
    isValid = validateField('telefono', 'telefonoError', 'Telefono', /^[0-9-+\s]+$/) && isValid;
    isValid = validateField('fechaNacimiento', 'fechaNacimientoError', 'Fecha de Nacimiento', /^\d{4}-\d{2}-\d{2}$/) && isValid;
    isValid = validateSelectField('country', 'countryError', 'Ciudad') && isValid;
    return isValid;
}

function validateField(fieldName, errorId, fieldLabel, regex) {
    const field = document.getElementById(fieldName);
    const error = document.getElementById(errorId);
    const fieldValue = field.value.trim();

    if (fieldValue === '') {
        error.textContent = `El campo ${fieldLabel} es obligatorio.`;
        error.style.visibility = 'visible'; 
        isValid = false;
    } else if (!regex.test(fieldValue)) {
        error.textContent = `Por favor, ingrese los datos correctos para el campo ${fieldLabel}.`;
        error.style.visibility = 'visible'; 
        isValid = false;
    } else {
        error.textContent = '';
        error.style.visibility = 'hidden'; 
    }

    return isValid;
}

function validateSelectField(fieldName, errorId, fieldLabel) {
    const field = document.getElementById(fieldName);
    const error = document.getElementById(errorId);

    if (field.value === '') {
        error.textContent = `Por favor, selecciona una ${fieldLabel}.`;
        error.style.visibility = 'visible'; 
        return false;
    } else {
        error.textContent = '';
        error.style.visibility = 'hidden'; 
        return true;
    }
}
