var clockTimer = parseInt(document.getElementById("time").innerHTML, 10);
var breakTimer = parseInt(document.getElementById("break").innerHTML, 10);
document.getElementById("clock").innerHTML = clockTimer;


function increaseBreak(){
    breakTimer++;
    document.getElementById("break").innerHTML = breakTimer + " minutes";
}

function decreaseBreak(){
    breakTimer--;
    document.getElementById("break").innerHTML = breakTimer + " minutes";
}

function loadBreak(){
    if(breakTimer > 0){
        var breakDuration = breakTimer * 60;
       // breakTimer = 0;
        var breakDisplay = document.getElementById("clock"); 
        startBreak(breakDuration, breakDisplay);
    }
}

function increaseTimer(){
	clockTimer++;
	document.getElementById("time").innerHTML = clockTimer + " minutes";
    document.getElementById("clock").innerHTML = clockTimer;
}

function decreaseTimer(){
    clockTimer--;
	document.getElementById("time").innerHTML = clockTimer + " minutes";
    document.getElementById("clock").innerHTML = clockTimer;
}

function loadTimer(){
	if (clockTimer > 0){
		var timerDuration = clockTimer * 60;
    	var timerDisplay = document.querySelector('#clock');
        var displaySession = document.getElementById("clockTitle");
    	startTimer(timerDuration, timerDisplay, displaySession);
	}else{
		alert("Error, Set timer greater than 0 minutes");
	}
	
}

function startBreak(duration1, display1){
    var timer1, minutes1, seconds1;
    timer1 = duration1;
    timeOut1 = setInterval(function(){
        minutes1 = parseInt(timer1 / 60, 10);
        seconds1 = parseInt(timer1 % 60, 10);

        seconds1 = seconds1 < 10 ? "0" + seconds1 : seconds1;

        display1.textContent = "Break " + minutes1 + ":" + seconds1;
        timer1--;

        if (timer1 < 0){
            soundBreak();
            window.clearInterval(timeOut1);
            loadTimer();
        }

    }, 1000);
}


function startTimer(duration, display, displaySession){
    var timer, minutes, seconds;
    timer = duration;
    timeOut = setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = "Session " + minutes + ":" + seconds;
        
        timer--;
        if (timer < 0){
            soundTimer();
            window.clearInterval(timeOut);
            loadBreak();
        }
    }, 1000); 
}

function resetSession(){
    document.getElementById("time").innerHTML = "25 minutes";
    document.getElementById("clock").innerHTML = 25;
    clockTimer = 25;
    document.getElementById("break").innerHTML = "5 minutes";
    breakTimer = 5;
    window.clearInterval(timeOut);
    window.clearInterval(timeOut1);
}


function soundTimer(){
    var audio = new Audio('http://onlineclock.net/audio/options/default.mp3');
    audio.play();
}

function soundBreak(){
    var audio1 = new Audio('https://www.freespecialeffects.co.uk/soundfx/sirens/alarm_01.wav');
    audio1.play();
}
