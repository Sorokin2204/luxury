import React from 'react'

function TagItem(props) {
    return (
                    <a href="#" class="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                     {props.children}
    </a>
    )
}

export default TagItem
