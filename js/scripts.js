// una forma de capturar eventos es accediendo al elemento primero
/**
document.getElementById("boton").onclick = function(){
    console.log("captura del evento click");
    document.getElementById("demo").innerHTML = "prueba de primer evento";
}
*/

// otra forma es mediante un event listener

document.getElementById("boton").addEventListener('click', function(){
    console.log("ejecucion mediante event listener");
    document.getElementById("demo").innerHTML = "Este es un nuevo texto";
});

// cambiar color del cuerpo al clickear el boton color

document.getElementById("boton_color").addEventListener('click', function(){
    document.body.style.backgroundColor = '#FF0000';
});

// reestablecer el color de fondo

document.getElementById("boton_default").addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});
    