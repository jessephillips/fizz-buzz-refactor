$(document).ready(function(){
	
	$('form').on('click', 'button', function () {
		fizzBuzz();
	});
});

function fizzBuzz(){
		// fizz buzz loop thru 100 and do fizz buzz.
	var nuNode;

	for (var i = 1; i <= 100; i++) {
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
}