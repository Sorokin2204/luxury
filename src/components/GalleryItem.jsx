import React from 'react'


function GalleryItem({ srcImage}) {
    return (
        <div
        class="item-slick3"
        data-thumb={
          srcImage
        }>
        <div class="wrap-pic-w pos-relative">
          <img
            src={srcImage}
            alt="IMG-PRODUCT"
          />

          <a
            class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
            href={
                srcImage
            }>
            <i class="fa fa-expand"></i>
          </a>
        </div>
      </div>
    )
}

export default GalleryItem
