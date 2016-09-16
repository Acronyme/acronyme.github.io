//电视页
(function() {
  //个人资料 按钮
  var myInfo = document.getElementsByClassName('myInfo')[0];
  //资料页icon
  var iconBox = document.getElementsByClassName('icon')[0];
  //实习经历 按钮
  var internExp = document.getElementsByClassName('internExp')[0];
  //其他 按钮
  var other = document.getElementsByClassName('other')[0];
  //掌握技能 按钮
  var mySkill = document.getElementsByClassName('myskill')[0];
  //遥控器 关闭按钮
  var closeBtn = document.getElementsByClassName('btn')[1];
  //更多作品按钮
  var more = document.getElementsByClassName('more')[0];
  var myPhoto = document.getElementsByClassName('myPhoto')[0];
  var tvWrapper = document.getElementsByClassName('tv_wrapper')[0];
  var production = document.getElementsByClassName('production')[0];
  var btn = document.getElementsByClassName('btn');
  var tv = document.getElementsByClassName('tv')[0];
  var tips = document.getElementsByClassName('tips')[0];
  var skillBox = document.getElementsByClassName('skill')[0];
  var skills = document.querySelectorAll('.skill div');
  var otherInfo = document.getElementsByClassName('otherInfo')[0];
  var intern = document.getElementsByClassName('intern')[0];
  var confirm = document.getElementsByClassName('confirm')[0];
  var xOrder = [closeBtn, myInfo, mySkill, internExp, other, more];
  var leftYOrder = [closeBtn, myInfo, internExp, more];
  var rightYOrder = [closeBtn, mySkill, other, more];
  var up = document.getElementsByClassName('up')[0];
  var down = document.getElementsByClassName('down')[0];
  var right = document.getElementsByClassName('right')[0];
  var left = document.getElementsByClassName('left')[0];
  var shade=document.getElementsByClassName('shade')[0];

  var production = document.getElementsByClassName('production')[0];
  var backToTV = document.getElementsByClassName('back')[0];
  var finger = document.getElementsByClassName('finger')[0];
  var download=document.getElementsByClassName('download')[0];
  //设置电视位置
  (function setPos() {
      //获取当前窗口高度
       var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
       var totleHeight = tv.offsetHeight;
       //电视距离顶部1/3距离
       tvWrapper.style.paddingTop = ((h - totleHeight) / 3) + 'px';
  })();
  up.onclick = function() {
      var choosed = document.getElementsByClassName('choosed')[0];
      for (var i = 0; i < 4; i++) {
         if (choosed == leftYOrder[i] && i !== 0) {
              leftYOrder[i].classList.remove('choosed');
              leftYOrder[i - 1].classList.add('choosed');
         } else if (choosed == leftYOrder[0]) {
              leftYOrder[0].classList.remove('choosed');
              leftYOrder[3].classList.add('choosed');
        } else if (choosed == rightYOrder[i] && (i == 1 || i == 2)) {
              rightYOrder[i].classList.remove('choosed');
              rightYOrder[i - 1].classList.add('choosed');
      }
    }
  }
  down.onclick = function() {
    var choosed = document.getElementsByClassName('choosed')[0];
    for (var i = 0; i < 4; i++) {
      if (choosed == rightYOrder[i] && (i == 1 || i == 2)) {
        rightYOrder[i].classList.remove('choosed');
        rightYOrder[i + 1].classList.add('choosed');
      } else if (choosed == leftYOrder[i] && (i != 3)) {
        leftYOrder[i].classList.remove('choosed');
        leftYOrder[i + 1].classList.add('choosed');
      } else if (choosed == leftYOrder[3]) {
        leftYOrder[3].classList.remove('choosed');
        leftYOrder[0].classList.add('choosed');
      }
    }
  }
  left.onclick = function() {
    var choosed = document.getElementsByClassName('choosed')[0];
    for (var i = 0; i < xOrder.length; i++) {
      if (choosed === xOrder[i] && choosed !== closeBtn) {
           xOrder[i].classList.remove('choosed');
           xOrder[i - 1].classList.add('choosed');
      } else if (choosed === closeBtn) {
           closeBtn.classList.remove('choosed');
           xOrder[xOrder.length - 1].classList.add('choosed');
      }
    }
  }

  right.onclick = function() {
    var choosed = document.getElementsByClassName('choosed')[0];
    for (var i = 0; i < xOrder.length; i++) {
      if (choosed == xOrder[i] && i !== xOrder.length) {
        xOrder[i].classList.remove('choosed');
        xOrder[i + 1].classList.add('choosed');
      } else if (choosed === xOrder[xOrder.length - 1]) {
        xOrder[xOrder.length - 1].classList.remove('choosed');
        xOrder[0].classList.add('choosed');
      }
    }
  }

  //不在个人资料页时
  function leaveFirstPage() {
    myPhoto.classList.add('myPhoto_moved');
    iconBox.classList.add('icon_moved');
    shade.classList.add('shade_moved');
    var titles = document.querySelectorAll('[class^="icon_title"]');
    for (var i = 0; i < titles.length; i++) {
      var oriClass = titles[i].classList[0];
      titles[i].classList.add(oriClass + '_moved');
    }
  }
  //点击个人资料
  myInfo.onclick = function() {
           var intern = document.getElementsByClassName('intern')[0];
           var current = document.getElementsByClassName('current')[0];
           var skillBox = document.getElementsByClassName('skill')[0];
           if (tv.classList.contains('off')) {
             tips.style.opacity = 1;
             return;
           }
           myPhoto.classList.remove('myPhoto_moved');
           iconBox.classList.remove('icon_moved');  
           shade.classList.remove('shade_moved');   
           skillBox.style.opacity = 0;
           for (var i = 0; i < skills.length; i++) {
             skills[i].classList.remove('move');
           }
           otherInfo.style.display = 'none';
           intern.style.display = 'none';
           current.classList.remove('current');
           myInfo.classList.add('current');
           var titles = document.querySelectorAll('[class^="icon_title"]');
           for (var i = 0; i < titles.length; i++) {
                titles[i].classList.remove(titles[i].classList[1]);
           }
        }
          //遥控与电视开关
        for (var i = 0; i < btn.length; i++) {
          btn[i].onclick = function() {
            var tv = document.getElementsByClassName('tv')[0];
            if (!tv.classList.contains('off')) {
              myInfo.click();
              tv.classList.add('off');
            } else {
              tips.style.opacity = 0;
              tv.classList.remove('off');
            }
          }
        }
        //点击实习经历
        internExp.onclick = function() {
          if (tv.classList.contains('off')) {
            tips.style.opacity = 1;
            return;
          }
          var intern = document.getElementsByClassName('intern')[0];
          var current = document.getElementsByClassName('current')[0];
          skillBox.style.opacity = 0;
          for (var i = 0; i < skills.length; i++) {
            skills[i].classList.remove('move');
          }
          otherInfo.style.display = 'none';
          current.classList.remove('current');
          internExp.classList.add('current');
          leaveFirstPage();
          intern.style.display = 'block';
        }

        //点击掌握技能
        mySkill.onclick = function() {
          var current = document.getElementsByClassName('current')[0];
          if (tv.classList.contains('off')) {
               tips.style.opacity = 1;
               return;
          }
              current.classList.remove('current');
              mySkill.classList.add('current');
              otherInfo.style.display = 'none';
              intern.style.display = 'none';
              leaveFirstPage();
              skillBox.style.opacity = 1;
          for (var i = 0; i < skills.length; i++) {
              skills[i].classList.add('move');
          }
        }
      
        //点击other
        other.onclick = function() {
            if (tv.classList.contains('off')) {
              tips.style.opacity = 1;
              return;
            }
              var current = document.getElementsByClassName('current')[0];
              current.classList.remove('current');
              other.classList.add('current');
              intern.style.display = 'none';
              leaveFirstPage();
              skillBox.style.opacity = 0;
              otherInfo.style.display = 'block';
          }
          //其他作品
        more.onclick = function() {
             var finger = document.getElementsByClassName('finger')[0];
             var wrapper = document.getElementsByClassName('wrapper')[0];
             download.style.opacity='0';
             function exc() {
               tvWrapper.style.display = 'none';
               production.style.display = 'block';
               finger.classList.remove('finger_press');
             }
      
             function close() {
               btn[0].click();
               setTimeout(exc, 1100);
             }
             if (!tv.classList.contains('off')) {
               finger.classList.add('finger_press');
               setTimeout(close, 1300);
             } else {
               exc();
             }
      
           };
      
        confirm.onclick = function() {
            var choosed = document.getElementsByClassName('choosed')[0];
            choosed.click();
          }
            //作品页
            
            
            backToTV.onclick = function() {
            download.style.opacity='1';
            production.style.display = 'none';
            tvWrapper.style.display = 'block';
      
            function open() {
              btn[0].click();
              finger.classList.remove('finger_press');
            }
            if (tv.classList.contains('off')) {
              finger.classList.add('finger_press');
              setTimeout(open, 1500);
            }
        }  
})();

