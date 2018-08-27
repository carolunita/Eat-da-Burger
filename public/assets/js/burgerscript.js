$(function() {
	// Upon clicking the submit button...
	$("#submit").on("click", function() {
		// Prevents default event upon submission
		event.preventDefault();

		// Grabs user input
		var burgerName = $("#name").val().trim();
		console.log(burgerName);

		if (burgerName == "") {
			// If the user does not enter a name, display error message
			alert("You need to tell us what you'd like to order!");
		} else {
			$.ajax("/api/burgers", {
	      		type: "POST",
	      		data: {
	      			burgerName: burgerName
	      		}
	    	}).then(function(response) {
	        	// Reload the page to display new burger
	        	location.reload();
	      	});
		}
	});

	// eating a burger
	$(".eaticon").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: true
      		}
    	}).then(function() {
       		// reload the page to display changes
	        location.reload();
      	});
	});

	// ordering another burger
	$(".waitressicon").on("click", function() {
		var id = $(this).data("id");

		$.ajax("/api/burgers/" + id, {
      		type: "PUT",
      		data: {
      			devoured: false
      		}
    	}).then(function() {
       		// reload the page to display changes
	        location.reload();
      	});
	});
});