$(function () {
    // enable tooltips
    $('[data-toggle="tooltip"]').tooltip()

    // smooth scrolling when clicking a link
    $("a").click(function (event) {
        
        // if reference is not empty
        if (this.hash != "") {

            // prevent default handling
            event.preventDefault();

            // remember where the link points
            var a = this.hash;

            // animation!
            $("html, body").animate({
                scrollTop: $(a).offset().top
            }, 800, function () {
                window.location.hash = a;
            });
        }
    });
});