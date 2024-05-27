import Image from "next/image"
import Link from 'next/link'


export default function Product (){
    return(
        <div>
     <div className="category-banner-area pt-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-30 pr-[15px]">
            <div className="category-banner-single relative">
              <div className="category-banner-img">
                <Image
                  alt="banner-img"
                  loading="lazy"
                  width={510}
                  height={630}
                  decoding="async"
                  src="/Images/category-banner1.jpg"
                  style={{ color: 'transparent', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="category-banner-inner">
                <div className="category-banner-content">
                  <Link legacyBehavior href="/shop-sidebar-5-column">
                    <a className="product-category">Man</a>
                  </Link>
                  <p className="category-short-desc">Fashion Collection - 2022</p>
                  <Link legacyBehavior href="/shop-sidebar-5-column">
                    <a className="border-btn border rounded border-[#000] hover:bg-black hover:text-white px-3 py-2">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 order-xl-2 mb-30 pr-[15px]">
            <div className="flex flex-wrap">
              <div className="col-xl-12 col-lg-6 col-md-6 mb-30">
                <div className="category-banner-single relative mb-[23px]">
                  <div className="category-banner-img">
                    <Image
                      alt="banner-img"
                      loading="lazy"
                      width={510}
                      height={300}
                      decoding="async"
                      src="/Images/category-banner2.jpg"
                      style={{ color: 'transparent', width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="category-banner-inner flex items-end">
                    <div className="category-banner-content">
                      <Link legacyBehavior href="/shop-sidebar-5-column">
                        <a className="product-category">Kids Collection</a>
                      </Link>
                      <p className="category-short-desc">Trending - 2022</p>
                      <Link legacyBehavior href="/shop-sidebar-5-column">
                        <a className="border-btn border rounded border-[#000] hover:bg-black hover:text-white px-3 py-2">Shop Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-6 col-md-6">
                <div className="category-banner-single relative">
                  <div className="category-banner-img">
                    <Image
                      alt="banner-img"
                      loading="lazy"
                      width={510}
                      height={300}
                      decoding="async"
                      src="/Images/category-banner3.jpg"
                      style={{ color: 'transparent', width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="category-banner-inner flex justify-end">
                    <div className="category-banner-content">
                      <Link legacyBehavior href="/shop-sidebar-5-column">
                        <a className="product-category">Cosmetics</a>
                      </Link>
                      <p className="category-short-desc">Fashion Collection - 2022</p>
                      <Link legacyBehavior href="/shop-sidebar-5-column">
                        <a className="border-btn border rounded border-[#000] hover:bg-black hover:text-white px-3 py-2">Shop Now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 order-xl-3 mb-30 pr-[15px]">
            <div className="category-banner-single relative">
              <div className="category-banner-img">
                <Image
                  alt="banner-img"
                  loading="lazy"
                  width={510}
                  height={630}
                  decoding="async"
                  src="/Images/category-banner4.jpg"
                  style={{ color: 'transparent', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="category-banner-inner">
                <div className="category-banner-content">
                  <Link legacyBehavior href="/shop-sidebar-5-column">
                    <a className="product-category">Women</a>
                  </Link>
                  <p className="category-short-desc">Winter Collection - 2022</p>
                  <Link legacyBehavior href="/shop-sidebar-5-column">
                    <a className="border-btn border rounded border-[#000] hover:bg-black hover:text-white px-3 py-2">Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
        </div>
    )
}