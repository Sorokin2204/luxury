import React, { Component } from 'react'

export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    
    document.body.appendChild(script);
}

export default appendScript
