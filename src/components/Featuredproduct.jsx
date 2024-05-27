import Image from 'next/image';

const ProductCategorySlider = () => {
  return (
    <div className="product-category-slider-container space-mb--r100">
      <div className="wide container">
        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-wrap">
              <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight swiper-watch-progress swiper-backface-hidden">
                <div className="swiper-wrapper" id="swiper-wrapper-d9e8c8d12adec46e" aria-live="polite">
                  <div className="swiper-slide single-category single-category--two swiper-slide-visible swiper-slide-active" role="group" aria-label="1 / 5">
                    <div className="single-category__image single-category__image--two">
                      <Image src="/assets/images/category/men.jpg" alt="" width={409.333} height={279} />
                    </div>
                    <div className="single-category__content single-category__content--two space-mt--25">
                      <div className="title">
                        <a href="/shop/left-sidebar">Men</a>
                      </div>
                      <p className="product-count">12</p>
                    </div>
                    <a className="banner-link" href="/shop/left-sidebar"></a>
                  </div>
                  {/* Repeat other swiper-slide elements */}
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
              <button type="button" className="swiper-button-prev ht-swiper-button-nav prev-category-swiper swiper-button-disabled" disabled="" tabIndex={-1} aria-label="Previous slide" aria-controls="swiper-wrapper-d9e8c8d12adec46e" aria-disabled="true">
                {/* Previous slide icon */}
              </button>
              <button type="button" className="swiper-button-next ht-swiper-button-nav next-category-swiper" tabIndex={0} aria-label="Next slide" aria-controls="swiper-wrapper-d9e8c8d12adec46e" aria-disabled="false">
                {/* Next slide icon */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategorySlider;
