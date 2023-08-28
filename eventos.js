document.addEventListener('DOMContentLoaded', function () {
    const divSaludar = document.querySelector('#saludarBtn').parentElement;
    
    divSaludar.addEventListener('click', function () {
      alert('Hola! Soy el div');
    });
    const botonSaludar = document.querySelector('#saludarBtn');
  botonSaludar.addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Detener la propagación del evento
  });
  });
  