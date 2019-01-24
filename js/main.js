$(function() {
  // Open external links in a new tab
  $(document).on('click', 'a', function(e) {
    var $link = $(this);

    if ( isExternalLink( $link ) ) {
      window.open( this.href );
      return false;
    }
  });

  // Add an link--external class
  $('a').each(function() {
    var $link = $(this);

    if ( isExternalLink( $link ) ) {
      $link.addClass('link--external');
    }
  });

  function isExternalLink($el) {
    var href = $el.attr('href');
    var link = $el.get(0).href;
    var link_host = link.split('/')[2];
    var document_host = document.location.href.split('/')[2];

    return link_host != document_host && !link.indexOf('mailto:').length;
  };

  $(document).on('click', '.hamburger', function() {
    $('html').toggleClass('mobile-nav-active');
  });

  // $(document).on('mouseenter', 'a', function(){
  //   $('html').addClass('link-active');
  // });

  // $(document).on('mouseleave', 'a', function(){
  //   $('html').removeClass('link-active');
  // });

  $(".hamburger").click(function() {
    $('body').toggleClass('nav-open');
  });

  var allMessages = [
    "Experiment",
    "Computation",
    "Have fun",
    "Google it",
    "Try again",
    "Start over",
    "Write it down",
    "Hm...",
    "Take a break",
    "Accidents are beautiful",
    "Ask a friend",
    "Check the syntax"
  ];

  // First create variable for empty messages array
  var messages = [];

  // Loop through the number of flowers and add a message
  // from allMessages to the messages array
  $('.flower').each(function(index) {
    // get a message from allMessages using `splice`
    var rando = allMessages.splice(Math.floor(Math.random() * 5 + allMessages.length));
    // push the spliced message onto the messages array
    allMessages.push(rando);
  });

  // messages should be 5 unique things from allMessages
  console.log('messages', messages);

  for (var i = 0; i < 5; i++) {
    $('.flower').first().clone().appendTo($('body'));
  }

  // for (var i = 0; i < flowerNumber; i++) {
  //   var $flower = $(this);

  //   console.log($flower);

  //   $('.flower').first().clone().appendTo("body");
  //   $($flower).each(function() {
  //     $('.flower').css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
  // });
  // }

  $('.flower').each(function(index) {
    var $flower = $(this);
    // var randno = messages[Math.floor(Math.random() * messages.length)];
    $flower.find('.flower-text').text(allMessages[index]);
    $flower.css({"left": Math.random() * window.outerWidth , "top": Math.random() * window.outerHeight});
  });

  function removeFlower() {
    setTimeout(function() {
      // select a random flower.
      var flowers = $('.flower:visible');
      var randomFlower = $(flowers[Math.floor(Math.random()*flowers.length)]);
      // console.log('Random Flower', randomFlower);
      randomFlower.addClass('remove-flower');
      // use jQuery's `addClass` to add a class to the flower.
      // in css animate the scale using the transform property.

      // use another setTimeout with the same duration as the css transform
      // which will remove the flower once the css transition is done.

      setTimeout(function() {
        // console.log('remove flower');
        randomFlower.hide();
        removeFlower();
      }, 300);
    }, 3000);
  }

  removeFlower();
});
