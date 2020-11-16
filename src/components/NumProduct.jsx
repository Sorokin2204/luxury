import React from 'react'
import classNames from 'classnames'
function NumProduct({className}) {
    return (
        <div class={classNames('wrap-num-product flex-w',className)}>
        <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
            <i class="fs-16 zmdi zmdi-minus"></i>
        </div>

        <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1"/>

        <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
            <i class="fs-16 zmdi zmdi-plus"></i>
        </div>
    </div>
    )
}

export default NumProduct
