import React from 'react'
import classNames from 'classnames'
function CategoriesItem({ children , active , dataFilter}) {
    return (
        <button class={classNames("stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5",{"how-active1" : active})} data-filter={dataFilter}>
        {children}
        </button>
    )
}

export default CategoriesItem
