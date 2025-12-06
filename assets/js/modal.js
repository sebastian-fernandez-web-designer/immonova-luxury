document.addEventListener("DOMContentLoaded", function() {
    const btnEnviar = document.getElementById("btnEnviarCita");
    const alerta = document.getElementById("alertaExito");
    const form = document.getElementById("formCitaModal");

    if (btnEnviar) {
        btnEnviar.addEventListener("click", function() {
            if (form.checkValidity()) {
                // Mostrar alerta
                alerta.classList.remove("d-none");

                // Evitar doble envío
                btnEnviar.disabled = true;
                btnEnviar.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Enviando...';

                // Simulación de envío
                setTimeout(function() {
                    btnEnviar.innerHTML = 'Enviado <i class="fa-solid fa-check ms-2"></i>';

                    // Cerrar modal automáticamente
                    const modalElement = document.getElementById('modalCita');
                    const modalInstance = bootstrap.Modal.getInstance(modalElement);
                    if (modalInstance) {
                        modalInstance.hide();
                    }

                    // Resetear formulario y estado
                    form.reset();
                    alerta.classList.add("d-none");
                    btnEnviar.disabled = false;
                    btnEnviar.innerHTML = 'Confirmar Solicitud <i class="fa-solid fa-paper-plane ms-2"></i>';
                }, 3000); // 3 segundos para más fluidez
            } else {
                form.reportValidity();
            }
        });
    }
});
