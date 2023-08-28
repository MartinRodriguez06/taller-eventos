document.addEventListener('DOMContentLoaded', function () {
    const divSaludar = document.querySelector('#saludarBtn').parentElement;
    
    divSaludar.addEventListener('click', function () {
      alert('Hola! Soy el div');
    });
  });
  