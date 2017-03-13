var counter = false;

function display(digit)
{
	if (typeof digit === 'number' && counter === true){
		clearAll();
	} 
	var field = document.getElementById("calcDisplay");
	var formerStringInField = field.value;
	field.value = formerStringInField + digit;
	counter = false;
}

function calculate()
{
	var field = document.getElementById("calcDisplay");
	var answer = eval(field.value);
	field.value = answer;
	counter = true;
}

function clearAll()
{
	var field = document.getElementById("calcDisplay");
	field.value = "";
}

function delLastChar()
{
	var field = document.getElementById("calcDisplay");
	var presentStringInField = field.value;
	field.value = presentStringInField.slice(0, -1);
}