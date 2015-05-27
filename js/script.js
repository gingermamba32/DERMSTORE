		
			$( "#tool-one" ).hover(
			  function() {
			    $( this ).append( $( "<span>******</span>" ) );
			  }, function() {
			    $( this ).find( "span:last" ).remove();
			  }
			);
 
			$( "#tool-one.fade" ).hover(function() {
			  $( this ).fadeOut( 100 );
			  $( this ).fadeIn( 500 );
			});

			$(function() {
			    $("h1").animate(
			        {bottom : "+=60"}, 1000, function() {}
			    );
			});
			$(function(){
				$(".row").animate(
				{opacity: 1}, 2000, function(){}
				);
			})

