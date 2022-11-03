//* Stores functions used often / used for buttons

function SlogoFull(){
	document.querySelectorAll('.SbuttonCont').forEach(function(el){
		el.style.opacity = '0';
	});
	document.querySelector('.SflexCont').style.background = 'none'
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

function CssVar(name, val, obj){
	if(val || val == null){
		document.querySelector((obj ? obj : ':root')).style.setProperty(name, val);
	}
	return getComputedStyle((obj ? obj : ':root')).getPropertyValue(name);
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
