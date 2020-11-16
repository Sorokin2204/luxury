import React from 'react'
import MenuItem from './MenuItem'
import classNames from 'classnames'

function Menu({ mobile , menuItem ,}) {
    console.log(menuItem)
    return (
      
	    <ul class={`main-menu${mobile ? '-m' : ''}`}>
      {
          menuItem.map((item) => 
         ( <li className ={classNames({'active-menu' : item.active},{'label1' : (item.label && !mobile)})} data-label1={(item.label && !mobile) ? item.label : ''}>
        
        <a className ={classNames({'label1 rs1' : (mobile && item.label)} )}data-label1={(item.label && mobile) ? item.label : ''} href={item.url}>{item.name}</a>
        {
        (item.subItems) ? (<ul class={`sub-menu${mobile ? '-m' : ''}`}>
         {item.subItems.map((item) => 
         ( <li >
        
        <a href={item.url}>{item.name}</a>
        </li>))}

        </ul> ) : null
}
        { (item.subItems && mobile) ? <span class="arrow-main-menu-m">
     <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span> : null
        }
        </li>))
        
        
        }
        </ul>

    );

}

export default Menu

           {/* (item.subMenu ) ? { 
   <ul class={`sub-menu${mobile ? '-m' : ''}`}>  
   {
        item.subMenu.map((itemSub) => (
            <li className ={classNames({'label1' : itemSub.label} )} data-label1={itemSub.label}>
            <a href={itemSub.url}>{itemSub.name}</a>
            </li>
        ))
   }   
   </ul>
}  
            
                */}



    {/* if(item.mobile){ 
        <span class="arrow-main-menu-m">
        <i class="fa fa-angle-right" aria-hidden="true"></i>
    </span>
} */}
            


//               if (item.subMenu) { 
//                 <ul class={`sub-menu${mobile ? '-m' : ''}`}>
//  {
//      menuItem.subMenu.forEach((itemSub) =>  {
//          <li  className ={classNames({'label1 rs1' : menuItem.label} )} data-label={menuItem.label}>
//           <a href={itemSub.url}>{itemSub.name}</a>   
//          </li>
        
//      })
//  }
//  </ul>
 
//      if (mobile) { 

//      }
 
//         } else  
        
           
        
          
 


						// 	<li class="active-menu">
						// 		<a href="index.html">Home</a>
						// 		<ul class={`sub-menu${mobile ? '-m' : ''}`}>
						// 			<li><a href="index.html">Homepage 1</a></li>
						// 			<li><a href="home-02.html">Homepage 2</a></li>
						// 			<li><a href="home-03.html">Homepage 3</a></li>
						// 		</ul>
						// 	</li>

						// 	<li>
						// 		<a href="product.html">Shop</a>
						// 	</li>

						// 	<li class="label1" data-label1="hot">
						// 		<a href="shoping-cart.html">Features</a>
						// 	</li>

						// 	<li>
						// 		<a href="blog.html">Blog</a>
						// 	</li>

						// 	<li>
						// 		<a href="about.html">About</a>
						// 	</li>

						// <MenuItem url='contact.html' >Contact</MenuItem>
						
					  

