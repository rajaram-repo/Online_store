$(document).ready(function() {
	// alert($("prod_field_id").val());
	$('#go_back').on('click', function() {
		window.location.href = "http://jadran.sdsu.edu/jadrn047/weB.html";
		console.log($('form').serialize());
	});
});