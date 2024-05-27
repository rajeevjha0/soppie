import Image from "next/image";
import Hero from "@/components/Hero"
import Newproducts from "@/components/Newproducts"
import Product from "@/components/Product"
import Featuredproduct from "@/components/Featuredproduct"
import Swipeslider from "@/components/Swipeslider"


export default function Home() {
 
  
  return (
    <main >
      <Hero/>
      <Product/>
      <Newproducts/>
      <Swipeslider/>
      <Featuredproduct/>
    </main>
  );
}
