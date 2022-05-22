$(document).ready(function () {
  $(".provider-panel").on("click", function () {
    $(".provider-panel").removeClass("is-active");
    $(this).addClass("is-active");
  });

  var str = $(".quantity-input").val();

  if (str > 0) {
  }
  $(".up-btn").on("click", function () {
    $(".quantity-input").attr("value", ++str);
    console.log(str);
  });
  console.log(str);
  $(".down-btn").on("click", function () {
    $(".quantity-input").attr("value", str--);
  });

  //slide
  $(".product-image__image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-image__thumb-slider",
  });
  $(".product-image__thumb-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-image__image-slider",
    focusOnSelect: true,
    // fade: true,
  });
});
