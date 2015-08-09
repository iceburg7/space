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
	
	$(document).on("click",".skills",function(){
		console.log("clicked SKILLS");
		if ($(".skills").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".skills");
			show("._skills");
		}else {
			close(".skills");
			hide("._skills");
			hide(".__skills");
		}
	});
	
	$(document).on("click",".level1",function(){
		console.log("clicked LEVEL1");
		if ($(".level1").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level1");
			show("._level1");
		}else {
			close(".level1");
			hide("._level1");
			hide(".__level1");
		}
	});
	
	$(document).on("click",".level2",function(){
		console.log("clicked LEVEL2");
		if ($(".level2").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level2");
			show("._level2");
		}else {
			close(".level2");
			hide("._level2");
			hide(".__level2");
		}
	});
	
	$(document).on("click",".level3",function(){
		console.log("clicked LEVEL3");
		if ($(".level3").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level3");
			show("._level3");
		}else {
			close(".level3");
			hide("._level3");
			hide(".__level3");
		}
	});
	
	$(document).on("click",".level4",function(){
		console.log("clicked LEVEL4");
		if ($(".level4").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level4");
			show("._level4");
		}else {
			close(".level4");
			hide("._level4");
			hide(".__level4");
		}
	});
	
	$(document).on("click",".level5",function(){
		console.log("clicked LEVEL5");
		if ($(".level5").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level5");
			show("._level5");
		}else {
			close(".level5");
			hide("._level5");
			hide(".__level5");
		}
	});
	
	$(document).on("click",".level6",function(){
		console.log("clicked LEVEL6");
		if ($(".level6").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level6");
			show("._level6");
		}else {
			close(".level6");
			hide("._level6");
			hide(".__level6");
		}
	});
	
	$(document).on("click",".level7",function(){
		console.log("clicked LEVEL7");
		if ($(".level7").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level7");
			show("._level7");
		}else {
			close(".level7");
			hide("._level7");
			hide(".__level7");
		}
	});
	
	$(document).on("click",".level8",function(){
		console.log("clicked LEVEL8");
		if ($(".level8").hasClass("closed")){
			close("._skills");
			close(".__skills");
			hide(".__skills");
			open(".level8");
			show("._level8");
		}else {
			close(".level8");
			hide("._level8");
			hide(".__level8");
		}
	});
	
	$(document).on("click",".feats",function(){
		console.log("clicked FEATS");
		if ($(".feats").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".feats");
			show("._feats");
		}else {
			close(".feats");
			hide("._feats");
			hide(".__feats");
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});