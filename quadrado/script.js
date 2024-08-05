function calcularArea() {
var largura = parseFloat(document.getElementById('largura').value); 
  var altura = parseFloat(document.getElementById('altura').value);
    var area = largura * altura;
      var resultadoElemento = document.getElementById('resultado');
    
    resultadoElemento.innerHTML = 'A área do retângulo é' +    area.toFixed(2) +  'unidades quadradas.';
     }