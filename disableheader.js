//header gone thing

$(document).ready(function() {
    $("header").css("visibility", "hidden"); // Set the header visibility to hidden by default


    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var windowHeight = $(window).height();
        var triggerPoint = $("#trigger-point").offset().top + $("#trigger-point").outerHeight(); // Calculate the bottom position of the trigger-point element
        var offset = 30; // Number of pixels to offset the header appearance

        if (scrollPosition + windowHeight >= triggerPoint + offset) {
            $("header").css("position", "fixed").css("top", "-100px").css("visibility", "visible").animate({
              top: "0px"
            }, 500); // Animate the header to slide down from the top in 500 milliseconds
        }
    });
});