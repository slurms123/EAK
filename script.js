$(document).ready(function() {
	var $grid = $('#container');

	
	for (j = 0; j < 16; j++) {
		for (i = 0; i < 16; i++) {    
    		$grid.append('<div class="square"></div>');
		};
		$grid.append('<div>');
	};

	$("#singleColor").click(function() {
		$(".square").hover(function() {
			$(this).css("background-color", "#850b18");
		});
	});
		function multiColor() {
			return Math.floor(Math.random()*16777215).toString(16);
		};


	$("#multiColor").click(function() {
		$(".square").hover(function() {
			$(this).css("background-color", "#" + multiColor());
		});
	});


	$("#clearStyles").click(function() {
		$(".square").hover(function() {
			$(this).css("background-color", "white");
		});
	});






});



$('#gridAndStyle').click(function() {
	$('input[type="radio"]')
			.not(':checked')
			.prop("checked", true);
});

function clearGrid () {
	var clearGrid = document.getElementById('container');
	// Now remove them
		$('.square').remove();

		var $grid = $('#container');

	var newSize = prompt("What is the new grid size?")	

		for (j = 0; j < newSize; j++) {
			for (i = 0; i < newSize; i++) {    
    			$grid.append('<div class="square"></div>');
				};
		$grid.append('<div>')
		};
};





