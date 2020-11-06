function togglePage(page) {
	var e = document.getElementById('page_1');
	e.style.display = 'none';
	e = document.getElementById('page_2');
	e.style.display = 'none';
	e = document.getElementById('page_3');
	e.style.display = 'none';
	e = document.getElementById('page_4');
	e.style.display = 'none';
	e = document.getElementById(page);
	e.style.display = 'block';
}

function openPhoto(img) {
    photo = window.open(img, 'photo', 'width=1050,height=700'); 
	photo.onclick = window.close;
}