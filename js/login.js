        const form = document.getElementById('miForm');
        const emailInput = document.getElementById('correo');
        const passwordInput = document.getElementById('clave');
        
        const errorEmail = document.getElementById('error-correo');
        const errorPassword = document.getElementById('error-clave');

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexPassword = /^.{6,}$/;

        function limpiarCampo(input) {
            input.classList.remove('valido', 'invalido');
        }

        // Validación de formato (se usa en blur y submit)
        function validarFormato(input, regex, errorElement, mensajeError) {
            const valor = input.value.trim();
            limpiarCampo(input);
            errorElement.style.display = 'none';

            if (valor === '') {
                return false; // No mostramos error aquí
            }

            if (regex.test(valor)) {
                input.classList.add('valido');
                return true;
            } else {
                errorElement.textContent = mensajeError;
                errorElement.style.display = 'block';
                input.classList.add('invalido');
                return false;
            }
        }

        // Validación completa (solo para submit)
        function validarCampoSubmit(input, regex, errorElement, mensajeError, mensajeObligatorio) {
            const valor = input.value.trim();
            limpiarCampo(input);
            errorElement.style.display = 'none';

            if (valor === '') {
                errorElement.textContent = mensajeObligatorio;
                errorElement.style.display = 'block';
                input.classList.add('invalido');
                return false;
            }

            if (regex.test(valor)) {
                input.classList.add('valido');
                return true;
            } else {
                errorElement.textContent = mensajeError;
                errorElement.style.display = 'block';
                input.classList.add('invalido');
                return false;
            }
        }

        // Mientras escribe → solo marca rojo si el formato es incorrecto
        emailInput.addEventListener('input', () => {
            const valor = emailInput.value.trim();
            if (valor !== '') {
                if (!regexEmail.test(valor)) {
                    emailInput.classList.add('invalido');
                } else {
                    emailInput.classList.remove('invalido');
                }
            } else {
                limpiarCampo(emailInput);
            }
        });

        passwordInput.addEventListener('input', () => {
            const valor = passwordInput.value.trim();
            if (valor !== '') {
                if (!regexPassword.test(valor)) {
                    passwordInput.classList.add('invalido');
                } else {
                    passwordInput.classList.remove('invalido');
                }
            } else {
                limpiarCampo(passwordInput);
            }
        });

        // Al salir del campo → solo muestra verde si es correcto
        emailInput.addEventListener('blur', () => {
            validarFormato(emailInput, regexEmail, errorEmail, 'Por favor ingresa un correo electrónico válido');
        });

        passwordInput.addEventListener('blur', () => {
            validarFormato(passwordInput, regexPassword, errorPassword, 'La contraseña debe tener al menos 6 caracteres');
        });

        // Al enviar el formulario
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let esValido = true;

            // Validación completa (muestra "obligatorio" si está vacío)
            const emailValido = validarCampoSubmit(emailInput, regexEmail, errorEmail, 
                'Por favor ingresa un correo electrónico válido', 
                'El campo es obligatorio');

            const passwordValido = validarCampoSubmit(passwordInput, regexPassword, errorPassword, 
                'La contraseña debe tener al menos 6 caracteres', 
                'El campo es obligatorio');

            if (!emailValido) esValido = false;
            if (!passwordValido) esValido = false;

            if (esValido) {
                alert("✅ Identidad verificada");
                window.location.href = "../dashboard.html"; // Cambia la URL si es necesario
            } else {
                if (!emailValido) emailInput.focus();
                else if (!passwordValido) passwordInput.focus();
            }
        });
