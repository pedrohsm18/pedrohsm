function verificarTemperatura(temperatura) {
    if (temperatura < 0) {
        return "Está muito frio lá fora! Vista-se quente.";
    } else if (temperatura >= 0 && temperatura < 10) {
        return "Está frio lá fora. Recomendo um casaco.";
    } else if (temperatura >= 10 && temperatura < 20) {
        return "Está um pouco frio. Talvez um suéter seja uma boa ideia.";
    } else if (temperatura >= 20 && temperatura < 30) {
        return "Temperatura agradável. Aproveite!";
    } else {
        return "Está quente lá fora! Não esqueça de se hidratar.";
    }
}

// Exemplo de uso
var temperaturaInformada = 25;
var mensagem = verificarTemperatura(temperaturaInformada);
console.log(mensagem);