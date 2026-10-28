document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario de registro simulado
    const form = document.querySelector('#formRegistroEmpresa');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const razonSocial = document.querySelector('#razonSocial').value;
            const modalElement = document.querySelector('#modalRegistro');
            const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
            
            bootstrapModal.hide();
            form.reset();

            // Alerta SweetAlert2
            Swal.fire({
                title: '¡Registro Simulado Exitoso!',
                text: `La empresa ${razonSocial} ha sido configurada en el ambiente de demostración de Omnix Technologies.`,
                icon: 'success',
                confirmButtonText: 'Entrar al panel',
                confirmButtonColor: '#0d6efd'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'acceso.html';
                }
            });
        });
    }

    // Evento interactivo para los botones de las tiendas móviles
    const botonesTienda = document.querySelectorAll('.btn-tienda');
    botonesTienda.forEach(boton => {
        boton.addEventListener('click', () => {
            const app = boton.getAttribute('data-app');
            const so = boton.getAttribute('data-so');
            
            Swal.fire({
                title: 'Próximamente',
                text: `${app} para ${so} en desarrollo simulado.`,
                icon: 'info',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });
        });
    });
});