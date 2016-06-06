var car=document.getElementById('car');
var command=document.getElementById('cmd');
var execution=document.getElementById('exe');
var style=car.style;
var config=
{
x:44.5,
y:44.5,
angle:0,
direction:'top',
}
style.left=config.x+'px';
style.top=config.y+'px';
function go(){
var dir=config.direction;
switch(dir){
  case 'top':
  traTop();
  break;
  case 'bottom':
  traBottom();
  break;
  case 'right':
  traRight();
  break;
  case 'left':
  traLeft();
  break;
}
}
function turnLeft(){
  config.angle-=90;
  switch(config.direction){
  	case 'top':
  	config.direction='left';
    break;
    case 'bottom':
    config.direction='right';
    break;
    case 'right':
    config.direction='top';
    break;
    case 'left':
    config.direction='bottom';
    break;
  }
}
function turnRight(){
  config.angle+=90;
  switch(config.direction){
  	case 'top':
  	config.direction='right';
    break;
    case 'bottom':
    config.direction='left';
    break;
    case 'right':
    config.direction='bottom';
    break;
    case 'left':
    config.direction='top';
    break;
  }
}
function turnBack(){
  config.angle+=180;
  switch(config.direction){
  	case 'top':
  	config.direction='bottom';
    break;
    case 'bottom':
    config.direction='top';
    break;
    case 'right':
    config.direction='left';
    break;
    case 'left':
    config.direction='right';
    break;
  }
}
function traLeft(){
 if(config.x==44.5){
  alert('左边没路了。');
   return;
}
 config.x-=37;
}
function traRight(){
if(Math.floor(config.x)==377){
  alert('右边没路了。');
  return;
}
 config.x+=37;
}
function traTop(){
if(config.y==44.5){
 alert('上边没路了。');
  return;
}
 config.y-=37;
}
function traBottom() {
if(Math.floor(config.y)==377){
 alert('下边没路了。');
  return;
}
 config.y+=37;
}
function moveLeft(){
if(config.x==44.5){
   alert('左边没路了。');
   return;
}
 config.angle=-90;
 config.direction='left';
 config.x-=37;

}
function moveRight(){
 if(Math.floor(config.x)==44.5){
 alert('右边没路了。');
  return;
}
 config.angle=90;
 config.direction='right';
 config.x+=37;
}
function moveTop(){
if(config.y==44.5){
 alert('上边没路了。');
  return;
}
 config.angle=0;
 config.direction='top';
 config.y-=37;
}
function moveBottom(){
if(Math.floor(config.y)==377){
 alert('下边没路了。');
  return;
}
 config.angle=180;
 config.direction='bottom';
 config.y+=37;
}
execution.onclick=function(){
 var cmd=command.value.trim().toLowerCase();
 if(config.angle==-360||config.angle==360){
  	config.angle=0;
  }
 if(Math.floor(config.x)==0){

 }
  switch(cmd){
  	case 'go':
  	go();
  	break;
  	case 'tun lef':
  	turnLeft();
  	break;
  	case 'tun rig':
  	turnRight();
  	break;
  	case 'tun bac':
  	turnBack();
  	break;
  	case 'tra lef':
  	traLeft();
  	break;
  	case 'tra rig':
  	traRight();
  	break;
  	case 'tra top':
  	traTop();
  	break;
  	case 'tra bot':
  	traBottom();
  	break;
  	case 'mov lef':
  	moveLeft();
  	break;
  	case 'mov rig':
  	moveRight();
  	break;
  	case 'mov top':
  	moveTop();
  	break;
  	case 'mov bot':
    moveBottom();
    break;
    default:
    alert("指令不正确，请重新输入");
  }
  style.left=config.x+'px';
  style.top=config.y+'px';
  style.transform='rotate('+config.angle+'deg)';
}
