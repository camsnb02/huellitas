document.getElementById('bookingForm').addEventListener('submit', function (event) {
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (!service || !date || !time) {
        alert('Por favor, completa todos los campos.');
        event.preventDefault();
    } else {
        alert('Reserva exitosa:\nServicio: ' + service + '\nFecha: ' + date + '\nHora: ' + time);
    }
});
