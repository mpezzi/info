$(document).ready(function(){
  $(document).bind('keydown', 'Alt+i', function(){
    $('div.info').animate({ opacity: 'toggle', height: 'toggle' }, 500, 'info');
  });
  
  $('.info .close').bind('mouseup', function(){
    $('div.info').animate({ opacity: 'toggle', height: 'toggle' }, 500, 'info');
  });
  
  jQuery.easing.info = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  };
});