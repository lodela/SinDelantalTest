var DB = {
  items:'3',
  user:': Empresa X Y Z',
  adds:'Dirección del usuario: Calle Río Lerma 4, Piso 6, Colonia Cuauhtémoc, CP 53000, Ciudad de México',
  phne:'0445533678909',
  cart:{
    items:{
      1:2,
      2:1,
      3:1
    }
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

if(0!=DB.items){
  const items = DB.cart.items;
  for(var i in items){
    var Item = DB.catalogo[i];
    console.log(items[i]);
    var img   = Item.img;
    var Iname = Item.name;
    var Iprice= Item.precio;
    var Iqtt  = items[i];
    var li = '<li class="clearfix"><figure><img src="images/catalogo/'+img+'" alt="item'+i+'"></figure><span class="item-name">'+Iname+'</span><span class="item-price">$'+Iprice+'</span><span class="item-quantity">Quantity: '+Iqtt+'</span></li>'
    $('.shopping-cart-items').append(li);
  }
}
