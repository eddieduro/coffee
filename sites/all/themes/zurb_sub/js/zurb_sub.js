(function ($, Drupal) {
  $(document).ready(function(){
    let $p = $('p');
    $p.mouseenter(function(e){
      $(this).css("color", "red");
    });
    $p.mouseleave(function(e){
      $(this).css("color", "black");
    });
  });
  Drupal.behaviors.zurb_sub = {
    attach: function(context, settings) {
    }

  };

})(jQuery, Drupal);
