import React from 'react'
import classNames from 'classnames'
function FilterItem(props) {
    return (
        
	<div >
			{
				props.color ? <span
				class="fs-15 lh-12 m-r-6"
			style={{ color: `${props.color}` }}>
			<i class="zmdi zmdi-circle"></i>
		  </span> : null
			}
										<a href="#" className={classNames("filter-link stext-106 trans-04",{"filter-link-active" : props.active})}>
											{props.children}
										</a>
									
	</div>
    )
}


export default FilterItem
