var DB = {
  user:{
    name:'Empresa X Y Z',
    addrss:'Dirección del usuario: Calle Río Lerma 4, Piso 6, Colonia Cuauhtémoc, CP 53000, Ciudad de México',
    phne  :'0445533678909',
  },
  cart:{
    items:{
      1:2,
      2:1,
      3:1
    },
    total:''
  },
  catalogo:{
    1:{
      name:'ASUS ZenPad Z300M-A2-GR 16GB Negro, Gris - Tablet',
      desc:'Tableta de tamaño completo, IEEE 802.11n, Android, Pizarra, Android 6.0, Negro, Gris',
      precio:'3380.95',
      img:'41j7Cy9Pj5L_large.jpg'
    },
    2:{
      name:'Lenovo TAB3 Essential',
      desc:'ZA0R0029US 7" Android Tablet',
      precio:'1495.31',
      img:'tab-3-7_02_1.jpg'
    },
    3:{
      name:'AT-AT Driver',
      desc:'Star Wars Figuras de Acción Star Wars Black Series, AT-AT Driver, 6"',
      precio:'449.00',
      img:'81UjI22-hxL._SL1500_.jpg'
    }
  }
}
var cntItems = Object.keys(DB.cart.items).length;
$('header nav.myShoppingCart .items, .shopping-cart-header .badge').html(cntItems);

$('nav, a, .other, .button').click(function() {
  const clicked = $(this).attr('rel');
  console.log(clicked);
  if(clicked == 'shoppinCart'){
    $('.shopping-cart').slideToggle('fast', function() {
      // Animation complete.
    });
  }else if(clicked == 'checkout'){
    $('.shopping-cart').slideUp('fast', function() {
      $('.credit-card-box').fadeIn();
    });
  }else if(clicked == 'other'){
    $('.credit-card-box header figure').hide();
    $('.credit-card-box h3').html('').html('Más opciones de pago:');
    $('.credit-card-box section').html('').html('<figure><img src="images/pago_oxxo.jpg" alt=""></figure>');
    $('.credit-card-box footer .button').attr('rel', 'oxxo')
  }else if(clicked == 'oxxo'){
    $('section.main').fadeOut();
    $('section.pagoOxxo').fadeIn();
  }else if(clicked=='back'){
    location.reload();
  }
});

if(0!=DB.items){
  const items = DB.cart.items;
  var total = 0;
  for(var i in items){
    var item,img,Iname,Iprice,Iqtt,sbTtl,li;
    Item   = DB.catalogo[i];
    img    = Item.img;
    Iname  = Item.name;
    Idesc  = Item.desc;
    Iprice = Item.precio;
    Iqtt   = items[i];
    sbTtl  = Iprice*Iqtt;
    total  = total+sbTtl;
    li     = '<li class="clearfix"><figure><img src="images/catalogo/'+img+'" alt="item'+i+'"></figure><span class="item-name">'+Iname+'</span><span class="item-desc">'+Idesc+'</span><span class="item-price">$'+Iprice+'</span><span class="item-quantity">Quantity: '+Iqtt+'</span></li>'
    $('.shopping-cart-items').append(li);
  }
  $('.shopping-cart-total').html(total);
  DB.cart.total = total;
}
