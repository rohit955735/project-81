canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200,200,40,0,2*Math.Pi);
ctx.stroke(); 
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
color=document.getElementById("color").value;
console.log(color);
mouse_x=e.clientX -canvas.offsetLeft;
mouse_y=e.clientY -canvas.offsetTop;
console.log("x="+mouse_x+",y="+mouse_y);
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.Pi);
ctx.stroke(); 
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}