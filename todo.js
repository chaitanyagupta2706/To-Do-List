// Check specific todos
$("ul").on("click", "li", function(){
	// Toggle to add gray color and line through effect
	$(this).toggleClass("completed");
});

// Delete a todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//Stops bubbling
	event.stopPropagation();
});

//Creating todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		//Grabbing a todo
		var newTodo = $(this).val();

		// Set input empty
		$(this).val("");

		//Create a todo
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>");
	}
});

// Toggling plus sign
$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle(300);
});