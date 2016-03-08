function Hadouken() {
  var self = this;

  this.ryu =       $('.ryu'),
  this.still =     $('.ryu-still'),
  this.ready =     $('.ryu-ready'),
  this.throwing =  $('.ryu-throwing'),
  this.hadouken =  $('.hadouken'),
  this.cool =      $('.ryu-cool'),
  this.sound =     $('#hadouken-sound');

  this.triggers = {
    'mouseenter': function() {
      self.still.hide();
      self.ready.show();
    },
    'mouseleave': function() {
      self.ready.hide();
      self.still.show();
    },
    'mousedown': function() {
      self.playHadouken();
      self.ready.hide();
      self.throwing.show();
      self.hadouken
        .finish()
        .show()
        .animate({'left': '1057px'}, 500, function() {
          $(this).hide().css('left', '557px');
        });
    },
    'mouseup': function() {
      self.throwing.hide();
      self.ready.show();
    }
  }

  this.ryu.on(this.triggers);

  $(document).on({
    'keydown': function(e) {
      if (e.keyCode == 88) {
        self.ryu.off(self.triggers);

        self.still.hide();
        self.ready.hide();
        self.cool.show();
      }
    },
    'keyup': function() {
      self.still.show();
      self.cool.hide();

      self.ryu.on(self.triggers);
    }
  });
}

Hadouken.prototype.playHadouken = function() {
  this.sound[0].volume = 0.5;
  this.sound[0].load();
  this.sound[0].play();

  console.log("Fired!!");
};