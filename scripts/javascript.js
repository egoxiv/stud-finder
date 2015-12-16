$(function(){

  // function playButton(){
  //   $(".play").on("click", function(){
  //     var $gallery = $(".gallery");
  //     var $video = $(".video");
  //     var $returnButton = $(".return-button");

  //     $gallery.slideUp("fast");
  //     $video.removeClass("hide");

  //     $returnButton.on("click", function(){
  //       $gallery.slideDown("fast");
  //       $video.addClass("hide");
  //     });
  //   })
  // }

  // playButton();

function handlebars(){
  var template = Handlebars.compile($('templates/gallery.html').html());
  console.log(template);
  //var temp = template();
  //console.log(temp);
  $("#handlebarTemplate").append(temp);
  //console.log(articleData);
}
handlebars();



})
