var users = ["freecodecamp", "thorlar", "voyboy"];
var usersStatus = ["fccStatus", "thorStatus", "voyStatus"];
var usersPreview = ["fccPreview", "thorPreview", "voyPreview"];
var usersMessage = ["fccMessage", "thorMessage", "voyMessage"];
var usersGame = ["fccGame", "thorGame", "voyGame"];
var usersViews = ["fccViews", "thorViews", "voyViews"];
var usersFollowers = ["fccFollowers", "thorFollowers", "voyFollowers"];

function twitchData(index)
{
	$.getJSON(request, function(response)
	{	
		if (response.stream === null){
	    	document.getElementById(usersStatus[index]).innerHTML = "<p style='color: #e74c3c;'>OFFLINE</p>";

	    	offlineImage = "<img src='http://boluajibawo.xyz/wp-content/uploads/2017/02/offline_edit.jpg' class='img-responsive img-rounded'>";
	    	document.getElementById(usersPreview[index]).innerHTML = offlineImage;

	    	document.getElementById(usersMessage[index]).innerHTML = "Status: Not Available";
	    	document.getElementById(usersGame[index]).innerHTML = "Game: Not Available";
	    	document.getElementById(usersViews[index]).innerHTML = "Views: Not Available";
	    	document.getElementById(usersFollowers[index]).innerHTML = "Followers: Not Available";
		} else{
	    	(document.getElementById(usersStatus[index])).innerHTML = "<p style='color: #2ecc71;'>ONLINE</p>";

	    	onlineImage = "<img src='" + response.stream.preview.medium + "' class='img-responsive img-rounded'>";
	    	document.getElementById(usersPreview[index]).innerHTML = onlineImage;

	    	document.getElementById(usersMessage[index]).innerHTML = "Status: " + response.stream.channel.status;
	    	document.getElementById(usersGame[index]).innerHTML = "Game: " + response.stream.game;
	    	document.getElementById(usersViews[index]).innerHTML = "Views: " + response.stream.channel.views;
	    	document.getElementById(usersFollowers[index]).innerHTML = "Followers: " + response.stream.channel.followers;
		}
		//$("#results").html(response.stream);
	});
}


for (i = 0; i < users.length; i++ ){
	var request = "https://wind-bow.gomix.me/twitch-api/streams/" + users[i];
	twitchData(i);	
}

