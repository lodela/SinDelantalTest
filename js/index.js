var DB = {
  items:'3'
}

$('header nav.myShoppingCart .items').html(DB.items);

$('nav, a').click(function() {
  const clicked = $(this).attr('rel');
  // console.log(clicked);
  if(clicked == 'shoppinCart'){
    $('.shopping-cart').slideToggle('fast', function() {
      // Animation complete.
    });
  }else if(clicked == 'checkout'){
    $('.shopping-cart').slideUp('fast', function() {
      // Animation complete.
    });
  }
});
