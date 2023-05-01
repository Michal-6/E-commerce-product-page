var amount = 0;
function changeAmount(increment){
    if(amount >= 1){amount += increment;}
    else if(increment != -1){amount ++;}

    document.getElementById('amount').innerHTML = amount;
}

var cart = document.getElementById('cart_space');
var p_d = document.getElementById('bf_amount');
var products = 0; var dis_amount = 0;
function addToCart(product, ppu, img){
    if(amount != 0){
        if(products == 0){cart.innerHTML = "";}
        dis_amount += amount; 
        p_d.innerHTML = dis_amount;
        //p_d.style.opacity = '0';
        if(dis_amount > 0){p_d.style.opacity = '1';}
        cart.innerHTML = `
        <div class="product_wrap">
            <img class="p_thumbnail" src="${img}" alt="thumbnail">
            <div class="p_description">
                <span class="p_name">${product}</span>
                <div class="p_price">
                    <span class="p_ppu">${'$' + ppu}</span>
                    <span class="p_amount">${'x ' + dis_amount}</span>
                    <span class="p_total">${'$' + (ppu*amount).toFixed(2)}</span>
                </div>
            </div>
            <img class="p_delete" onclick="removeFromCart(this);" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="checkout_button">Checkout</button>`;
    }
    amount = 0; document.getElementById('amount').innerHTML = amount;
    products ++;
}

function removeFromCart(_this){
    products = 0; dis_amount = 0;
    p_d.innerHTML = dis_amount;
    _this.parentElement.remove();
    if(products == 0){cart.innerHTML=""; cart.innerHTML = "Your cart is empty."; p_d.style.opacity = '0';}
}

function dark(){
    document.body.style.backgroundColor = "hsl(0, 0%, 0%, 50%)";
    document.getElementById('cart').classList.remove('cart_active'); document.getElementById('cart').classList.add('cart_inactive');
    //document.getElementById('_nav').style.filter = "brightness(50%)";
    document.getElementById('_section').style.filter = "brightness(50%)";
}

function light(){
    document.body.style.backgroundColor = "var(--white)";
    //document.getElementById('_nav').style.filter = "brightness(100%)";
    document.getElementById('_section').style.filter = "brightness(100%)";
}

var index = 0;
function select(_index){
    index = _index;
}

let thmb = document.querySelectorAll('#lb_images_preview > img');
function gallery(increment, m_img){
    const img_src = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];
    index += increment;
    if(index < 0){index = 3}
    if(index > 3){index = 0}
    document.getElementById(m_img).src=img_src[index];
    thmb.forEach(img => {img.classList.remove('active');});
    thmb[index].classList.add('active'); 
}