/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [{
    "user": { // key: data.user
      "name": "Newton", //  data.user.name
      "avatars": "https://i.imgur.com/73hZDYK.png", // data.user.avatars
      "handle": "@SirIsaac" // data.user.handle
    },
    "content": { // key: data.content
      "text": "If I have seen further it is by standing on the shoulders of giants"
    }, // data.content.text
    "created_at": 1461116232227 // data.created_at
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


const renderTweets = function(tweets) {
  // loops through tweets
  tweets.forEach((tweet) => tweet = $('section.tweets').append(createTweetElement(tweet)));

  // takes return value and appends it to the tweets container
  return (tweets);
};



const createTweetElement = function(tweet) {
  // create a tweet

  let $tweet = $(document.createElement('article')).addClass('tweet');

  // create header
  let $header = $(document.createElement('header')).addClass('name');
  let img = $(document.createElement('img')).addClass("avatar").attr('src', tweet.user.avatars);

  console.log(img);

  let userName = $(document.createElement('p')).text(tweet.user.name);
  let handle = $(document.createElement('b')).addClass('user-name').text(tweet.user.handle);

  // create body
  let $body = $(document.createElement('article')).addClass('body');
  let content = $(document.createElement('h3')).text(tweet.content.text);

  //create footer
  let $footer = $(document.createElement('footer'));
  let date = $(document.createElement('p')).addClass('date').text(tweet.created_at);

  let $intercations = $(document.createElement('div')).addClass('intercations');
  const comments = $(document.createElement('i')).addClass("fas fa-comments");
  const retweet = $(document.createElement('i')).addClass("fas fa-retweet");
  const like = $(document.createElement('i')).addClass("fas fa-heart");
  const upload = $(document.createElement('i')).addClass("fas fa-arrow-circle-up");

  $('section.tweets').prepend($tweet.append($header.append(img).append(userName.append(handle)))
    .append($body.append(content))
    .append($footer.append(date).append($intercations
      .append(comments).append(retweet).append(like).append(upload))));
  return $tweet;
};


$(document).ready(function() {

  renderTweets(data);
  let html = "";

  $('#tweet-form').submit(function(e) {
    e.preventDefault();
    // console.log(this);
    // console.log($(this).serialize());
    const form = $(this).serialize();
    console.log(form);
    const tweet = $('textarea').val();

    if (tweet.length) {
      $.ajax({
        url: "/tweets/",
        method: 'POST',
        data: form
        // success: function(data) {
        //   $.each(data.tweets, function(key, value) {
        //     html += createTweetElement(value);
        //   });
        //   $('section.tweets').before(html);
        // }
        // }).then((json) => {
        //   const temp = data(json.text);
        //   tweet.append(temp);
      }).catch((error) => {
        console.log("error", error);
      });
    }
  });


});