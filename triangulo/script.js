function calcularArea(){
    
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
     var area = base * altura / 2 ;
    var resultadoElemento = document.getElementById('resultado');

    resultadoElemento.innerHTML = 'A área do triângulo é ' + area.toFixed(2) ; 
}