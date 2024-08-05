document.getElementById('formulario').addEventListener('submit', function(evento) {
    evento.preventDefault();

    const lancheSelecionado = document.getElementById('lanche').value;
    const bebidaSelecionada = document.getElementById('bebida').value;
    const acompanhamentoSelecionado = document.getElementById('acompanhamento').value;

    let precoLanche, precoBebida, precoAcompanhamento;

    switch (lancheSelecionado) {
        case 'xburger':
            precoLanche = 10.00;
            break;
        case 'xsalada':
            precoLanche = 8.00;
            break;
    }

    switch (bebidaSelecionada) {
        case 'refrigerante':
            precoBebida = 2.50;
            break;
        case 'suco':
            precoBebida = 3.00;
            break;
    }

    switch (acompanhamentoSelecionado) {
        case 'batatafrita':
            precoAcompanhamento = 2.00;
            break;
        case 'onionrings':
            precoAcompanhamento = 3.00;
            break;
    }

    const precoTotal = precoLanche + precoBebida + precoAcompanhamento;

    document.getElementById('resultado').innerHTML =` O  total do seu pedido é: R$ ${precoTotal.toFixed(2)}`;
});