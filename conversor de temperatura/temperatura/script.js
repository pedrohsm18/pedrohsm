function converterTemperatura() {
 var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = celsius * 9/5 +32;
    var resultadoElemento = document.getElementById('resultado');
resultadoElemento.innerHTML = ' a temperatura em fahrenheit é ' + fahrenheit.toFixed(2) + '°F';
}
