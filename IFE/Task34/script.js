//GO：向蓝色边所面向的方向前进一格（一格等同于正方形的边长）
//TUN LEF：向左转（逆时针旋转90度）
//TUN RIG：向右转（顺时针旋转90度）
//TUN BAC：向右转（旋转180度）
//TRA LEF：向屏幕的左侧移动一格，方向不变
//TRA TOP：向屏幕的上面移动一格，方向不变
//TRA RIG：向屏幕的右侧移动一格，方向不变
//TRA BOT：向屏幕的下面移动一格，方向不变
//MOV LEF：方向转向屏幕左侧，并向屏幕的左侧移动一格
//MOV TOP：方向转向屏幕上面，向屏幕的上面移动一格
//MOV RIG：方向转向屏幕右侧，向屏幕的右侧移动一格
//MOV BOT：方向转向屏幕下面，向屏幕的下面移动一格
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
  style.top=config.y+'em';
  break;
  case 'bottom':
  config.y+=2.3;
  style.top=config.y+'em';
  break;
  case 'right':
  config.x+=2.3;
  style.x=config.x+'em';
  break;
  case 'left':
  config.x-=2.3;
  style.x=config.x+'em';
  break;
}
}
function turnLeft(){
  config.angle-=90;
  style.transform='rotate('+config.angle+'deg)';
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
  alert(config.direction);
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
}
