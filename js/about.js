$(".conclusion_img_fore").mouseover(function () {
  $(this).children(".word-down").css({"left":"0","opacity":"1"})
  $(this).children(".author").css({"transform":"rotate(0deg)","opacity":"1"})
})

$(".conclusion_img_fore").mouseout(function () {
  $(this).children(".word-down").css({"left":"100%","opacity":"0"})
  $(this).children(".author").css({"transform":"rotate(180deg)","opacity":"0"})
})
