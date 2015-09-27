$(document).ready(function(){
	var row1 = $('#row1-wrap').attr("id");
	var row2 = $('#row2-wrap').attr("id");

	$('div.content').mouseenter(function(){
		var content = $(this).clone().addClass("clone"); 	
		var id = $(this).parent().attr("id"); 	  
		$(this).parent().append(content); 
		if( row1 == id ) {
			content.css({
				position: 'absolute', 
				top: '0', 
				left: '50%', 
				background: '#98a1a8', 
				display: 'none'		
			}).fadeIn(); 
		} 
		else if ( row2 == id ){
			content.css({
				position: 'absolute', 
				top: '0', 
				left: '0', 
				background: 'white', 
				display: 'none'		
			}).fadeIn(); 
		}
	}); 

	$('#row1-wrap').mouseleave(function(){
		$('div.clone').fadeOut(500, function(){
			$(this).remove(); 
		})
	}); 

	$('#row2-wrap').mouseleave(function(){
		$('div.clone').fadeOut(500, function(){
			$(this).remove(); 
		})
	}); 


}); 