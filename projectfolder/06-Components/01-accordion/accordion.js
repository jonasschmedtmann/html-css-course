var item = document.getElementsByClassName('item')
var i

// So yea, classlist.toggle("open") will add or remove "open" from the class name

for (i = 0; i < item.length; i++) {
	item[i].addEventListener('click', function () {
		this.classList.toggle('open')
	})
}
