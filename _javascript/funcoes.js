// Javascript Document

function mudaFoto(foto){
    document.getElementById("icone").src=foto;
}

function calcular(){
    var qtd=parseInt(document.getElementById("cquantidade").value)
    total=qtd*1500;
    document.getElementById("ctotal").value=total;
}