  var wrapper=document.getElementsByClassName("page-header")[0];
  var content=document.getElementsByClassName("main-content")[0];
 
   (function changeColor(){
         var degs=360*Math.random();
         var core=navigator.userAgent.toLowerCase();
         var isChrome = Boolean(window.navigator.userAgent.indexOf("Chrome")!=-1);
          //为content和页面分别设置不同的随机背景色
          //判断手机端
          if(core.indexOf('mobile')!=-1){
         content.style.background="-webkit-gradient(linear, left top, left bottom, from(#00abeb), to(#fff))";
         wrapper.style.background="-webkit-gradient(linear, left top,left bottom,from(#"+Math.floor(Math.random()*0xFFFFFF).toString(16)+"),to(#"+Math.floor(Math.random()*0xFFFFFF).toString(16)+"))";
          }
          //判断电脑端
          else if(isChrome){
         content.style.background="-webkit-linear-gradient("+degs+"deg,#"+Math.floor(Math.random()*0xFFFFFF).toString(16)+",#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
         wrapper.style.background="-webkit-linear-gradient("+degs+"deg,#"+Math.floor(Math.random()*0xFFFFFF).toString(16)+",#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
        
          }
           var bgColor1=wrapper.style.background;
           var bgColor2=content.style.background;
           content.style.opacity=0.4;
         if(!bgColor1||bgColor1=="#fff"||!bgColor2||bgColor2=="#fff"||bgColor1==bgColor2){
          changeColor();
         }
    })();

  (function display(){
  var tasks=document.getElementsByClassName("items");
  var text_parent=document.querySelector("section.intro");
  var task_text=text_parent.querySelectorAll("span");
  var len=tasks.length;
        for(var i=0;i<len;i++){
          (function(i){
            tasks[i].onmouseover=function(){
            task_text[i].classList.add("display");
          };
            tasks[i].onmouseout=function(){
            task_text[i].classList.remove("display");
          };
        })(i);
      }
})();
