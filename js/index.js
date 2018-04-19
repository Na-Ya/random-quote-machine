$(document).ready(function() {
	var quote;
	var author;

	function getNewQuote() {
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				format: 'jsonp',
				lang: 'en'
			},

			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text(quote);
				if (author) {
					$('#author').text('~ ' + author);
				} else {
					$('#author').text('~ Unknown');
				}
			}
		}); //closes out ajax request
	} //closes out function getNewQuote
	getNewQuote();

	$('#newquote').on('click', function(event) {
		event.preventDefault();
		getNewQuote();
	});

	$('#twitter').on('click', function(event) {
		event.preventDefault();
		window.open(
			'https://twitter.com/intent/tweet?text=' +
				encodeURIComponent(quote + '~' + author)
		);
	});
});
