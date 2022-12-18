window.addEventListener('keydown', function(e){
//* shortcuts
if(e.key == 't' && e.altKey == true){
	if(document.querySelector('.header').style.height == '5vh'){
		closeHeader();
	}else{
		openHeader();
	}
}

}, false);