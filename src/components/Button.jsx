import React from 'react'
import classNames from 'classnames'

function Button(props) {
    const className = typeButton(props.type);
     
    
    
    if(props.href) 
  {  return (
        <a href={props.href} className={classNames(className,props.class)}>
            {props.children}
        </a>
    )}
    else
   { return (
        <button className={classNames(className,props.class)}>
            {props.children}
        </button>
    )}
}

function typeButton(type) {
    switch (type) {
        case 'black':
            return ('flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10');
        case 'primary':
            return ('flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04');
        case 'white':
            return ('flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04');
        case 'gray':
            return ('flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04');
            default:
            break;
    }
}

export default Button
