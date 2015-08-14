$(document).ready(function(){

	console.log("it works.");
	
	var location = 1;
	var stevenslocation = 1;
	var finderknown = 0;
	var finderinstalled = 0;
	var spaceinstalled = 0;
	
	
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
	
	$(document).on("click",".port1",function(){
		console.log("clicked PORT1");
		if ($(".port1").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".port1");
			show("._port1");
		}else {
			close(".port1");
			hide("._port1");
			hide(".__port1");
		}
	});
	
	$(document).on("click",".port2",function(){
		console.log("clicked PORT2");
		if ($(".port2").hasClass("closed")){
			close("._hud");
			close(".__hud");
			hide(".__hud");
			open(".port2");
			show("._port2");
		}else {
			close(".port2");
			hide("._port2");
			hide(".__port2");
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
	
	$(document).on("click",".fate",function(){
		console.log("clicked FATE");
		if ($(".fate").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".fate");
			show("._fate");
		}else {
			close(".fate");
			hide("._fate");
			hide(".__fate");
		}
	});
	
	$(document).on("click",".dreams",function(){
		console.log("clicked DREAMS");
		if ($(".dreams").hasClass("closed")){
			close("._self");
			close(".__self");
			hide(".__self");
			open(".dreams");
			show("._dreams");
		}else {
			close(".dreams");
			hide("._dreams");
			hide(".__dreams");
		}
	});
	
	$(document).on("click",".asleep",function(){
		console.log("clicked ASLEEP");
		if ($(".asleep").hasClass("closed")){
			close("._dreams");
			close(".__dreams");
			hide(".__dreams");
			open(".asleep");
			show("._asleep");
		}else {
			close(".asleep");
			hide("._asleep");
			hide(".__asleep");
		}
	});
	
	$(document).on("click",".daydreams",function(){
		console.log("clicked DAYDREAMS");
		if ($(".daydreams").hasClass("closed")){
			close("._dreams");
			close(".__dreams");
			hide(".__dreams");
			open(".daydreams");
			show("._daydreams");
		}else {
			close(".daydreams");
			hide("._daydreams");
			hide(".__daydreams");
		}
	});
	
	$(document).on("click",".aspirations",function(){
		console.log("clicked ASPIRATIONS");
		if ($(".aspirations").hasClass("closed")){
			close("._dreams");
			close(".__dreams");
			hide(".__dreams");
			open(".aspirations");
			show("._aspirations");
		}else {
			close(".aspirations");
			hide("._aspirations");
			hide(".__aspirations");
		}
	});
	
	$(document).on("click",".suitstatus",function(){
		console.log("clicked SUITSTATUS");
		if ($(".suitstatus").hasClass("closed")){
			close("._suit");
			close(".__suit");
			hide(".__suit");
			open(".suitstatus");
			show("._suitstatus");
		}else {
			close(".suitstatus");
			hide("._suitstatus");
			hide(".__suitstatus");
		}
	});
	
	$(document).on("click",".version",function(){
		console.log("clicked VERSION");
		if ($(".version").hasClass("closed")){
			close("._suit");
			close(".__suit");
			hide(".__suit");
			open(".version");
			show("._version");
		}else {
			close(".version");
			hide("._version");
			hide(".__version");
		}
	});
	
	$(document).on("click",".power",function(){
		console.log("clicked POWER");
		if ($(".power").hasClass("closed")){
			close("._suit");
			close(".__suit");
			hide(".__suit");
			open(".power");
			show("._power");
		}else {
			close(".power");
			hide("._power");
			hide(".__power");
		}
	});
	
	$(document).on("click",".oxygen",function(){
		console.log("clicked OXYGEN");
		if ($(".oxygen").hasClass("closed")){
			close("._suit");
			close(".__suit");
			hide(".__suit");
			open(".oxygen");
			show("._oxygen");
		}else {
			close(".oxygen");
			hide("._oxygen");
			hide(".__oxygen");
		}
	});
	
	$(document).on("click",".maintenance",function(){
		console.log("clicked MAINTENANCE");
		if ($(".maintenance").hasClass("closed")){
			close("._suit");
			close(".__suit");
			hide(".__suit");
			open(".maintenance");
			show("._maintenance");
		}else {
			close(".maintenance");
			hide("._maintenance");
			hide(".__maintenance");
		}
	});
	
	$(document).on("click",".complete",function(){
		console.log("clicked COMPLETE");
		if ($(".complete").hasClass("closed")){
			close("._tasks");
			close(".__tasks");
			hide(".__tasks");
			open(".complete");
			show("._complete");
		}else {
			close(".complete");
			hide("._complete");
			hide(".__complete");
		}
	});
	
	$(document).on("click",".incomplete",function(){
		console.log("clicked INCOMPLETE");
		if ($(".incomplete").hasClass("closed")){
			close("._tasks");
			close(".__tasks");
			hide(".__tasks");
			open(".incomplete");
			show("._incomplete");
		}else {
			close(".incomplete");
			hide("._incomplete");
			hide(".__incomplete");
		}
	});
	
	$(document).on("click",".urgent",function(){
		console.log("clicked URGENT	");
		if ($(".urgent").hasClass("closed")){
			close("._tasks");
			close(".__tasks");
			hide(".__tasks");
			open(".urgent");
			show("._urgent");
		}else {
			close(".urgent");
			hide("._urgent");
			hide(".__urgent");
		}
	});
	
	$(document).on("click",".printout",function(){
		console.log("clicked PRINTOUT");
		if ($(".printout").hasClass("closed")){
			close("._viewport");
			close(".__viewport");
			hide(".__viewport");
			open(".printout");
			show(".printouttext");
			show(".printoutlocation"+location);
			hide(".description");
			show(".descriptionlocation"+location);
		}else {
			close(".printout");
			hide("._printout");
			hide(".__printout");
		}
	});
	
	
	$(document).on("click",".gotonav",function(){
		console.log("clicked GO TO NAV");
		hide(".printoutlocation1");
		show(".printoutlocation2");
		location = 2;
		
		hide(".description");
		show(".descriptiongotonav");
	});
	
	$(document).on("click",".gotolab",function(){
		console.log("clicked GO TO LAB");
		hide(".printoutlocation2");
		show(".printoutlocation1");
		location = 1;
		
		hide(".description");
		show(".descriptiongotolab");
	});
	
	$(document).on("click",".xlab",function(){
		hide(".description");
		show(".descriptionxlab");
	});
	
	$(document).on("click",".xnav",function(){
		hide(".description");
		show(".descriptionxnav");
	});
	
	$(document).on("click",".xresearch",function(){
		hide(".description");
		show(".descriptionxresearch");
	});
	
	$(document).on("click",".xporthole",function(){
		hide(".description");
		show(".descriptionxporthole");
	});
	
	$(document).on("click",".xwilliams",function(){
		hide(".description");
		show(".descriptionxwilliams");
	});
	
	$(document).on("click",".takefinder",function(){
		hide(".description");
		show(".descriptiontakefinder");
		$(".takefinder").removeClass("printoutlocation1");
		hide(".takefinder")
		$(".installfinder").addClass("printoutlocation1");
		show(".installfinder")
	});
	
	$(document).on("click",".installfinder",function(){
		hide(".description");
		show(".descriptioninstallfinder");
		$(".installfinder").removeClass("printoutlocation1");
		hide(".installfinder")
		$(".port1").addClass("_hud");
		show(".port1")
		$(".pickupbulbs").addClass("printoutlocation1");
		show(".pickupbulbs")
		$(".takespace").addClass("printoutlocation1");
		show(".takespace")
	});
	
	$(document).on("click",".pickupbulbs",function(){
		hide(".description");
		show(".descriptionpickupbulbs");
		$(".pickupbulbs").removeClass("printoutlocation1");
		hide(".pickupbulbs")
	});
	
	$(document).on("click",".takespace",function(){
		hide(".description");
		show(".descriptiontakespace");
		$(".takespace").removeClass("printoutlocation1");
		hide(".takespace")
		$(".installspace").addClass("printoutlocation1");
		show(".installspace")
	});
	
	$(document).on("click",".installspace",function(){
		hide(".description");
		show(".descriptioninstallspace");
		$(".installspace").removeClass("printoutlocation1");
		hide(".installspace")
		$(".port2").addClass("_hud");
		show(".port2")
	});
	
	$(document).on("click",".connection",function(){
		console.log("clicked CONNECTION");
		if ($(".connection").hasClass("closed")){
			close("._comms");
			close(".__comms");
			hide(".__comms");
			open(".connect");
			show(".connectionimage");
			show(".connectiontext");
			show(".connectionlocation"+location);
			hide(".answer");
			show(".answerlocation"+location);
		}else {
			close(".printout");
			hide("._printout");
			hide(".__printout");
		}
	});
	
	$(document).on("click",".question1",function(){
		hide(".answer");
		show(".answerquestion1");
	});
	
	$(document).on("click",".question2",function(){
		hide(".answer");
		show(".answerquestion2");
	});
	
	$(document).on("click",".question3",function(){
		hide(".answer");
		show(".answerquestion3");
	});
	
	$(document).on("click",".question4",function(){
		hide(".answer");
		show(".answerquestion4");
	});
	
	$(document).on("click",".question5",function(){
		hide(".answer");
		show(".answerquestion5");
		if(finderknown===0){
			$(".takefinder").addClass("printoutlocation1");
			finderknown = 1;
		}
	});
	
	$(document).on("click",".question6",function(){
		hide(".answer");
		show(".answerquestion6");
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});