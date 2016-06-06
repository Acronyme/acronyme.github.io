var car=document.getElementById('car');
var command=document.getElementById('cmd');
var execution=document.getElementById('exe');
var style=car.style;
var config=
{
x:2.8,
y:2.8,
angle:0,
direction:'top',
}
style.left=config.x+'em';
style.top=config.y+'em';
function go(){
var dir=config.direction;
switch(dir){
  case 'top':
  config.y-=2.3;
  break;
  case 'bottom':
  config.y+=2.3;
  break;
  case 'right':
  config.x+=2.3;
  break;
  case 'left':
  config.x-=2.3;
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
 config.x-=2.3;
}
function traRight(){
 config.x+=2.3;
}
function traTop(){
 config.y-=2.3;
}
function traBottom() {
 config.y+=2.3;
}
function moveLeft(){
 config.angle=-90;
 config.direction='left';
 config.x-=2.3;
}
function moveRight(){
 config.angle=90;
 config.direction='right';
 config.x+=2.3;
}
function moveTop(){
 config.angle=0;
 config.direction='top';
 config.y-=2.3;
}
function moveBottom(){
 config.angle=180;
 config.direction='bottom';
 config.y+=2.3;
}
execution.onclick=function(){
 var cmd=command.value.trim().toLowerCase();
 if(config.angle==-360||config.angle==360){
  	config.angle=0;
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
  style.left=config.x+'em';
  style.top=config.y+'em';
  style.transform='rotate('+config.angle+'deg)';
}
