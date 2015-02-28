/* tilt.js */
/* Tilt UI */

//
//	Flowtype.js - https://github.com/simplefocus/FlowType.JS
//
$('body').flowtype({
   minimum   : 100,
   maximum   : 1800,
   minFont   : 12,
   maxFont   : 24,
   fontRatio : 50
});

//
//	Responsive triggers
//
var res = "";
$(document).ready(function() {
	$(window).trigger('resize');
});
$(window).resize(function() {
	// Define
	var classes = "mobile-low mobile-hr tablet desktop";

    // trigger-js body classes
	if($("#trigger-js").width() == 2) { $("body").removeClass(classes); $("body").addClass("tablet"); res = "low"; }
	else if($("#trigger-js").width() == 1) { $("body").removeClass(classes); $("body").addClass("mobile-hr"); res = "low";}
	else if($("#trigger-js").width() == 0) { $("body").removeClass(classes); $("body").addClass("mobile-low"); res = "low"; }
	else { $("body").removeClass(classes); $("body").addClass("desktop"); res = "high"; }
	
	// Top nav Resize Behavior -- User must check box, need to implement back-end setting
	/*
	if ($settings['subMenuDefaultExpand'] == 1) {
		if(res == "low") {
			$("#head-master ul.content").css('height', '0');
			$("#head-master").addClass("closed");
			$("span#flapper").removeClass("fa-flip-vertical");
		} else {
			TweenLite.set($("#head-master ul.content"), {height:"auto"})
			TweenLite.from($("#head-master ul.content"), 0.1, {height:0})
			$("#head-master").removeClass("closed");
			$("span#flapper").addClass("fa-flip-vertical");
		}
	}; */
	
});

$(".expander").click(function(){
	var $this = $(this),
	$content = $(".slide").find(".content");
	
	if(!$this.hasClass("closed")){
		TweenLite.to($content, 0.2, {height:0})
		$this.addClass("closed");
		$content.css('overflow', 'hidden');
        $("span#flapper").removeClass("fa-flip-vertical");
	} else {
		TweenLite.set($content, {height:"auto"})
		TweenLite.from($content, 0.2, {height:0})
		$this.removeClass("closed");
		$content.css('overflow', 'visible');
        $("span#flapper").addClass("fa-flip-vertical");
	}
});

$(".subexpander").click(function(){
	var $this = $(this),
	$content = $this.parent().parent().find(".subcontent");
	if(!$this.hasClass("closed")){
		TweenLite.to($content, 0.2, {height:0})
		$(this).addClass("closed");
		$content.css('overflow', 'hidden');
		$this.parent().parent().find("span#flopper").removeClass("fa-flip-vertical");
	} else {
		TweenLite.set($content, {height:"auto"})
		TweenLite.from($content, 0.2, {height:0})
		$(this).removeClass("closed");
		$content.css('overflow', 'visible');
		$this.parent().parent().find("span#flopper").addClass("fa-flip-vertical");
	}
});