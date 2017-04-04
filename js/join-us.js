$(window).scroll(function(event){
  var a=$(window).scrollTop();
  var b=$(window).height();
  var c=$('.a').offset().top;
  var d=$('.b').offset().top;
  var e=$('.c').offset().top;
  var f=$('.d').offset().top;
  var g=$('.e').offset().top;
  if(a+b>c) {
    $(".a").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>d) {
    $(".b").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>e) {
    $(".c").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>f) {
    $(".d").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
  if(a+b>g) {
    $(".e").animate({left:"0px",bottom:"0px",opacity:"1"},800);
  }
    });
