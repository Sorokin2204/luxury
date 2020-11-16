import React from 'react'
import Icon from './Icon'
import Logo from './Logo'
import Menu from './Menu'
import logo from '../images/icons/logo-01.png'
import close2 from '../images/icons/icon-close2.png'



function Header() {
    return (
        <header>
          {/* Header desktop */}
          <div class="container-menu-desktop">
            <div class="wrap-menu-desktop">
              <nav class="limiter-menu-desktop container">
                <Logo image={logo} />

                {/* <Menu menuItem={ [{name:'Home' , subMenu:[{name: 'Homepage 1'},{name: 'Homepage 2'},{name: 'Homepage 3'}], label:'top',active:true},{name:'Contact' ,  label:'123'}]  }/> */}

                <Menu
                  menuItem={[
                    { name: 'Home', label: 'top', url: '#', subItems:[{ name: 'Hello', url:'#'},{ name: 'World', url:'#'}] },
                    { name: 'Features', label: 'for', url: '#' },
                    { name: 'Contact', active: true, url: '#' },
                  ]}></Menu>

                {/* Icon header */}
                <div class="wrap-icon-header flex-w flex-r-m">
                  <Icon
                    iconName="zmdi-search"
                    className="js-show-modal-search"
                  />

                  <Icon
                    iconName="zmdi-shopping-cart"
                    className="icon-header-noti js-show-cart"
                    dataNotify="2"
                  />

                  <Icon
                    iconName="zmdi-favorite-outline"
                    className="icon-header-noti"
                    dataNotify="10"
                  />
                </div>
              </nav>
            </div>
          </div>

          {/* Header Mobile */}
          <div class="wrap-header-mobile">
            {/* Logo moblie */}
            <div class="logo-mobile">
              <Logo image={logo} />
            </div>

            {/* Icon header */}
            <div class="wrap-icon-header flex-w flex-r-m m-r-15">
              <Icon iconName="zmdi-search" className="js-show-modal-search" />

              <Icon
                iconName="zmdi-shopping-cart"
                className="icon-header-noti js-show-cart"
                dataNotify="2"
              />

              <Icon
                iconName="zmdi-favorite-outline"
                className="icon-header-noti"
                dataNotify="10"
              />
            </div>

            {/* Button show menu */}
            <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </div>
          </div>

          {/* Menu Mobile */}
          <div class="menu-mobile">
          <Menu mobile
                  menuItem={[
                    { name: 'Home', label: 'top', url: '#', subItems:[{ name: 'Hello', url:'#'},{ name: 'World', url:'#'}] },
                    { name: 'Features', label: 'for', url: '#' },
                    { name: 'Contact', active: true, url: '#' },
                  ]}></Menu>
          </div>

          {/* Modal Search 
          */}
          <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
            <div class="container-search-header">
              <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                <img
                  src={close2}
                  alt="CLOSE"
                />
              </button>

              <form class="wrap-search-header flex-w p-l-15">
                <button class="flex-c-m trans-04">
                  <i class="zmdi zmdi-search"></i>
                </button>
                <input
                  class="plh3"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
        </header>
    )
}

export default Header
