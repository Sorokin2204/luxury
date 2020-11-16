import React from 'react'
import PreviewShopCartItem from './PreviewShopCartItem'
import item1 from '../images/item-cart-01.jpg'
import Button from './Button'


function PreviewShopCart() {
    return (
        <div class="wrap-header-cart js-panel-cart">
        <div class="s-full js-hide-cart"></div>

        <div class="header-cart flex-col-l p-l-65 p-r-25">
          <div class="header-cart-title flex-w flex-sb-m p-b-8">
            <span class="mtext-103 cl2">Your Cart</span>

            <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i class="zmdi zmdi-close"></i>
            </div>
          </div>

          <div class="header-cart-content flex-w js-pscroll">
            <ul class="header-cart-wrapitem w-full">
              <PreviewShopCartItem name='Converse All Star' srcImage={item1} price='1 x $19.00'/>  
              <PreviewShopCartItem name='Converse All Star' srcImage={item1} price='1 x $17.00'/>  
              <PreviewShopCartItem name='Nixon Porter' srcImage={item1} price='1 x $199.00'/>  
            </ul>

            <div class="w-full">
              <div class="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>

              <div class="header-cart-buttons flex-w w-full">
                <Button href="shoping-cart.html" type='black'
                  class="m-r-8">View Cart</Button>

                  <Button href="shoping-cart.html" type='black'
                  class="">Check Out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PreviewShopCart
