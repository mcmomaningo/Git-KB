// On keypress append data and highlight match
$(this).on('keypress', function(e) {
	clearTimeout($.data(this, 'timer'));
	var code = (e.keyCode ? e.keyCode : e.which);
	
	if (code == 13) {
		e.preventDefault();
	}  else {
		
		var wait = setTimeout(function () {
			var input = $("#input");
			var searchVal = $("#input").val();

			input.selectRange(searchVal.length, decoded[i].length);
			input.setCursorPosition(searchVal.length);
			
		}, 1000);
		$(this).data('timer', wait);
	}
});

//set selection range
$.fn.selectRange = function(start, end) {
	return this.each(function() {
		if (this.setSelectionRange) {
			this.focus();
			this.setSelectionRange(start, end);
		} else if (this.createTextRange) {
			var range = this.createTextRange();
			range.collapse(true);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		}
	});
};

//set cursor position
$.fn.setCursorPosition = function(position){
	if(this.length == 0) return this;
	//return $(this).setSelection(position, position);
};