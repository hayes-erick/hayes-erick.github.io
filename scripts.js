/* eslint-disable no-undef */
jQuery(function(a) {
  var b = a(".nav");
  a(this).scrollTop() > 0 ? b.addClass("nav-scrolled") : b.removeClass("nav-scrolled");
  a(window).scroll(function() {
    a(this).scrollTop() > 0 ? b.addClass("nav-scrolled") : b.removeClass("nav-scrolled");
  });
});

jQuery(function(a) {
  a('.navbar a[href^="#"], .button[href^="#"]').on("click", function(b) {
    b.preventDefault();
    var c = this.hash, d = a(c);
    a("html, body").stop().animate({
      scrollTop: d.offset().top - 62
    }, 900);
  });
});

