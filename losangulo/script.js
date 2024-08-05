function calcularArea(){
    var diametro1 = parseFloat(document.getElementById('diametro1').value);
    var diametro2 = parseFloat(document.getElementById('diametro2').value);
    var area = diametro1 * diametro2 / 2 ;
    var resultadoElemento = document.getElementById('resultado');

    resultadoElemento.innerHTML = 'A área do trapezio  é ' + area.toFixed(2) ; 
}