let materiales = [];
function registrarVenta() {
    const nombre = document.getElementById('nombreMaterial').value.trim();
    const tipo = document.getElementById('tipoMaterial').value.trim();
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const precioPorUnidad = parseFloat(document.getElementById('precioPorUnidad').value);

    if (!nombre || !tipo || isNaN(cantidad) || isNaN(precioPorUnidad)) {
        alert('Por favor complete todos los campos correctamente.');
        return;
    }

    const material = {
        nombre: nombre,
        tipo: tipo,
        cantidad: cantidad,
        precioPorUnidad: precioPorUnidad
    };


    materiales.push(material);

    actualizarTablaStock();
    calcularTotalCosto();
    limpiarFormulario();
}

function actualizarTablaStock() {
    const tablaStockBody = document.getElementById('tablaStockBody');

    tablaStockBody.innerHTML = '';

    materiales.forEach(material => {
        const costoTotal = material.cantidad * material.precioPorUnidad;

        const fila = `
            <tr>
                <td>${material.nombre}</td>
                <td>${material.tipo}</td>
                <td>${material.cantidad}</td>
                <td>${material.precioPorUnidad.toFixed(2)}</td>
                <td>${costoTotal.toFixed(2)}</td>
            </tr>
        `;

        tablaStockBody.innerHTML += fila;
    });
}

function calcularTotalCosto() {
    let totalCosto = 0;

    materiales.forEach(material => {
        totalCosto += material.cantidad * material.precioPorUnidad;
    });

    const totalCostoValor = document.getElementById('totalCostoValor');
    totalCostoValor.textContent = totalCosto.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('nombreMaterial').value = '';
    document.getElementById('tipoMaterial').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precioPorUnidad').value = '';
}

window.onload = function() {
    actualizarTablaStock();
    calcularTotalCosto();
};