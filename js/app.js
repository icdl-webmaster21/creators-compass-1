	jQuery(function($) {
  	$('.slider').slick({
     arrows: false,
     variableWidth : true,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 10000,
      slidesToScroll: 1,
      draggable: false,
      focusOnSelect: false,
      pauseOnFocus: false,
  });
  $slide = $('.slide');
  $navigation = $('.slide-navigation .item');

  $slide.slick({  //slickスライダー作成
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  });
  $navigation.each(function(index){ //サムネイルに連番付与属性
    $(this).attr('data-number', index);
  });
  $navigation.eq(0).addClass('current');  //1枚をオーバーレイ

  $navigation.on('click', function(){ //サムネイルクリック時イベント
    var number = $(this).attr('data-number');
    $slide.slick('slickGoTo', number, true);
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
  });
});
