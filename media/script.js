function calcularMedia () {
    var nota1 = parseFloat(document.getElementById('nota1').value)
    var nota2 = parseFloat(document.getElementById('nota2').value)
    var nota3 = parseFloat(document.getElementById('nota3').value)

    var media = (nota1 + nota2 + nota3) / 3;
    var resultadoElemento = document.getElementById('resultado');
    var mensagem;

    if (media>=7) {
       mensagem = 'parabens' + media.toFixed(2);
    } else {mensagem = 'sinto muito hoje nao' + media.toFixed(2);
    }
    resultadoElemento.innerHTML = mensagem;
}