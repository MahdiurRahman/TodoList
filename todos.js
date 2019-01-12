console.log("todos.js connected");

//1. Cross out todo on click
	$("ul").on("click", ".taskClass", function() {
		$(this).toggleClass("completed");
	})

//2. Delete todo on click
	$("body").on("click", ".delete", function() {
		$(this).parent().fadeOut(500, function() {
			$(this).remove();
		});
	});
	/*^NOTE: the two '$(this)' objects refer to 2 different objects
	the first one refers to whatever iteration of the 'delete' classing you are on
	the second on refers to the parent of that particular classing*/

//3. Add new todo
	//if there is userInput, then upon 'enter', will be added as new list item
		var userInput;
		$("input").keypress(function(event) {
			if (event.which === 13) {
				userInput = $("input").val();
				if (userInput != '') {
					$("ul").append("<li><span class=\"delete\"><i class=\"far fa-trash-alt delete\"></i></span> <span class=\"taskClass\">" + userInput + "</span></li>");
					$("input").val('');
				}
			}
		});

//4. Plus click: show/hide search bar
	$(".fas").on("click", function() {
		$("input").fadeToggle();
	});