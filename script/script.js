  var wrapper = document.getElementsByClassName("page-main")[0];
  var content = document.getElementsByClassName("main-content")[0];
  var core = navigator.userAgent.toLowerCase();
  var musicIcon=document.getElementById("music");
  function myBrowser(){
    if(core.indexOf("opera") > -1){
         return "opera"
     }; //判断是否Opera浏览器
     if (core.indexOf("firefox") > -1) {
         return "ff";
     } //判断是否Firefox浏览器
     if (core.indexOf("chrome") > -1){
   return "chrome";
  }
     if (core.indexOf("safari") > -1) {
         return "safari";
     } //判断是否Safari浏览器
     if (core.indexOf("compatible") > -1 && core.indexOf("msie") > -1 && !isOpera) {
         return "IE";
     }; //判断是否IE浏览器
 }
  
  (function changeColor() {
    var degs = 360 * Math.random();
    //为content和页面分别设置不同的随机背景色
    //判断手机端
    if (core.indexOf('mobile') != -1) {
      if(myBrowser()=='safari'||myBrowser()=='chrome'){
      content.style.background = "-webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff))";
      wrapper.style.background = "-webkit-gradient(linear, left top,left bottom,from(#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + "),to(#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + "))";
    }
  }
    //判断电脑端
    else {
      if(myBrowser()=='safari'||myBrowser()=='chrome'){
      content.style.background = "-webkit-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      wrapper.style.background = "-webkit-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }else if(myBrowser=='IE'){
      content.style.background = "-ms-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      wrapper.style.background = "-ms-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }else if(myBrowser=='ff'){
      content.style.background = "-moz-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      wrapper.style.background = "-moz-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)
      }else if(myBrowser=='opera'){
      content.style.background = "-o-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      wrapper.style.background = "-o-linear-gradient(" + degs + "deg,#" + Math.floor(Math.random() * 0xFFFFFF).toString(16) + ",#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      }
    }
    var bgColor1 = wrapper.style.background;
    var bgColor2 = content.style.background;
    content.style.opacity = 0.4;
    if (!bgColor1 || bgColor1 == "#fff" || !bgColor2 || bgColor2 == "#fff" || bgColor1 == bgColor2) {
      changeColor();
    }
  })();

  //显示与隐藏任务介绍
  (function display() {
    var tasks = document.getElementsByClassName("items");
    var text_parent = document.querySelector("section.intro");
    var task_text = text_parent.querySelectorAll("span");
    var len = tasks.length;
    for (var i = 0; i < len; i++) {
      (function(i) {
        tasks[i].onmouseover = function() {
          task_text[i].classList.add("display");
        };
        tasks[i].onmouseout = function() {
          task_text[i].classList.remove("display");
        };
      })(i);
    }
  })();
  //动画与音乐控制
  musicIcon.onclick = function() {
    var music = document.getElementById("audio");
    if (core.indexOf('mobile') == -1){
    if (this.style.animationPlayState != "paused") {
      music.pause();
      this.style.animationPlayState = "paused";
    } else {
      this.style.animationPlayState = "running";
      music.play();
    }
  }else{
     if (this.style.webkitAnimationPlayState != "paused") {
      music.pause();
      this.style.webkitAnimationPlayState = "paused";
    } else {
      this.style.webkitAnimationPlayState = "running";
      music.play();
  }
}
}
