var A = parseInt(prompt("Ingresa el primer Número"));
var B = parseInt(prompt("Ingresa el segundo Número"));

if (A - B < 0) {
  alert("Este número es Negativo:" + (A - B));
} else if (A - B > 0) {
  alert("Este número es Positivo:" + (A - B));
} else {
  alert("Este número es Cero:" + (A - B));
}
