$( document ).ready(function() {

	// highlight items on page
	$( 'body' ).on( 'click', function( evt ) {
	  console.log( evt.target );
	  $(evt.target).css('background', '#fffbcc'); 

	});
});
