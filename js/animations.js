$(document).ready(function() {
    $('#mainNav').affix({
        offset: {
        top: 100
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()>0) {
            $('#mainNav').css('transform', 'translateY(-50px)');
        } else {
            $('#mainNav').css('transform', 'translateY(0)');
            }
    });
});