 $(document).ready(function(){
	 
	 $("#myNavbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		}  // End if
	});
	$('#wineAwakeningsRow').hide();
	$('#ptLevelsRow').hide();
	
	$("#wineAwakenings").click(function(e){
		$('#wineAwakeningsRow').toggle();
		e.preventDefault();
		var pos =$("#wineAwakeningsRow").offset().top;
		console.info(pos);
		if(pos>0)
		{
			pos-=110;
			$('body, html').animate({scrollTop: pos});
		}
		
	});
	$("#ptLevels").click(function(e){
		$('#ptLevelsRow').toggle();
		e.preventDefault();
		var pos =$("#ptLevelsRow").offset().top;
		console.info(pos);
		if(pos>0)
		{
			pos-=110;
			$('body, html').animate({scrollTop: pos});
		}
	});
	
  });