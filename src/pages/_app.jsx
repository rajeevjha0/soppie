import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.className}`}>
    <Component {...pageProps} />
  </main>
);
}
