import React from 'react'
import heart1 from '../images/icons/icon-heart-01.png'
import heart2 from '../images/icons/icon-heart-02.png'
import Button from './Button'

function CartItem({ srcImage ,name , price , srcProduct ,sortData }) {
    return (
        <div class={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${sortData}`}>
        {/* Block2 */}
        <div class="block2">
            <div class="block2-pic hov-img0">
                <img src={srcImage} alt="IMG-PRODUCT"/>
                <Button href="#" type='white' class="block2-btn js-show-modal1">View</Button>
            </div>

            <div class="block2-txt flex-w flex-t p-t-14">
                <div class="block2-txt-child1 flex-col-l ">
                    <a href={srcProduct} class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                        {name}
                    </a>

                    <span class="stext-105 cl3">
                       {price}
                    </span>
                </div>

                <div class="block2-txt-child2 flex-r p-t-3">
                    <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                        <img class="icon-heart1 dis-block trans-04" src={heart1} alt="ICON"/>
                        <img class="icon-heart2 dis-block trans-04 ab-t-l" src={heart2} alt="ICON"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CartItem
