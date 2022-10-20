var customSettings = {},
	scene;
function SlogoFull(){
	document.querySelectorAll('.SbuttonCont').forEach(function(el){
		el.style.opacity = '0';
	});
	document.querySelector('.SflexCont').style.background = 'none'
}
function openSettings(){
	document.querySelector('#settingsCont').style.display = 'flex';
}
function closeSettings(){
	document.querySelector('#settingsCont').style.display = 'none';
}
function updateMenu(name){
	if(name){
		scene = name;
	}
}

// var i = 0,
// iaa = setInterval(function(){
// 	document.querySelector(':root').style.setProperty('--viewW', i + 'vw');
// 	document.querySelector(':root').style.setProperty('--viewH', 1.0471286**i + 'vh');
// 	i++
// 	if(i > 100){
// 		clearInterval(iaa);
// 	}
// }, 4)