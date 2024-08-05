function calcularpreco() {
    const itemselecionado = document.getElementById('item').value;
    let precoitem;

    switch (itemselecionado) {
        case '1':
            precoitem = 10;
            break
            case '2':
                precoitem = 20;
                break
                case '3':
                    precoitem = 30;
                    break
                    default:
                        precoitem = 0 
    }

    const quantidade = parseInt(prompt('digite a quantide desejada:', '1'));
    const precototal = precoitem * quantidade ;

    const mensagem = precototal > 0 ? 'o preco total e $$ {precototal}' : 'selecione um item valido.';
    document.getElementById('precototal').textContent = mensagem;
}


        
,