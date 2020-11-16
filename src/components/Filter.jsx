import React from 'react'

function Filter(props) {
    return (
        <div>
            <div class="mtext-102 cl2 p-b-15">
								{props.name}
							</div>
                            {
                      (props.unorder) ?  <div class="flex-w p-t-4 m-r--5">{props.children}</div> 
                      : 
                    
                      <ul> 
                          {
                        React.Children.map(props.children,(child,i) => {
                            return (<li class="p-b-6">{child}</li>)
                        })}
                          
                    </ul>
                            }
                          
            
        </div>
    )
}

export default Filter
