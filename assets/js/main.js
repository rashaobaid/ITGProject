//Get slider Items \array.from
var itemContainer = Array.from(document.querySelectorAll('.slider .Slickslider div.item .card '));
console.table(itemContainer);

$(function(){
  $.ajax({
      url:'pro.json',
      dataType: 'json',
      cache :false,
      success:function(data ,status){           
        //  console.log(data);
        //  console.log(status);
        var innerHtml = [];
        $.each(data,function(index){
          var item = data[index]
          var inner =  ` <div class="item" >`+
          `<div class="card" style="width:260px">`+
            `<span></span>`+
            `<img class="card-copy" src="assets/img/cart-copy-4.png" alt="">`+
            `<img class="card-img-top" src="${item['product-img']}" alt="" >`+
            `<div class="card-body">`+
              `<p class="card-title">${item['product-name']}</p><hr>`+
              `<p class="card-text">${item['product-brand']}</p>`+
              `<p class="card-text2">${item['product-line']}</p>`+
            `</div>`+
          `</div>`+
        `</div>`
          innerHtml.push(inner)
        })
        $('.Slickslider').slick('slickAdd',innerHtml.join(" "));

      },
      error:function(xhr,textStatus,err){
        console.log(xhr);
        console.log(textStatus);
        console.log(err);
      }
   
  });
});


