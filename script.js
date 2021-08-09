var left1=false,right1=false,left2=false,right2=false;
var x1=window.innerWidth/2-204/2;
var x2=window.innerWidth/2-204/2;

document.addEventListener('keydown',press);
function press(event){
	if(event.keyCode == 97 || event.keyCode == 65){
		left1=true;
	}
	if(event.keyCode == 100 || event.keyCode == 68){
		right1=true;
	}
	if(event.keyCode==37){
		left2=true;
	}
	if(event.keyCode==39){
		right2=true;
	}
}
document.addEventListener('keyup',release);
function release(event){
	if(event.keyCode == 97 || event.keyCode == 65){
		left1=false;
	}
	if(event.keyCode == 100 || event.keyCode == 68){
		right1=false;
	}
	if(event.keyCode==37){
		left2=false;
	}
	if(event.keyCode==39){
		right2=false;
	}
}

function controlrods(){
	var player1=document.querySelector('#player1');
	var player2=document.querySelector('#player2');
	if(left1){
		x1=x1-8;
	}
	if(right1){
		x1=x1+8;
	}
	if(left2){
		x2=x2-8;
	}
	if(right2){
		x2=x2+8;
	}
	if(x1<-10){
		x1=-10;
	}
	if(x2<-10){
		x2=-10;
	}
	if(x1>(window.innerWidth-220)){
		x1=window.innerWidth-220;
	}
	if(x2>(window.innerWidth-220)){
		x2=window.innerWidth-220;
	}
	player1.style.marginLeft=x1+'px';
	player2.style.marginLeft=x2+'px';
	window.requestAnimationFrame(controlrods);
}
window.requestAnimationFrame(controlrods);


var speedx=4;
var speedy=2;
var ballx=760;
var bally=350;
var ball=document.querySelector('#ball');

function movingball(){
	ballx=ballx+speedx;
	bally=bally+speedy;
	let rode1=document.querySelector('#player1').getBoundingClientRect();
	let rode2=document.querySelector('#player2').getBoundingClientRect();
	
	if(ballx<0){
		ballx=0;
		speedx=-1*speedx;
	}
	if(ballx>window.innerWidth-30){
		ballx=window.innerWidth-30;
		speedx=-1*speedx;
	}
	if(bally<rode1.bottom){
		if(ballx>=rode1.left && ballx<=rode1.right){
			speedy= -1* speedy;
		}
		else if(bally<rode1.top){
			console.log(ballx,rode1.left,rode1.right);
			window.alert('Player2 is winner');

			return;
		}
	}
	else if(bally>(rode2.top-30)){
		console.log(rode1.top,rode2.top,ballx,bally);
		if(ballx>=rode2.left && ballx<=rode2.right){
			speedy= -1* speedy;
		}
		else if(bally>(rode2.bottom)){
			console.log(ballx,rode2.left,rode2.right);
			window.alert('Player1 is winner');

			return;
		}
	}
	ball.style.marginLeft=ballx+'px';
	ball.style.marginTop=bally+'px';
	window.requestAnimationFrame(movingball);
}
window.requestAnimationFrame(movingball);