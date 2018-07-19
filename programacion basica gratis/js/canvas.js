console.log("Archivo de canvas iniciado");
var d = document.getElementById("dibujo");
var lienzo= d.getContext("2d");
console.log(lienzo);

dibujarLinea("blue",30,50,60,100);
dibujarLinea("red",0,100,40,50);

function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath(); 
}