//-------------------------
//	Responsive triggers
//-------------------------
$(document).ready(function() {
	$(window).trigger('resize');
});
$(window).resize(function() {
    // Define
    var classes = "mobile-low mobile-hr tablet desktop";
    var res = "";
    var intro = $("#intro-kitty");
    var introButton = $("#slide-buttons #introduction");
    
    // Trigger body classes
    if($("#trigger").width() == 2) { $("body").removeClass(classes); $("body").addClass("tablet"); res = "low"; }
    else if($("#trigger").width() == 1) { $("body").removeClass(classes); $("body").addClass("mobile-hr"); res = "low";}
    else if($("#trigger").width() == 0) { $("body").removeClass(classes); $("body").addClass("mobile-low"); res = "low"; }
    else { $("body").removeClass(classes); $("body").addClass("desktop"); res = "high"; }
    
    // Intro Kitty on resize
    if(intro.height() > 52 && res != "high") {
        TweenLite.to(intro, .5, { height:52, overflow:"hidden"}); 
    }
    if(introButton.hasClass("active") && intro.height() < 53 && res == "high") {
        TweenLite.to(intro, .5, { height:182, overflow:"hidden"}); 
    }
    if(! introButton.hasClass("active") && intro.height() < 53 && res == "high") {
        TweenLite.to(intro, .5, { height:0, overflow:"hidden"}); 
    }
    if(res == "low" && intro.height() < 53) {
        TweenLite.to(intro, .5, { height:52, overflow:"hidden"});
    }
    
    // Nav resize classes
    if(res == "high") {TweenLite.to($("#slide-nav .button"), .5, { height:'auto', overflow:"hidden"});}
    if(res == "low") { $("#slide-nav").addClass("dropdown"); TweenLite.to($("#slide-nav .button"), .5, { height:0});}
    else { $("#slide-nav").removeClass("dropdown"); }
});

//-------------------------
//	Navigation
//-------------------------

$("#slide-nav .button").each(function() {

	// Define
	var intro = $("#intro-kitty");
	var nav = $("#slide-buttons");
	var bubbles = $("#intro-kitty .bubble-git, #intro-kitty .bubble-info");
	var currentID ="#" + $(this).attr('id');
	var currentPage = $("#content").find(currentID);
    
    $("#slide-nav #mobile").click(function() {
        $("#slide-nav #mobile").find("h1").text("Select a page...");
    });
    
	// Nav button click
    $(this).click(function() {
        $("#slide-nav #mobile").find("h1").text(currentID);
        
        $("#slide-nav .button").removeClass("active");
        if($(this).attr('id') != "introduction" && $("body").hasClass("desktop")) {
            TweenLite.to(intro, .3, { height:0, overflow:"hidden"});
        } 
        else {
            if( $("body").hasClass("desktop")) {
                TweenLite.to(intro, .3, { height:182, overflow:"hidden"}); 
            }
        }
        
        if(! $(this).hasClass("active")) {$(this).addClass("active");}
        
        if(currentPage.attr('id') == currentID) { return; }
        else {
            var otherPages = $("#content .page").not(currentID);
			TweenLite.to(otherPages, .4, {autoAlpha:0, display:"none", onComplete:pageIn});
				function pageIn() {
					TweenLite.to(currentPage, .4, {autoAlpha:1, display:"block", onComplete:showPage});
						function showPage() {
							TweenLite.to(currentPage, .4, {autoAlpha:1, display:"block"});
						}
				}
        }
    });
    
});
$("#slide-nav #mobile").click(function() {
    if($("#slide-nav").hasClass("dropdown")) {
        if($("#slide-nav #mobile").hasClass("up")) {
            $("#slide-nav #mobile").removeClass("up");
            TweenLite.to($("#slide-nav .button"), .4, {height:50});
            $("#slide-nav #mobile").addClass("down");
        } else {
            $("#slide-nav #mobile").removeClass("down");
            TweenLite.to($("#slide-nav .button"), .4, {height:0});
            $("#slide-nav #mobile").addClass("up");
        }
    }
});
$("#slide-nav .button").click(function() {
    if($("#slide-nav").hasClass("dropdown")) {
        $("#slide-nav #mobile").removeClass("down");
        $("#slide-nav #mobile").addClass("up");
        TweenLite.to($("#slide-nav .button"), .4, {height:0});
    }
});

//-------------------------
//	About Page
//-------------------------
//curtains
$("#contact .curtains").click(function() {
    if($(this).hasClass("down")) {
        $(this).removeClass("down");
		TweenLite.to($("#contact img.toggle"), .7, {y:-205});
        TweenLite.to($("#contact img.me"), .7, {y:0});

		$(this).addClass("up");
    } else {
		$(this).removeClass("up");
		TweenLite.to($("#contact img.me"), .7, {y:-205});
        TweenLite.to($("#contact img.toggle"), .7, {y:0});
		$(this).addClass("down");
	}
});

//Bootstrap tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//And that funny little thing...
if($("#me").hasClass("job")) {
	console.log("Chinese food");
	} else {
	console.log("Ramen noodles");
	}