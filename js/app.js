$(document).ready(function(){
	
	$('form').on('click', 'button', function ( e ) {
		e.preventDefault();
		var inputBox = $('form').find('input').val();
		validateInput(inputBox);
		inputBox.val("");
	});
});

var fizzBuzz = function (num){
		// fizz buzz loop thru 100 and do fizz buzz.
	$('#the-list').children().remove();

	var nuNode;

	for (var i = 1; i <= num; i++) {
		if ( (i % 5) == 0 && (i % 3) == 0) {
			//fizz buzz
			nuNode = $('<li class="fizzbuzz">fizzbuzz</li>');
		} else if ( (i % 3) == 0 ) {
			//fizz
			nuNode = $('<li class="special">fizz</li>');
		} else if ( (i % 5) == 0 ) {
			//buzz
			nuNode = $('<li class="special">buzz</li>');
		} else {
			nuNode = $('<li>'+i+'</li>');
		}

		$('#the-list').append(nuNode);
	}
};

var validateInput = function ( inputString ) {
	var stringToNum = +inputString;

	if ( isNaN(stringToNum) ) {
		alert("you must enter a number. you entered: " + inputString + ". Please try again." );
	} else if ( stringToNum % 1 != 0 ) {
		alert("You must enter an integer (non-decimal). You entered: " + stringToNum + ". Please try again.");
	} else {
		fizzBuzz(stringToNum);
	}
};