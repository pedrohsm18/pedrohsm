function gerarTabuada() {
    document.getElementById('tabuada').innerHTML ='';
    var numero =parseInt(document.getElementById('numero').value);
    if(isNaN(numero)){
        alert('Por favor,insira um número válido.');
        return;
    }
        var tabuadaHTML='<h2>Tabuada do '+numero+'</h2><table>';
        for ( var i=1;i<=10;i++) {
            tabuadaHTML+='<tr><td>'+numero+ 'x'+i+'</td><td>=</td><td>'+ ( numero*i)+'</td><tr>';
        }
        tabuadaHTML+='</table>';
        document.getElementById('tabuada').innerHTML=tabuadaHTML; 
}