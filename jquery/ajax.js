

// JQUERY AJAX
$.ajax({
	url: "",
	beforeSend: function(){
		
	},
	data: { stock_code: $(this).val() },
	type: 'post',
	success: function(obj){
		
	},
	error: function(){
		alert("An error has occured");
	}
});