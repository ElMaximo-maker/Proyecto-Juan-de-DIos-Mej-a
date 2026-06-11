
const form = document.getElementById('miForm');

const tipoUsuario = document.getElementById('tipoUsuario');
const nombre     = document.getElementById('nombre');
const apellidos  = document.getElementById('apellidos');
const edad       = document.getElementById('edad');
const email      = document.getElementById('email');
const telefono   = document.getElementById('telefono');

const errorTipo      = document.getElementById('error-tipo');
const errorNombre    = document.getElementById('error-nombre');
const errorApellidos = document.getElementById('error-apellidos');
const errorEdad      = document.getElementById('error-edad');
const errorEmail     = document.getElementById('error-email');
const errorTelefono  = document.getElementById('error-telefono');

const regexNombre   = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
const regexEmail    = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTelefono = /^(\+?240\s?)?(?:555|551|222)[\s.-]*\d{6,7}$/;

function limpiar(input) {
    input.classList.remove('valido', 'invalido');
}

function validarCampo(input, regex, errorSpan, mensaje) {
    const valor = input.value.trim();
    limpiar(input);
    errorSpan.style.display = 'none';

    if (valor === '') return false;

    if (regex.test(valor)) {
        input.classList.add('valido');
        return true;
    } else {
        errorSpan.textContent = mensaje;
        errorSpan.style.display = 'block';
        input.classList.add('invalido');
        return false;
    }
}

nombre.addEventListener('input', () => {
    if (nombre.value.trim() !== '') {
        regexNombre.test(nombre.value)
            ? nombre.classList.remove('invalido')
            : nombre.classList.add('invalido');
    } else {
        limpiar(nombre);
    }
});

apellidos.addEventListener('input', () => {
    if (apellidos.value.trim() !== '') {
        regexNombre.test(apellidos.value)
            ? apellidos.classList.remove('invalido')
            : apellidos.classList.add('invalido');
    } else {
        limpiar(apellidos);
    }
});

email.addEventListener('input', () => {
    if (email.value.trim() !== '') {
        regexEmail.test(email.value)
            ? email.classList.remove('invalido')
            : email.classList.add('invalido');
    } else {
        limpiar(email);
    }
});

telefono.addEventListener('input', () => {
    if (telefono.value.trim() !== '') {
        regexTelefono.test(telefono.value)
            ? telefono.classList.remove('invalido')
            : telefono.classList.add('invalido');
    } else {
        limpiar(telefono);
    }
});

nombre.addEventListener('blur', () => {
    validarCampo(nombre, regexNombre, errorNombre, 'El nombre debe tener al menos 2 letras');
});

apellidos.addEventListener('blur', () => {
    validarCampo(apellidos, regexNombre, errorApellidos, 'Los apellidos deben tener al menos 2 letras');
});

email.addEventListener('blur', () => {
    validarCampo(email, regexEmail, errorEmail, 'Correo electrónico no válido');
});

telefono.addEventListener('blur', () => {
    validarCampo(telefono, regexTelefono, errorTelefono, 'Número no válido. Debe empezar por 222, 551 o 555');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let primerError = null;

    if (tipoUsuario.value === '') {
        errorTipo.textContent = 'El campo es obligatorio';
        errorTipo.style.display = 'block';
        tipoUsuario.classList.add('invalido');
        if (!primerError) primerError = tipoUsuario;
    } else {
        errorTipo.style.display = 'none';
        tipoUsuario.classList.remove('invalido');
        tipoUsuario.classList.add('valido');
    }

    const nomBien = validarCampo(nombre, regexNombre, errorNombre, 'El nombre debe tener al menos 2 letras');
    if (!nomBien && !primerError) primerError = nombre;

    const apeBien = validarCampo(apellidos, regexNombre, errorApellidos, 'Los apellidos deben tener al menos 2 letras');
    if (!apeBien && !primerError) primerError = apellidos;

    let edadBien = true;
    const valorEdad = edad.value.trim();
    if (valorEdad === '') {
        errorEdad.textContent = 'El campo es obligatorio';
        errorEdad.style.display = 'block';
        edad.classList.add('invalido');
        edadBien = false;
    } else if (parseInt(valorEdad) < 16 || parseInt(valorEdad) > 100) {
        errorEdad.textContent = 'La edad debe estar entre 16 y 100 años';
        errorEdad.style.display = 'block';
        edad.classList.add('invalido');
        edadBien = false;
    } else {
        errorEdad.style.display = 'none';
        edad.classList.remove('invalido');
        edad.classList.add('valido');
    }
    if (!edadBien && !primerError) primerError = edad;

    const emailBien = validarCampo(email, regexEmail, errorEmail, 'Correo electrónico no válido');
    if (!emailBien && !primerError) primerError = email;

    const telBien = validarCampo(telefono, regexTelefono, errorTelefono, 'Número no válido. Debe empezar por 222, 551 o 555');
    if (!telBien && !primerError) primerError = telefono;

    if (primerError) {
        primerError.focus();
        return;
    }

    alert('✅ Identidad verificada\n¡Registro completado con éxito!');
    window.location.href = './login.html';
});