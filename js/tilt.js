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

//
// Dropdown Menu
//
/*Count # of subnavs
function countExpanders() {
    var testimonialElements = $(".subexpander");
    for(var i=0; i<testimonialElements.length; i++){
        var element = testimonialElements.eq(i);
        var nm = i+1;
        var fin = "subx-"+ nm;
        element.addClass(fin);
    }
    
};
countExpanders();
*/

//Page title nav
$(".expander").click(function(){
	var $this = $(this),
	$content = $(".slide").find(".content");
	
    function closeExpander() {
            $("span#flapper").addClass("fa-flip-horizontal");
        if(!$this.hasClass("closed")){
            TweenLite.to($content, 0.2, {height:0, overflow:'hidden'})
            $this.addClass("closed");
            $("span#flapper").addClass("fa-flip-horizontal");
        } else {
            TweenLite.set($content, {height:"auto", overflow:'visible'})
            TweenLite.from($content, 0.2, {height:0, overflow:'hidden'})
            $this.removeClass("closed");
            $("span#flapper").removeClass("fa-flip-horizontal");
        }
    };
    closeExpander();
});

//Subnavs
$(".subexpander").click(function(event){
	var $this = $(this),
	$content = $this.parent().parent().find(".subcontent");
    
    //Close any open subs first
    if(!$this.hasClass("open")) {
        TweenLite.to($('.subexpander.open').parent().parent().find(".subcontent"), 0.2, {height:0, overflow:'hidden'})
        $('.subexpander').addClass("closed");
        $('.subexpander').removeClass("open");
        $('.subexpander').parent().parent().find("span#flopper").removeClass("fa-rotate-90");
    }
    
    //Do regular subnav things
    if(!$this.hasClass("closed")){
        TweenLite.to($content, 0.2, {height:0, overflow:'hidden'})
        $(this).addClass("closed");
        $(this).removeClass("open");
        $this.parent().parent().find("span#flopper").removeClass("fa-rotate-90");
    } else {
        TweenLite.set($content, {height:"auto", overflow:'visible'})
        TweenLite.from($content, 0.2, {height:0, overflow:'hidden'})
        $(this).removeClass("closed");
        $(this).addClass("open");
        $this.parent().parent().find("span#flopper").addClass("fa-rotate-90");
    }

});
//Close subnavs on elements other than themselves
$(document).on('click', function(event) {
    if (!$(event.target).closest('.subexpander.open').length) {
    TweenLite.to($('.subcontent'), 0.2, {height:0, overflow:'hidden'})
    $('.subexpander').addClass("closed");
    $('.subexpander').removeClass("open");
    $("span#flopper").removeClass("fa-rotate-90");
  }
});


//-----------------------------------------------------------------------------
//
//
// Room For Notes 
//
//
/* Get screen height 
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var txt = "";
txt += "<p>innerWidth: " + window.innerWidth + "</p>";
txt += "<p>innerHeight: " + window.innerHeight + "</p>";
txt += "<p>outerWidth: " + window.outerWidth + "</p>";
txt += "<p>outerHeight: " + window.outerHeight + "</p>";

console.log(
    txt
);
*/
    