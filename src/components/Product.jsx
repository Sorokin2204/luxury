import React , { Component } from 'react'
import Button from './Button'
import CartItem from './CartItem'
import Categories from './Categories'
import CategoriesItem from './CategoriesItem'
import Filter from './Filter'
import FilterItem from './FilterItem'
import TagItem from './TagItem'
import { importAll } from '../pages';

export class Product extends Component {
  constructor() {
    super();
    this.images = importAll(
      require.context('../images', true, /\.(png|jpe?g|svg)$/),
    );
    console.log(this.images);
  }

  componentDidMount() {
    
  } 

  render() {
    return (
        <section class="bg0 p-t-23 p-b-140">
        <div class="container">
          <div class="p-b-10">
            <h3 class="ltext-103 cl5">Product Overview</h3>
          </div>

          <div class="flex-w flex-sb-m p-b-52">
            <Categories>
              <CategoriesItem active dataFilter="*">
                All Products
              </CategoriesItem>
              <CategoriesItem dataFilter=".women">Women</CategoriesItem>
              <CategoriesItem dataFilter=".men">Men</CategoriesItem>
              <CategoriesItem dataFilter=".bag">Bag</CategoriesItem>
              <CategoriesItem dataFilter=".shoes">Shoes</CategoriesItem>
              <CategoriesItem dataFilter=".watches">Watches</CategoriesItem>
            </Categories>

                     <div class="flex-w flex-c-m m-tb-10">
                  <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Filter
              </div>

              <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                Search
              </div>
            </div>

            {/* Search product */}
            <div class="dis-none panel-search w-full p-t-10 p-b-15">
              <div class="bor8 dis-flex p-l-15">
                <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i class="zmdi zmdi-search"></i>
                </button>

                <input
                  class="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>

            {/* Filter */}
            <div class="dis-none panel-filter w-full p-t-10">
              <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div class="filter-col1 p-r-15 p-b-27">
                  <Filter name="Sort By" type="text">
                    <FilterItem>Default</FilterItem>
                    <FilterItem>Popularity</FilterItem>
                    <FilterItem active>Average rating</FilterItem>
                    <FilterItem>Newnesssssssss</FilterItem>
                    <FilterItem>Price: Low to High</FilterItem>
                    <FilterItem>Price: High to Low</FilterItem>
                  </Filter>
                </div>

                <div class="filter-col2 p-r-15 p-b-27">
                  <Filter name="Price" type="text">
                    <FilterItem>All</FilterItem>
                    <FilterItem>$0.00 - $50.00</FilterItem>
                    <FilterItem active> $50.00 - $100.00</FilterItem>
                    <FilterItem>$100.00 - $150.00</FilterItem>
                    <FilterItem>$150.00 - $200.00</FilterItem>
                    <FilterItem>$200.00+</FilterItem>
                  </Filter>
                </div>

                <div class="filter-col3 p-r-15 p-b-27">
                  <Filter name='Color' unorder>
                  <FilterItem active color='#090'>Pink</FilterItem>
                  <FilterItem color='#4272d7'>Blue</FilterItem>
                  <FilterItem color='#b3b3b3'>Grey</FilterItem>
                  <FilterItem color='#fa4251'>Red</FilterItem>
                  </Filter>
                </div>

                <div class="filter-col4 p-b-27">
                  <Filter name="Tags" unorder>
                    <TagItem type="tag">Fashion</TagItem>
                    <TagItem type="tag">Lifestyle</TagItem>
                    <TagItem type="tag">Denim</TagItem>
                    <TagItem type="tag">Streetstyle</TagItem>
                    <TagItem type="tag">Crafts</TagItem>
                    <TagItem type="tag">Fashion</TagItem>
                  </Filter>
                </div>
              </div>
            </div>
          </div>

          <div class="row isotope-grid">
            <CartItem
              srcImage={this.images['product-01.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-02.jpg'].default}
              name="Herschel supply"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-03.jpg'].default}
              name="	Only Check Trouser"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-04.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-05.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-06.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-07.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-08.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-09.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-10.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-11.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-12.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-13.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-14.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-15.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
            <CartItem
              srcImage={this.images['product-16.jpg'].default}
              name="Esprit Ruffle Shirt"
              price="$16.64"
              srcProduct="product-detail.html"
              sortData="women"
            />
          </div>

          {/* Load more */}
          <div class="flex-c-m flex-w w-full p-t-45">
     <Button href='#' type='gray'>Load </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Product
