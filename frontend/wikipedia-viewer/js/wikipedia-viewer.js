function searchWiki()
{
	var query = document.getElementById("userQuery").value;
	var searchQuery = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&callback=parseWiki&search=" + query;
	$.getScript(searchQuery);
}


function randomWiki()
{
	window.open("https://en.wikipedia.org/wiki/Special:Random");
}


function parseWiki(response)
{
	var searchResults = "";
	for (i = 0; i < response[1].length; i++)
	{
		var link = response[3][i];
		searchResults += "<div>" + "<h3>" + "<a href='" + link + "'>" + response[1][i] + "</a>" + "</h3>" + "<p>" + response[2][i] + "</p>" + "<a href='" + link + "'>Read more</a>" + "<br><br>" + "</div>";
	}
	
	$(".results").html(searchResults);

}
