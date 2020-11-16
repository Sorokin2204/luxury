import React from 'react'

function SocialItem({toolTip,iconClass,href,}) {
    return (
        <a
                          href={href}
                          class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                          data-tooltip={toolTip}>
                          <i class={iconClass}></i>
                        </a>
    )
}

export default SocialItem
