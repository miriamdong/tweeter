$(document).ready(function() {


  $(".name-msg").mouseenter(
    function() {
      $("p", this).addClass("b");
    }
  );

  function myFunction() {
    var x = document.getElementById("username");
    if (window.getComputedStyle(x).visibility === "hidden") {
      x.style.visibility = "visible";
    }
  }

  // $('.add-extra').hover(showinfo);
  // $('.add-extra').on('click', whenClick);


  // function showinfo() {
  //   $(this).toggleClass('a');
  // };

  // document
  //   .querySelector('.tweets')
  //   .addEventListener('click', (event) => {

  //   });

  // $('.tweets').mouseenter(function() {
  //   $(this).addClass('a');
  // });

  // // or named functions
  // const eventHandler = function(event) {
  //   // do something
  // };

  // document
  //   .querySelector('button')
  //   .addEventListener('click', eventHandler);

  // // console.log the mouse x and y coordinates whenever the body is clicked
  // const clickHandler = function(event) {
  //   console.log(event.clientX, event.clientY);
  // };


  // // we can also remove event handlers using a similar API
  // document
  //   .querySelector('body')
  //   .removeEventListener('click', clickHandler);

  // // using the .on method
  // $('button').on('click', clickHandler);

  // // there are several shorthand methods for common DOM events
  // $('button').click(clickHandler);
  // $('form').submit(submitHandler);
  // $('input').focus(focusHandler);


  // function callFunction() {

  //   const input = document.getElementByID('charcount');
  //   const len = getCharLength().length;
  //   document.getElementById("charcount").innerHTML = getRemaining();

  //   // Get user input from textarea
  //   function getUserInput() {
  //     // Assign user input to variable
  //     let userInput = document.getElementById("charcount").value;
  //     console.log("test" + userInput)
  //     return userInput;
  //   }










  //   $("#btn").on('click', function() {
  //     console.log(this); //The this keyword is a reference to the button
  //   });

  //   $("#btn").on('click', () => {
  //     console.log(this); //The this keyword here refers to something else!
  //   });
  // };
});