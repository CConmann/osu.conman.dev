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
function openHeader(){

}
function closeHeader(){
	
}
function updateMenu(name){
	if(name){
		scene = name;
	}
}

function updateFavicon(color){
	var canvas = document.createElement('canvas');
		canvas.width = 64;canvas.height = 64;
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.fillStyle = color;
	ctx.arc(32, 32, 30, 0, 2 * Math.PI);
	ctx.fill();
	ctx.strokeStyle = '#ffffff';
	ctx.lineWidth = '2';
	ctx.stroke();
	var link = document.querySelectorAll('#favicon')[0];
        link.href = canvas.toDataURL("image/x-icon");
}

document.querySelectorAll('.S')[0].style.backgroundImage = ('url(assets/backgrounds/' + (Math.floor(Math.random() * 6) + 1) + '.jpg)');
// var i = 0,
// iaa = setInterval(function(){
// 	document.querySelector(':root').style.setProperty('--viewW', i + 'vw');
// 	document.querySelector(':root').style.setProperty('--viewH', 1.0471286**i + 'vh');
// 	i++
// 	if(i > 100){
// 		clearInterval(iaa);
// 	}
// }, 4)