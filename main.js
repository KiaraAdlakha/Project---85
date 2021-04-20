canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_Y=10;
car1_X=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_Y=100;
car2_X=10;

background_image="Car racing pic.jpg";
function add()
{
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src= car1_image;

    car2_imgTag= new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src= car2_image;
}
function uploadBackground()
{
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1()
{
     ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}
function uploadCar2()
{
     ctx.drawImage(car2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
    key_pressed=e.keyCode;
    if (key_pressed == "38") 
    {  
        car1_Up();
    }
    if (key_pressed == "40") 
    {
        car1_Down();
    }
    if (key_pressed == "37") 
    {
        car1_Left();
    }
    if (key_pressed == "39") 
    {
        car1_Right();
    }
    if (key_pressed == "87") 
    {
        car2_Up();
    }
    if (key_pressed == "90") 
    {
        car2_Down();
    }
    if (key_pressed == "65") 
    {
        car2_Left();
    }
    if (key_pressed == "68") 
    {
        car2_Right();
    }
    if (car1_X>=700)
    {
     document.getElementById("game_status").innerHTML = "Car 1 Won !!!";
    }
    if (car2_X>=700)
    {
     document.getElementById("game_status").innerHTML = "Car 2 Won !!!";
    }
}
function car1_Up()
{
    if (car1_Y >= 0) 
    {
        car1_Y=car1_Y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_Down()
{
    if (car1_Y <= 500) 
    {
        car1_Y=car1_Y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_Right()
{
    if (car1_X <= 700) 
    {
        car1_X=car1_X + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_Left()
{
    if (car1_X >= 0) 
    {
        car1_X=car1_X - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_Up()
{
    if (car2_Y >= 0) 
    {
        car2_Y=car2_Y - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_Down()
{
    if (car2_Y <= 500) 
    {
        car2_Y=car2_Y + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_Right()
{
    if (car2_X <= 700) 
    {
        car2_X=car2_X + 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_Left()
{
    if (car2_X >= 0) 
    {
        car2_X=car2_X - 10;
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}