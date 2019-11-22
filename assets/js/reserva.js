(function($) {

  $('a[href="#reserva"]').on('click', function() {
    var $link = $(this);
    var asunto = $link.data('asunto');

    if (asunto)
      $('input[name="asunto"]').val(asunto);

  });

})(jQuery);
