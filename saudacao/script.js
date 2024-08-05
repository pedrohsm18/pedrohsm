function atualizarSaudacao() {
    const mensagem = document.getElementById('mensagem');
    const horaAtual = document.getElementById('hora-atual');
    const imagem = document.getElementById('imagem');
    
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    
    let saudacao = "";
    let imagemSrc = "";
    let classeCorpo = "";

    if (horas >= 5 && horas < 12) {
        saudacao = 'Bom dia!';
        imagemSrc = 'manha.jpg';
        classeCorpo = 'morning';
    } else if (horas >= 12 && horas < 18) {
        saudacao = 'Boa tarde!';
        imagemSrc = 'tarde.jpg';
        classeCorpo = 'afternoon';
    } else {
        saudacao = 'Boa noite!';
        imagemSrc = 'noite.jpg';
        classeCorpo = 'evening';
    }

    mensagem.textContent = saudacao;
    horaAtual.textContent = `Hora atual: ${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    imagem.src = imagemSrc;
    document.body.className = classeCorpo;
}

setInterval(atualizarSaudacao, 10000); // Atualiza a saudação e a hora a cada 10 segundos
atualizarSaudacao(); // Inicializa a saudação e a hora ao carregar a página
