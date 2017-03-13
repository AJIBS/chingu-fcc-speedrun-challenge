function getWeather(request)
{
	// make weather api call
	$.getJSON(request, function(response)
	{				
		celsius = response.current.temp_c + "°C";
		fahrenheit = response.current.temp_f + "°F";
		document.getElementById("temperature").innerHTML = celsius;
		document.getElementById("city").innerHTML = response.location.name + ", " + response.location.country;
		document.getElementById("condition").innerHTML = response.current.condition.text;
		image = "<img src='http:" + response.current.condition.icon + "'>"
		$("#icon").html(image);
	});
}

if (navigator.geolocation)
	{
		// retrieve latitude
		navigator.geolocation.getCurrentPosition(function(position)
		{
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;

			var request = "https://api.apixu.com/v1/current.json?key=edf6ca3ee4fd47d08ae122311171901&q=" + latitude + "," + longitude;
			getWeather(request);
		});	
	};

function getCityWeather()
{
	var city = document.getElementById("userCity").value;
	var request = "https://api.apixu.com/v1/current.json?key=edf6ca3ee4fd47d08ae122311171901&q=" + city;
	getWeather(request);
}

// on clicking buttons, change temperature unit
$("#toFahrenheit").on("click", function()
	{
		$("#temperature").html(fahrenheit);
	});
$("#toCelsius").on("click", function()
	{
		$("#temperature").html(celsius);
	});