$(document).ready(function() {
    $(document).on('click', '.nav-link', function(event) {
        event.preventDefault();
        var target = "#" + this.getAttribute('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 90
        }, 500);
    });
});
