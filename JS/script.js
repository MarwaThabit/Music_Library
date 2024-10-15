var my_shopping_cart = document.querySelector("#my_cart");
var btns = document.querySelectorAll(".add-to-cart");
var products = document.querySelectorAll("figure");
var show_price = document.querySelector("#show_price");
var span = document.querySelector(".number_of_items");
var cart_Area = document.querySelector(".cart");
var cart_icon = document.querySelector(".fa-cart-shopping");
var price_text = document.querySelector("#price");        
var hr = document.querySelector(".cart hr");        
var close = document.querySelector(".message i:nth-child(3)");
var message = document.querySelector(".message ");
var total_price = 0;
var number_of_items = 0;

function updateCart(item) {
    var img = item.querySelector("img");
    var header = item.querySelector("figcaption h4");
    var price = item.querySelector("figcaption .price");
    var priceUnit = item.querySelector("figcaption p bdi");

    my_shopping_cart.innerHTML +=
        '<figure style=" height:100%;display: flex; padding: 13px; border: 1px solid rgba(0, 0, 0, 0.2); border-radius: 13px; margin-bottom: 55px; box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05); background:transparent">' +
            '<img src="' + img.src + '" alt="' + img.alt + '" width="100px" style="height:140px;" />' +
            '<figcaption style="padding: 26px 0 0 8px;">' +
                '<h4 style="font-size: 17px;">' + header.textContent + '</h4>' +
                '<p><bdi>' + priceUnit.textContent + '</bdi> ' +
                '<span class="price" style="font-size:15px; padding-inline:12px; margin-left:3px;">' + price.textContent + '</span></p>' +
            '</figcaption>' +
        '</figure>';

    total_price += +(price.textContent); 
    
    if(my_shopping_cart.innerHTML != ""){
        cart_Area.style.backgroundColor="rgb(242, 239, 241)";
        cart_Area.style.border="1px solid rgba(0,0,0,0.2)";
        span.textContent = ++number_of_items;
        show_price.style.display = "block";
        show_price.style.backgroundColor = " rgb(69, 69, 173)";
        show_price.style.color = " white";
        show_price.style.width = " 100%";
        show_price.style.height = " 50px";
        show_price.style.cursor = " pointer";
        my_shopping_cart.style.padding="20px 24px 0";
    }
    
}

show_price.onclick = function() {
    hr.style.height="3px";
    price_text.innerHTML='Total Price : ' +
    '<span style="color: green; background-color: transparent; font-size: 20px; font-weight: 600; letter-spacing: 3px;">'+'<bdi> ج.م</bdi> ' + total_price + '</span></p>';
}

cart_icon.onclick = function(event) {
    if (event.target == cart_icon) {
        if (cart_Area.style.display == "block") {
            cart_Area.style.display = "none";
        } else {
            cart_Area.style.display = "block";
        }
    }
}

products.forEach(function(item, index) {
    var btn = btns[index];
    btn.onclick = function() {
        updateCart(item, index);
        message.style.display="flex";
        message.style.justifyContent="space-between";
        message.style.alignItems= "center";
    };
});

close.onclick=function(){
    message.style.display="none"
}