function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const paisResidencia = document.getElementById('paisResidencia').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked').length > 0;
    const genero = document.querySelector('input[name="genero"]:checked');
    const dniImagen = document.getElementById('dniImagen').value;
    
    if (!nombre || !email || !fechaNacimiento || !paisResidencia || !intereses || !genero || !dniImagen) {
        alert('Por favor complete todos los campos requeridos.');
        return false;
    }    
    return true;
}