/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 */

const renderTweets = function(tweets) {
  // empty the section
  $('section.tweets').empty();
  // loops through tweets
  tweets.forEach((tweet) => tweet = $('section.tweets').prepend(createTweetElement(tweet)));

  // takes return value and appends it to the tweets container
  return (tweets);
};



const createTweetElement = function(tweet) {
  // create a tweet
  const $tweet = $(document.createElement('article')).addClass('tweet');

  // create header
  const $header = $(document.createElement('header')).addClass('name');
  const img = $(document.createElement('img')).addClass("avatar").attr('src', tweet.user.avatars);


  const userName = $(document.createElement('p')).text(tweet.user.name);
  const handle = $(document.createElement('b')).addClass('user-name').text(tweet.user.handle);

  // create body
  const $body = $(document.createElement('article')).addClass('body');
  const content = $(document.createElement('h3')).text(tweet.content.text);

  //create footer
  const $footer = $(document.createElement('footer'));


  // change the date format to more readable for human

  const readableDate = moment(tweet.created_at).fromNow();
  const date = $(document.createElement('p')).addClass('date').text(readableDate);

  // append social media buttons
  const $intercations = $(document.createElement('div')).addClass('intercations');
  const comments = $(document.createElement('i')).addClass("fas fa-comments");
  const retweet = $(document.createElement('i')).addClass("fas fa-retweet");
  const like = $(document.createElement('i')).addClass("fas fa-heart");
  const upload = $(document.createElement('i')).addClass("fas fa-arrow-circle-up");

  // append all to the container
  $('section.tweets').prepend($tweet.append($header.append(img).append(userName.append(handle)))
    .append($body.append(content))
    .append($footer.append(date).append($intercations
      .append(comments).append(retweet).append(like).append(upload))));

  return $tweet;

};



$(document).ready(function() {

  // add event listener

  $('#tweet-form').submit(function(e) {
    e.preventDefault();
    const form = $(this).serialize();
    const tweet = $('textarea').val();
    const $error = $('<span class="error"></span>');

    // Prepare the form for validation - remove previous errors
    $('span.error').remove();
    const $parentTag = $(this).parent();

    // alert if submit more than 140 chars
    if (tweet.length > 140) $parentTag.addClass('error').append($error.text('Too many characters'));

    // alert if user submit empty tweet
    if (tweet.length === 0) $parentTag.addClass('error').append($error.text('Required Field'));
    if (tweet.length <= 140) {
      $.ajax({
          url: "/tweets/",
          method: 'POST',
          data: form
        }).then(() => {
          // reset the textarea to empty after submittion
          loadTweets();
          $('textarea').val('');
          $('.counter').val('140');

        })
        .catch((error) => {
          console.log("error", error);
        });
    }

    // Remove the error message when the user trying to correct it
    $('textarea').focus(function() {
      $parentTag.removeClass('error');
      $('span.error', $parentTag).fadeOut();
    });
  });


  // load the data at the beginning
  const loadTweets = () => {

    $.ajax({
        url: "/tweets/",
        method: 'GET',
        dataType: 'json',
      })
      .then(function(data) {
        renderTweets(data);
      });
  };

  loadTweets();
});