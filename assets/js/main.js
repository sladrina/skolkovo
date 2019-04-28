$('.text-block').click(function() {
    $('.dropdown').toggle();
    $('.dropdown-close').toggle();
});
$('.dropdown-close').click(function() {
    $('.dropdown').css("display", "none");
    $('.dropdown-close').css("display", "none");
});
$('.fullBackground').fullClip({
    images: ['assets/images/slider_6.png', 'assets/images/slider_1.png', 'assets/images/slider_2.png', 'assets/images/slider_3.png', 'assets/images/slider_4.png', 'assets/images/slider_5.png'],
});
$('#slider-mini-1').click(function() {
    $('.fullBackground').css('background-image', 'url("assets/images/slider_1.png")')
});
$('#slider-mini-2').click(function() {
    $('.fullBackground').css("background-image", 'url("assets/images/slider_2.png")')
});
$('#slider-mini-3').click(function() {
    $('.fullBackground').css("background-image", 'url("assets/images/slider_3.png")')
});
$('#slider-mini-4').click(function() {
    $('.fullBackground').css("background-image", 'url("assets/images/slider_4.png")')
});
$('#slider-mini-5').click(function() {
    $('.fullBackground').css("background-image", 'url("assets/images/slider_5.png")')
});
$('#slider-mini-6').click(function() {
    $('.fullBackground').css("background-image", 'url("assets/images/slider_6.png")')
});