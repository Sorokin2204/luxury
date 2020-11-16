import React from 'react'

function Logo(props) {
    return (
        <div>
             {/* Logo desktop */}		
        <a href="#" class="logo">
            <img src={props.image} alt="IMG-LOGO"/>
        </a>
        </div>
    )
}

export default Logo
