
function draw_serpinski(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    // Create gradient
    var grd = ctx.createLinearGradient(0,0,500,0);
    grd.addColorStop(0,"yellow");
    grd.addColorStop(1,"red");
    ctx.fillStyle = grd;
    // Create Vertices
    ctx.fillRect(200,0,1,1);
    ctx.fillRect(400,400,1,1);
    ctx.fillRect(0,400,1,1);
    //starting point
    posx = Math.random() * 400;
    posy = Math.random() * 400;
    counter = 100000;
    while ( counter > 0)
    {
       anindex = Math.floor((Math.random() * 3) );
        if (0 == anindex)
        {
            posx = (posx + 200) /2;
            posy = posy /2;
        }
        else if(1 == anindex)
        {
            posx = (posx + 400) /2;
            posy = (posy+400) /2;
        }
        else
        {
            posx = posx /2;
            posy = (posy + 400) /2;
        }
       
       counter--;
       ctx.fillRect(posx,posy,1,1);
    }
}
window.onload=draw_serpinski
