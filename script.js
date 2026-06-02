const boton = document.getElementById("saludoBtn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.textContent = "\u00a1Hola! Has creado tu primera p\u00e1gina web.";
});
