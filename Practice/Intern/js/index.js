	(function() {
		//市区范围展开折叠
		var unfoldBtn = document.getElementById("unfold");
		var rangeArea = document.getElementsByClassName('range')[0];
		var foldBtn = document.getElementById("fold");
		var submitBtn = document.getElementById("submit");
		var items = document.getElementsByClassName('item');
		var itemsArr = [].slice.call(items);
		
		unfoldBtn.onclick = function() {
			this.classList.add('hide');
			rangeArea.classList.add('unfold');
			foldBtn.classList.remove('hide');
		}
		
		foldBtn.onclick = function() {
				this.classList.add('hide');
				unfoldBtn.classList.remove('hide');
				rangeArea.classList.remove('unfold');
			}
			//选中

		itemsArr.forEach(function(item) {
				item.onclick = function() {
					var checkedItem = document.getElementsByClassName('checked')[0];
					if (checkedItem && checkedItem !== this) {
						checkedItem.classList.remove('checked');
					}
					this.classList.toggle('checked');
				}
			})
		
			//办理
		submitBtn.onclick = function() {
			var checkedItem = document.getElementsByClassName('checked')[0];
			if (checkedItem) {
				alert('办理中...');
			} else {
				alert('请选择需要的套餐');
			}
		}
	})();
