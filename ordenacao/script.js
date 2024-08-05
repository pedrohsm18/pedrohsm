function gerarNumeros() {
var numeros = [];
    
    for (var i = 0;i < 10;i ++){
     numeros.push(Math.floor(Math.random()* 100)); 
    
    }
    
    document.getElementById("numeros Gerados").innerText = "Números Gerados:" + numeros.join(", ");
    
    }
    
    function ordenarNumeros() {
    
    var numeros = document.getElementById("numeros Gerados").innerText.split(":")[1].split(",");
    
    numeros.sort(function(a, b) {return a - b});
    
    document.getElementById("numeros Gerados").innerText = "Números Ordenados:"+ numeros.join(",");
    
    }