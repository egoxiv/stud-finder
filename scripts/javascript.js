$(function(){

  function playButton(){
    $(".play").on("click", function(){
      var $gallery = $(".gallery");
      var $video = $(".video");
      var $returnButton = $(".return-button");

      $gallery.slideUp("fast");
      $video.removeClass("hide");

      $returnButton.on("click", function(){
        $gallery.slideDown("fast");
        $video.addClass("hide");
      });
    })
  }

  playButton();

  function galleryTemplate() {
    $.get("templates/gallery.html", function(data){
      console.log(data);
      var compileTemplate = Handlebars.compile(data);
      var html = compileTemplate;
      $(".template").append(html);
    })
  }
  galleryTemplate();



})
