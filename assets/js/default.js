$(function() {
  // Open the mobile toggle, All pages
  $('body').on('click', '#gm-credit-trigger', function(e) {
    e.preventDefault();
    $(".gm-credit-image").toggleClass("gm-credit-image--show");
  });
});
