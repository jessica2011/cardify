(function($) {
  $.fn.extend({ 
	  cardify: function() {  
      let container = $('#container');
      container.find('img')
        .each(function() {     	           
          $(this).wrap('<figure class="image-frame"></figure>');
          $(this).after('<figcaption class="image-caption">' + $(this).attr('alt') + '</figcaption>');       
        });  
      $('.image-frame').hover(function() {
        $('.image-caption', this).slideToggle('slow');
      }, function() {
        $('.image-caption', this).slideToggle('slow');
      });
	  }  
  });
})(jQuery);


