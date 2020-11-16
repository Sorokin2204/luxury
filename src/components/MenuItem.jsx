import React from 'react'

function MenuItem({ url , children , label}) {
    return (
        <li className={label} data-label1={label}>
        <a href={url}>{children}</a>
    </li>
    )
}

export default MenuItem
