import React from 'react'
import Button from './Button'
import Gallery from './Gallery'
import GalleryItem from './GalleryItem'
import NumProduct from './NumProduct'
import Select from './Select'
import Social from './Social'
import SocialItem from './SocialItem'
import prod from '../images/product-detail-01.jpg'
import close from '../images/icons/icon-close.png'

function QuickView() {
    return (
        <div class="wrap-modal1 js-modal1 p-t-60 p-b-20">
        <div class="overlay-modal1 js-hide-modal1"></div>

        <div class="container">
          <div class="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button class="how-pos3 hov3 trans-04 js-hide-modal1">
              <img
                src={close}
                alt="CLOSE"
              />
            </button>

            <div class="row">
              <div class="col-md-6 col-lg-7 p-b-30">
                <div class="p-l-25 p-r-30 p-lr-0-lg">
                  <div class="wrap-slick3 flex-sb flex-w">
                    <div class="wrap-slick3-dots"></div>
                    <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

<Gallery>
<GalleryItem srcImage={prod}/>
<GalleryItem srcImage={prod}/>
<GalleryItem srcImage={prod}/>

</Gallery>

                      
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-5 p-b-30">
                <div class="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>

                  <span class="mtext-106 cl2">$58.79</span>

                  <p class="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae
                    luctus ligula. Mauris consequat ornare feugiat.
                  </p>

                  {/*  */}
                  <div class="p-t-33">
                    <div class="flex-w flex-r-m p-b-10">
                      <div class="size-203 flex-c-m respon6">Size</div>

                      <Select/>
                    </div>

                    <div class="flex-w flex-r-m p-b-10">
                      <div class="size-203 flex-c-m respon6">Color</div>

                      <Select/>
                    </div>

                    <div class="flex-w flex-r-m p-b-10">
                      <div class="size-204 flex-w flex-m respon6-next">
                        <NumProduct className='m-r-20 m-tb-10'/>
                        <Button type='primary' class='js-addcart-detail'>Add</Button>
                   
                      </div>
                    </div>
                  </div>

                  {/*  */}
                  <Social>
                    <SocialItem toolTip='Facebook' iconClass='fa fa-facebook' href='#'/>
                    <SocialItem toolTip='Twitter' iconClass='fa fa-twitter' href='#'/>
                    <SocialItem toolTip='Google Plus' iconClass='fa fa-google-plus' href='#'/>
                  </Social>
                 
                    {/* <div class="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist">
                        <i class="zmdi zmdi-favorite"></i>
                      </a>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default QuickView
