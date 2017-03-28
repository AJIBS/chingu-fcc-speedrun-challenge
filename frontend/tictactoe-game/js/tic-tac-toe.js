// computer plays first
//current game strategy based on user's first move being R22
// default computer value = X, and user value = 0;

// and user's second move being on R31 or R13

// if user's second move is not on R12 or R32 or R21 or R23
// how should the computer respond?


var userValue = "X";
var compValue = "O";

function userX(){
	userValue = "X";
	compValue = "O";
}

function userO(){
	userValue = "O";
	compValue = "X";
}

function compPlay(){
	setTimeout(function(){
		// first move
		if (document.getElementById("R11").innerHTML === ""){
			document.getElementById("R11").innerHTML = compValue;
		}

		// second move
		else if (document.getElementById("R33").innerHTML === ""){
			document.getElementById("R33").innerHTML = compValue;
		}

		// if user's first move is on R33
		// second move is on R31
		else if (document.getElementById("R33").innerHTML === userValue && document.getElementById("R31").innerHTML === ""){
			document.getElementById("R31").innerHTML = compValue;
		}

		// third move: if user plays on R31, computer plays on R13
		else if (document.getElementById("R31").innerHTML === userValue && document.getElementById("R13").innerHTML === ""){
			document.getElementById("R13").innerHTML = compValue;
		}
		
		// third move: if user plays on R13, computer plays on R31 
		else if (document.getElementById("R13").innerHTML === userValue && document.getElementById("R31").innerHTML === ""){
			document.getElementById("R31").innerHTML = compValue;
		}


		// third move: if user plays on R12, computer plays on R32
		else if (document.getElementById("R12").innerHTML === userValue && document.getElementById("R32").innerHTML === ""){
			document.getElementById("R32").innerHTML = compValue;
		}


		// third move: if user plays on R32, computer plays on R12
		else if (document.getElementById("R32").innerHTML === userValue && document.getElementById("R12").innerHTML === ""){
			document.getElementById("R12").innerHTML = compValue;
		}

		// third move: if user plays on R21, computer plays on R23
		else if (document.getElementById("R21").innerHTML === userValue && document.getElementById("R23").innerHTML === ""){
			document.getElementById("R23").innerHTML = compValue;
		}

		// third move: if user plays on R23, computer plays on R21
		//else if (document.getElementById("R23").innerHTML === "O" && document.getElementById("R21").innerHTML === ""){
		//	document.getElementById("R21").innerHTML = compValue;
		//}


		// winning moves
		else if (document.getElementById("R33").innerHTML === compValue && document.getElementById("R22").innerHTML === ""){
			document.getElementById("R22").innerHTML = compValue;
			declareResult("cwins");
		}
		else if (document.getElementById("R13").innerHTML === compValue && document.getElementById("R12").innerHTML === ""){
			document.getElementById("R12").innerHTML = compValue;
			declareResult("cwins");
		}
		else if (document.getElementById("R31").innerHTML === compValue && document.getElementById("R21").innerHTML === ""){
			document.getElementById("R21").innerHTML = compValue;
			declareResult("cwins");
		}
		

		else if (document.getElementById("R13").innerHTML === compValue && document.getElementById("R33").innerHTML === compValue && document.getElementById("R23").innerHTML === ""){
			document.getElementById("R23").innerHTML = compValue;
			declareResult("cwins");
		}
		else if (document.getElementById("R33").innerHTML === compValue && document.getElementById("R31").innerHTML === compValue && document.getElementById("R32").innerHTML === ""){
			document.getElementById("R32").innerHTML = compValue;
			declareResult("cwins");
		}
		else {
			alert("You defeated my strategy");
		}
	}, 1000);
}


function userPlay(id){
	var spot = document.getElementById(id);
	if(spot.innerHTML === ""){
		spot.innerHTML = userValue;
		compPlay();
	}
}

function declareResult(value){
	if (value === "cwins"){
		document.getElementById("result").innerHTML = "YOU LOSE";
	}
}



