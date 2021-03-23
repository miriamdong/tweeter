var myEl = document.querySelector('#cats')

myEl.addEventListener('click', function() {

  let graphTimer =
    setTimeout(() => {
        $('.bar').each(function(i) {
          var $bar = $(this);
          $(this).append('<span class="count"></span>');
          setTimeout(function() {
            $bar.css('width', $bar.attr('data-percent'));
          }, i * 100);
        });

        $('.count').each(function() {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
          }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now) + '%');
            }
          });
        });

      },
      500)


});


$('.bar').hover(showinfo);
$('.bar').on('click', whenClick);


function showinfo() {
  $(this).toggleClass('a');
};

function whenClick() {

  $(this).removeClass('unselected').siblings().addClass('unselected');
  $(this).css('width', $(this).attr('data-percent'));
  $(this).siblings().animate({
    'width': '0px'
  }, 0)

  $(this).append('<span class="count"></span>');
  $('.count').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).parent('.bar').attr('data-percent')
    }, {
      duration: 2000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now) + '%');
      }
    });
  });

}



$(document).ready(function() {
  var myEl = document.querySelector('#cats')

});
var $bar = $(this);

function resetGraph() {

  $('.bar').animate({
    'width': '0px'
  }, 0)

  // Restart timer
  let graphTimer = setTimeout(function() {
    displayGraph(bar, 0);
  }, 200);

  clearTimeout(graphTimer);
}

function reselect() {
  document.getElementById('cats').selectedIndex = 0;
  resetGraph();
  return false;
}

$('.bar').mouseenter(function() {
  $(this).addClass('a');
});