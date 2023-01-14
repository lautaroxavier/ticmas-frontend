function sumar(n1, n2){
    return n1 + n2;
}

document.getElementById("sumar").addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let res = sumar(parseInt(num1), parseInt(num2));

    document.getElementById('resultado').innerHTML = res;
    document.getElementById('mostrar_resultado').style.display = "block";
});
