import React, { Children, Component } from 'react';
import { importAll, RunPlugins } from '.';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Icon from '../components/Icon';
import MenuItem from '../components/MenuItem';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import CategoriesItem from '../components/CategoriesItem';
import CartItem from '../components/CartItem';
import Filter from '../components/Filter';
import FilterItem from '../components/FilterItem';
import TagItem from '../components/TagItem';
import Footer from '../components/Footer'
import Button from '../components/Button';
import PreviewShopCartItem from '../components/PreviewShopCartItem';
import PreviewShopCart from '../components/PreviewShopCart';
import Gallery from '../components/Gallery';
import GalleryItem from '../components/GalleryItem';
import BackToTop from '../components/BackToTop';
import Social from '../components/Social';
import SocialItem from '../components/SocialItem';
import NumProduct from '../components/NumProduct';
import Select from '../components/Select';
import QuickView from '../components/QuickView';
import Header from '../components/Header';
import Product from '../components/Product';


// import './js/main'
// import popper from './vendor/bootstrap/js/popper.js'
// import bootstrap from './vendor/bootstrap/js/bootstrap.min.js'

export class Home extends Component {
  constructor() {
    super();
    this.images = importAll(
      require.context('../images', true, /\.(png|jpe?g|svg)$/),
    );
    console.log(this.images);
  }

  componentDidMount() {
    RunPlugins();
  } 

  render() {
    return (
      <div>
        <Header/>

        {/* Cart */}
      <PreviewShopCart/>

        {/* Slider */}
        <section class="section-slide">
          <div class="wrap-slick1">
            <div class="slick1">
              <div
                class="item-slick1"
                style={{
                  backgroundImage: `url(${this.images['slide-01.jpg'].default})`,
                }}>
                <div class="container h-full">
                  <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="fadeInDown"
                      data-delay="0">
                      <span class="ltext-101 cl2 respon2">
                        Women Collection 2018
                      </span>
                    </div>

                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="fadeInUp"
                      data-delay="800">
                      <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        NEW SEASON
                      </h2>
                    </div>

                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="zoomIn"
                      data-delay="1600">
                        <Button href="product.html" type='primary'>Shop</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="item-slick1"
                style={{
                  backgroundImage: `url(${this.images['slide-02.jpg'].default})`,
                }}>
                <div class="container h-full">
                  <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="rollIn"
                      data-delay="0">
                      <span class="ltext-101 cl2 respon2">Men New-Season</span>
                    </div>

                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="lightSpeedIn"
                      data-delay="800">
                      <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        Jackets & Coats
                      </h2>
                    </div>

                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="slideInUp"
                      data-delay="1600">
                   <Button href="product.html" type='primary'>Shop</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="item-slick1"
                style={{
                  backgroundImage: `url(${this.images['slide-03.jpg'].default})`,
                }}>
                <div class="container h-full">
                  <div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="rotateInDownLeft"
                      data-delay="0">
                      <span class="ltext-101 cl2 respon2">
                        Men Collection 2018
                      </span>
                    </div>

                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="rotateInUpRight"
                      data-delay="800">
                      <h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        New arrivals
                      </h2>
                    </div>

                    <div
                      class="layer-slick1 animated visible-false"
                      data-appear="rotateIn"
                      data-delay="1600">
                      <Button href="product.html" type='primary'>Shop</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner */}
        <div class="sec-banner bg0 p-t-80 p-b-50">
          <div class="container">
            <div class="row">
              <Banner
                title="Woman"
                subtitle="Spring 2018"
                srcImage={this.images['banner-01.jpg'].default}
                buttonName="Shop Now"></Banner>
              <Banner
                title="Men"
                subtitle="Spring 2018"
                srcImage={this.images['banner-02.jpg'].default}
                buttonName="Shop Now"></Banner>
              <Banner
                title="Accessories"
                subtitle="New Trand"
                srcImage={this.images['banner-03.jpg'].default}
                buttonName="Shop Now"></Banner>
              <Banner
                title="Woman"
                subtitle="Spring 2018"
                srcImage={this.images['banner-01.jpg'].default}
                buttonName="Shop Now"></Banner>
              <Banner
                title="Men"
                subtitle="Spring 2018"
                srcImage={this.images['banner-02.jpg'].default}
                buttonName="Shop Now"></Banner>
              <Banner
                  title="Accessories"
                subtitle="New Trand"
                srcImage={this.images['banner-03.jpg'].default}
                buttonName="Shop Now"></Banner>
            </div>
          </div>
        </div>

        {/* Product */}
        <Product/>

        {/* Footer */}
        <Footer/>

        {/* Back to top */}
      <BackToTop/>

        {/* Modal1 */}
       <QuickView/>
      </div>
    );
  }
}

export default Home;
