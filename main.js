// $(document).click('ready', function() {

// });

console.log($("h1").length);
$(document).on("ready", function(){
	$("a[href*='refactoru']").on("click", function(e){
		alert("Say \"hi\" to Raine for me!")
		e.preventDefault();
	});

	$("a[href*='gschool']").on("click", function(e){
		alert("Don't go do it! JavaScript FTW!!")
		e.preventDefault();
	});

	$("h1").on("mouseover", function(e){
		$(e.target).css("color", "green");
	// polymorphic use of the $-symbol
	// passing a native DOM-object in order to select the target element
});
	$("h1").on("mouseout", function(e) {
		$(e.target).css("color", "black");
	});

});
// defining an event handler

// this works, but it still goes to the site! We want to cancel the behavior
// $("a").on("click", function(){
//	console.log("you clicked refactoru!").
// });

// var turnGreen = function() {
// 	$("h1").css("color", "green");
// };

// $("h1").on("click", turnGreen);

// attaching an evening handler
// $("h1").on("mouseover", function(){
// 	$("h1").css("color", "peachpuff")
// });

// $("h1").on("mouseout", function() {
// 	$("h1").css("color", "salmon");
// });
// $("h1").click(function(turnGreen));

// add a click handler to RU link
// when link is clicked, console.log("you clicked refactoru!")

// change click event to mouseover
// then add a mouseout event that changes the color to black


// .on takes two arguments (polymorphic), 1) type, 2) function

// Typed into the console on devtools 
// turnGreen
// function (){
//		$("h1").css("color", "green");
// } main.js:5
// turnGreen();
// undefined

// because we didn't specify a return statement, it will return undefined 