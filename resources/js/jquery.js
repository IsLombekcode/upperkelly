$(document).ready(function() {

	var waypoint = new Waypoint(
	{
		element: document.getElementById('home-box'),
		handler: function(direction) 
		{
			if (direction == "down") 
			{
				$("nav").attr("id","sticky-nav");
				$("nav a img").removeAttr("src");
				$("nav a img").attr("src","resources/img/logo-white.png");	
				$("header nav div").addClass("color-white");				
							
			}
			else
			{
				$("header nav div").removeClass("color-white");
				$("header nav div").attr("id","main-nav-button");
				$("nav").removeAttr("id");	
				$("nav a img").removeAttr("src");
				
				$("nav a img").attr("src","resources/img/logo-color.png");	
			}
		},
		offset: 110
	});

	$("header nav div").click(function(){
		var icon = $("header nav div");
		if (icon.hasClass("ion-md-menu"))
		{
			$("header nav div").addClass("ion-md-close");
			$("header nav div").removeClass("ion-md-menu");
			
		    $("#main-nav").slideToggle(200);
		}
		else
		{
			$("header nav ul").removeAttr("style");
			$("header nav div").addClass("ion-md-menu");
			$("header nav div").removeClass("ion-md-close");
		
			$("#main-nav").slideToggle(200);
			$("header nav ul").removeAttr("style");
		}
	});

	$(".button").click(function(){
		var BodyClass = $("body");
		if (BodyClass.hasClass("line-a-drop")) 
		{}
		else
		{
			BodyClass.addClass("line-a-drop");
			BodyClass.attr("style","margin-right: 17px");
			$("body header nav ul").attr("style","margin-right: 37px");		
			setTimeout(function(){	
			$("body header LineDrop").attr("style","opacity : 1"); 
			},50);
		}
	});

	$(".Close-Button").click(function(){
		var BodyClass = $("body");
		if (BodyClass.hasClass("line-a-drop")) 
		{			
			setTimeout(function(){
				BodyClass.removeClass("line-a-drop");
				BodyClass.removeAttr("style");
				$("body header nav ul").removeAttr("style");		
			},500);
			$("body header LineDrop").removeAttr("style");
		}
	});

});

