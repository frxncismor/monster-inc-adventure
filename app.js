
let button = document.getElementById('button');
let door = document.getElementById('monster-door');
let mensaje = document.getElementById('mensaje');

button.onclick = function(e) {
  e.preventDefault();
  door.classList.toggle('oculto');
  button.classList.toggle('oculto');
  mensaje.classList.toggle('oculto');
}




