$(function() {
  var ryu =       $('.ryu'),
      still =     $('.ryu-still'),
      ready =     $('.ryu-ready'),
      throwing =  $('.ryu-throwing'),
      hadouken =  $('.hadouken'),
      cool =      $('.ryu-cool');

  var triggers = {
    'mouseenter': function() {
      still.hide();
      ready.show();
    },
    'mouseleave': function() {
      ready.hide();
      still.show();
    },
    'mousedown': function() {
      playHadouken();
      ready.hide();
      throwing.show();
      hadouken
        .finish()
        .show()
        .animate({'left': '1057px'}, 500, function() {
          $(this).hide().css('left', '557px');
        });
    },
    'mouseup': function() {
      throwing.hide();
      ready.show();
    }
  }

  ryu.on(triggers);

  $(document).on({
    'keydown': function(e) {
      if (e.keyCode == 88) {
        ryu.off(triggers);

        still.hide();
        ready.hide();
        cool.show();
      }
    },
    'keyup': function() {
      still.show();
      cool.hide();

      ryu.on(triggers);
    }
  });

  function playHadouken () {
    var sound = $('#hadouken-sound')[0];

    sound.volume = 0.5;
    sound.load();
    sound.play();
  }
});