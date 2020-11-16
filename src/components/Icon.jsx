import React from 'react'
import classNames from 'classnames'

function Icon({ iconName , className , dataNotify}) {
    return (
        <div  class={`icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 ${className}`} data-notify={dataNotify} >
        <i class={`zmdi ${iconName}`} ></i>
    </div>
    )
}

export default Icon
