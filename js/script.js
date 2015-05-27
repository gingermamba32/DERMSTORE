			// tool-kit for product 1/4 **************
			$( ".tool-one" ).hover(
			  function() {
			    $( this ).append( $( "<span>Herbal Recovery Oil</span>" ) );
			  }, function() {
			    $( this ).find( "span:last" ).remove();
			  }
			);
			$( ".tool-one.fade" ).hover(function() {
			  $( this ).fadeOut( 100 );
			  $( this ).fadeIn( 500 );
			});
			// tool-kit for product 2/4 **************
			$( ".tool-two" ).hover(
			  function() {
			    $( this ).append( $( "<span>Facial Brush</span>" ) );
			  }, function() {
			    $( this ).find( "span:last" ).remove();
			  }
			);
			$( ".tool-one.two" ).hover(function() {
			  $( this ).fadeOut( 100 );
			  $( this ).fadeIn( 500 );
			});
			// tool-kit for product 3/4 *************
			$( ".tool-three" ).hover(
			  function() {
			    $( this ).append( $( "<span>Hand Moisturizer</span>" ) );
			  }, function() {
			    $( this ).find( "span:last" ).remove();
			  }
			);
			$( ".tool-three.fade" ).hover(function() {
			  $( this ).fadeOut( 100 );
			  $( this ).fadeIn( 500 );
			});
			// toolkit for product 4/4 ***************
			$( ".tool-four" ).hover(
			  function() {
			    $( this ).append( $( "<span>Beauty Ingenuity</span>" ) );
			  }, function() {
			    $( this ).find( "span:last" ).remove();
			  }
			);
			$( ".tool-four.fade" ).hover(function() {
			  $( this ).fadeOut( 100 );
			  $( this ).fadeIn( 500 );
			});


			// Slide-Up animation for the header ********
			$(function() {
			    $("h1").animate(
			        {bottom : "+=70"}, 1900, function() {}
			    );
			});

			// Fade-In for the Grid display 
			$(function(){
				$(".row").animate(
				{opacity: 1}, 2500, function(){}
				);
			})

			// Fade-In for the banner
			$(function(){
				$(".main-header").animate(
				{opacity: 1}, 2500, function(){}
				);
			})

