import React from 'react'

function PreviewShopCartItem(props) {
    return (
        <li class="header-cart-item flex-w flex-t m-b-12">
        <div class="header-cart-item-img">
          <img
            src={props.srcImage}
            alt="IMG"
          />
        </div>

        <div class="header-cart-item-txt p-t-8">
          <a
            href="#"
            class="header-cart-item-name m-b-18 hov-cl1 trans-04">
            {props.name}
          </a>

    <span class="header-cart-item-info">{props.price}</span>
        </div>
      </li>
    )
}

export default PreviewShopCartItem
