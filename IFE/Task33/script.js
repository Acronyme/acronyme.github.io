//上→ 上一tr的同一个index
//下→ 下一tr的同一个index
//左→ 同一tr的上一个index
//右→ 同一tr的下一个index

window.onload = function() {
	var command = document.getElementById('cmd');
	var execution = document.getElementById("exe");
	//指令GO
	function go() {
		var direction = document.getElementsByTagName("div")[0].classList[0];
		var target;

		function goTop() {
			var current = document.getElementsByClassName("current")[0];
			target = current.parentNode.previousElementSibling.childNodes;
			for (var i = 0, nodes = current.parentNode.childNodes; i < nodes.length; i++) {
				//改变current节点后重新获取 
				current = document.getElementsByClassName("current")[0];
				//目标行中与当前节点位置相同的节点
				if (nodes[i] === current) {
					if (target[i].parentNode.classList.contains("outside") || target[i].parentNode.firstElementChild === target[i]) {
						alert("上边没路啦");
						return;
					}
					current.innerHTML = "";
					current.classList.remove("current");
					target[i].classList.add("current");
					target[i].innerHTML += "<div class='top'></div>"
				}
			}
		}

		function goBack() {
			var current = document.getElementsByClassName("current")[0];
			var nextTr = current.parentNode.nextElementSibling;
			if (nextTr === null) {
				alert("下边没路啦");
				return
			}
			target = nextTr.childNodes;
			for (var i = 0, nodes = current.parentNode.childNodes; i < nodes.length; i++) {
				//改变current节点后重新获取 
				current = document.getElementsByClassName("current")[0];
				if (nodes[i] === current) {
					current.innerHTML = "";
					current.classList.remove("current");
					target[i].classList.add("current");
					target[i].innerHTML += "<div class='bottom'></div>"
				}
			}
		}

		function goRight() {
			var current = document.getElementsByClassName("current")[0];
			target = current.nextElementSibling;
			if (target === null) {
				alert("右边没路啦");
				return
			}
			current.innerHTML = "";
			current.classList.remove("current");
			target.classList.add("current");
			target.innerHTML += "<div class='right'></div>"
		}

		function goLeft() {
			var current = document.getElementsByClassName("current")[0];
			target = current.previousElementSibling;
			if (target.parentNode.firstElementChild === target) {
				alert("左边没路啦");
				return;
			}
			current.innerHTML = "";
			current.classList.remove("current");
			target.classList.add("current");
			target.innerHTML += "<div class='left'></div>"
		}
		switch (direction) {
			case "top":
				goTop();
				break;
			case "bottom":
				goBack();
				break;
			case "right":
				goRight();
				break;
			case "left":
				goLeft();
				break;
		}
	}

	//左转
	function turnLeft() {
		var current = document.getElementsByClassName("current")[0];
		var headstock = document.getElementsByTagName("div")[0];
		var direction = headstock.classList[0];
		switch (direction) {
			case "top":
				headstock.classList.remove(direction);
				headstock.classList.add("left");
				break;
			case "bottom":
				headstock.classList.remove(direction);
				headstock.classList.add("right");
				break;
			case "left":
				headstock.classList.remove(direction);
				headstock.classList.add("bottom");
				break;
			case "right":
				headstock.classList.remove(direction);
				headstock.classList.add("top");
				break;

		}
	}
	//右转
	function turnRight() {
		var current = document.getElementsByClassName("current")[0];
		var headstock = document.getElementsByTagName("div")[0];
		var direction = headstock.classList[0];
		switch (direction) {
			case "top":
				headstock.classList.remove(direction);
				headstock.classList.add("right");
				break;
			case "bottom":
				headstock.classList.remove(direction);
				headstock.classList.add("left");
				break;
			case "left":
				headstock.classList.remove(direction);
				headstock.classList.add("top");
				break;
			case "right":
				headstock.classList.remove(direction);
				headstock.classList.add("bottom");
				break;

		}
	}
	//后转
	function turnBack() {
		var headstock = document.getElementsByTagName("div")[0];
		var direction = headstock.classList[0];
		switch (direction) {
			case "top":
				headstock.classList.remove(direction);
				headstock.classList.add("bottom");
				break;
			case "bottom":
				headstock.classList.remove(direction);
				headstock.classList.add("top");
				break;
			case "left":
				headstock.classList.remove(direction);
				headstock.classList.add("right");
				break;
			case "right":
				headstock.classList.remove(direction);
				headstock.classList.add("left");
				break;

		}
	}
	execution.onclick = function() {
		var commandValue = command.value.trim().toUpperCase();
		switch (commandValue) {
			case "GO":
				go();
				break;
			case "TUN LEF":
				turnLeft();
				break;
			case "TUN RIG":
				turnRight();
				break;
			case "TUN BAC":
				turnBack();
				break;
			default:
				alert("您输入的指令无效！请参阅右方说明输入")
		}
	}
}
