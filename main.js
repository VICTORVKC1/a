
var lastPositionOfX, lastPositionOfY;
color = "black";
widthOfLine = 2;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

var width=screen.width;
newWidth=screen.width-70;
newHeightscreen.height-70;
    if(width<992){
document.getElementById("myCanvas").width=newWidth;
document.getElementById("myCanvas").height=newHeight;
document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart", myTouchStart);
    
    function myTouchStart(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional
       lastPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    
    }

    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
    {
        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
        ctx.stroke();
    

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;
}

function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);


}