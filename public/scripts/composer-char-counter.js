$(document).ready(function() {

  // restyle the tweets
  $(".tweet").mouseover(
    function() {
      $(this).addClass("p");
    }
  );

  // hide the compose tweet area
  $("#write-tweet").click(function() {
    $(".new-tweet").animate({
      height: 'toggle'
    });
  });


  // count the characters
  const maxLength = 140;
  $("textarea").keyup(() => {
    const tweet = $('textarea').val();
    let num = maxLength - tweet.length;
    $("#charcount").text(num);

    // change to red color over 140
    if (num < 0) {
      $('.counter').css("color", "red");
      return num;
    }
    $('.counter').css("color", "grey");
    return num;
  });


});