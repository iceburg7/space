$(document).ready(function(){

	console.log("it works.");
	
	
	var hide = function(y){
		console.log("hiding "+y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	
	var show = function(y){
		console.log("showing "+y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	
	
	
	var open = function(y){
		console.log("opening " + y);
		$(y).removeClass("closed");
		$(y).addClass("open");
	}
	
	var close = function(y){
		console.log("closing " + y);
		$(y).removeClass("open");
		$(y).addClass("closed");
	}
	
	

	
	
	
	
	$(document).on("click",".hud",function(){
		console.log("clicked HUD");
		if ($(".hud").hasClass("closed")){
			open(".hud");
			show("._hud");
		}else {
			close(".hud");
			close("._hud");
			close(".__hud");
			hide("._hud");
			hide(".__hud");
		}
	});
	
	$(document).on("click",".self",function(){
		console.log("clicked SELF");
		if ($(".self").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".self");
			show("._self");
		}else {
			close(".self");
			hide("._self");
			hide(".__self");
		}
	});
	
	$(document).on("click",".suit",function(){
		console.log("clicked SUIT");
		if ($(".suit").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".suit");
			show("._suit");
		}else {
			close(".suit");
			hide("._suit");
			hide(".__suit");
		}
	});
	
	$(document).on("click",".tasks",function(){
		console.log("clicked TASKS");
		if ($(".tasks").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".tasks");
			show("._tasks");
		}else {
			close(".tasks");
			hide("._tasks");
			hide(".__tasks");
		}
	});
	
	
	
	
	
	
});