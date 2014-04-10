// create html page
// on page load, dynamically add a ul
// create a JS array that creates a list of strings
// that include favorite movies
// Using dom creation, append an li for each title in the array
// to the dynamically created ul

var myFavoriteMovies = ["waterworld", "ted", "2001", "inglorious bastards"];

$(document).on('ready', function() {
	$("body").append("<ul id='test-id'>My Favorite Movies: </ul>");
	for(var i=0; i < myFavoriteMovies.length; i++) {
		$("#test-id").append("<li>" + myFavoriteMovies[i] + "</li>");
	}

// using clone
var newMovieUL = $('#test-id').clone();
// store a jQuery object into a variable
newMovieUL.append('<li>This is a clone</li>');
newMovieUL.css("backgroundColor", "grey");

$('body').append(newMovieUL);

});
