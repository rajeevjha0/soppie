import Image from "next/image"
import Link from 'next/link'


export default function Footer (){
    return(
        <footer className="pt-24 pb-12 bg-gray-200">
        <div className="wide container mx-auto">
          <div className="flex flex-wrap">
            <div className="footer-single-widget mb-12 col flex-1">
              <div className="logo mb-9">
              <div className="font-bold text-4xl text-center pb-4 sm:pd-0 text-blackish">Soppie</div>
              </div>
              <div className="footer-single-widget__copyright">
                © 2024 
                <Link href="https://www.hasthemes.com" legacyBehavior>
                  <a target="_blank">lezada</a>
                </Link>
                <span>All Rights Reserved</span>
              </div>
            </div>
            <div className="footer-single-widget mb-12 col flex-1">
              <h5 className="footer-single-widget__title">ABOUT</h5>
              <nav className="footer-single-widget__nav">
                <ul>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Store location</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Orders tracking</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-single-widget mb-12 col flex-1">
              <h5 className="footer-single-widget__title">USEFUL LINKS</h5>
              <nav className="footer-single-widget__nav">
                <ul>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Returns</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Support Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>Size guide</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" legacyBehavior>
                      <a>FAQs</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-single-widget mb-12 col flex-1">
              <h5 className="footer-single-widget__title">FOLLOW US ON</h5>
              <nav className="footer-single-widget__nav footer-single-widget__nav--social">
                <ul>
                  <li>
                    <Link href="https://www.twitter.com" legacyBehavior>
                      <a>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg> Twitter
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com" legacyBehavior>
                      <a>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg> Facebook
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com" legacyBehavior>
                      <a>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.6-9 132.1z"></path>
                        </svg> Instagram
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.youtube.com" legacyBehavior>
                      <a>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M549.655 124.083c-6.281-23.64-24.764-42.399-48.27-48.701C457.157 64 288 64 288 64S118.843 64 74.614 75.382c-23.475 6.302-41.989 25.061-48.27 48.701C16 168.631 16 256 16 256s0 87.369 10.344 131.917c6.281 23.64 24.764 42.399 48.27 48.701C118.843 448 288 448 288 448s169.157 0 213.386-11.382c23.475-6.302 41.989-25.061 48.27-48.701C560 343.369 560 256 560 256s0-87.369-10.345-131.917zM232 336V176l142.857 80L232 336z"></path>
                        </svg> YouTube
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )
}