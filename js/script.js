/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.
  // Add  functionality here.
  $(".box-slick-carousel").slick({
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

}(this, this.document, this.jQuery));
