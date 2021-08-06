jQuery(function($){
    $(".back-top").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $(".back-top").fadeIn("fast");
        } else {
            $(".back-top").fadeOut("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $(".back-top").css({
                "position":"absolute",
                "bottom": "30px"
            });
        } else {
            $(".back-top").css({
                "position":"fixed",
                "bottom": "10px"
            });
        }
    });
    $('.back-top').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});
