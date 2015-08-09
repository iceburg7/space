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
	
	$(document).on("click",".viewport",function(){
		console.log("clicked VIEWPORT");
		if ($(".viewport").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".viewport");
			show("._viewport");
		}else {
			close(".viewport");
			hide("._viewport");
			hide(".__viewport");
		}
	});
	
	$(document).on("click",".comms",function(){
		console.log("clicked COMMS");
		if ($(".comms").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".comms");
			show("._comms");
		}else {
			close(".comms");
			hide("._comms");
			hide(".__comms");
		}
	});
	
	$(document).on("click",".status",function(){
		console.log("clicked STATUS");
		if ($(".status").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".status");
			show("._status");
		}else {
			close(".status");
			hide("._status");
			hide(".__status");
		}
	});
	
	$(document).on("click",".vitals",function(){
		console.log("clicked VITALS");
		if ($(".vitals").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".vitals");
			show("._vitals");
		}else {
			close(".vitals");
			hide("._vitals");
			hide(".__vitals");
		}
	});
	
	$(document).on("click",".mood",function(){
		console.log("clicked MOOD");
		if ($(".mood").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".mood");
			show("._mood");
		}else {
			close(".mood");
			hide("._mood");
			hide(".__mood");
		}
	});
	
	$(document).on("click",".statistics",function(){
		console.log("clicked STATISTICS");
		if ($(".statistics").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".statistics");
			show("._statistics");
		}else {
			close(".statistics");
			hide("._statistics");
			hide(".__statistics");
		}
	});
	
	$(document).on("click",".attributes",function(){
		console.log("clicked ATTRIBUTES");
		if ($(".attributes").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".attributes");
			show("._attributes");
		}else {
			close(".attributes");
			hide("._attributes");
			hide(".__attributes");
		}
	});
	
	$(document).on("click",".professional",function(){
		console.log("clicked PROFESSIONAL");
		if ($(".professional").hasClass("closed")){
			close("._attributes");
			close(".__attributes");
			hide(".__attributes");
			open(".professional");
			show("._professional");
		}else {
			close(".professional");
			hide("._professional");
			hide(".__professional");
		}
	});
	
	$(document).on("click",".personal",function(){
		console.log("clicked PERSONAL");
		if ($(".personal").hasClass("closed")){
			close("._attributes");
			close(".__attributes");
			hide(".__attributes");
			open(".personal");
			show("._personal");
		}else {
			close(".personal");
			hide("._personal");
			hide(".__personal");
		}
	});
	
	
	
	
	
	
	
	
	
	
});