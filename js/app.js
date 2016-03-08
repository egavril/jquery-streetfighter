$(function() {
  var HadoukenApplied = new Hadouken();

  $('.instructions p:last').click(function() {
    if (HadoukenApplied.ryu.is(':visible'))
      return HadoukenApplied.ryu.hide();

    return HadoukenApplied.ryu.show();
  });
});