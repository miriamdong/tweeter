$(document).ready(function() {


  $(".tweet").mouseover(
    function() {
      $(this).addClass("p");
    }
  );

  $("#write-tweet").click(function() {
    $(".new-tweet").animate({
      height: 'toggle'
    });
  });



  const maxLength = 140;
  $("textarea").keyup(() => {
    const tweet = $('textarea').val();
    let num = maxLength - tweet.length;
    $("#charcount").text(num);

    if (num < 0) {
      $('.counter').css("color", "red");
    }
    $('.counter').css("color", "grey");
    return num;
  });





  //   $("#btn").on('click', () => {
  //     console.log(this); //The this keyword here refers to something else!
  //   });
  // };





});