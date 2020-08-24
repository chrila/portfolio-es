$(function () {
    // enable popovers
    $('[data-toggle="popover"]').popover()

    // smooth scrolling when clicking a link
    $("a").click(function (event) {

        // if reference is not empty
        // no scrolling when clicking a link in the carousel
        if (this.hash != "" && this.hash != "#blogCarousel") {

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