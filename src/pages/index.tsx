import Image from "next/image";
import Hero from "@/components/Hero"
import Newproducts from "@/components/Newproducts"
import Product from "@/components/Product"
import Featuredproduct from "@/components/Featuredproduct"


export default function Home() {
 
  
  return (
    <main >
      <Hero/>
      <Product/>
      <Newproducts/>
      <Featuredproduct/>
    </main>
  );
}
