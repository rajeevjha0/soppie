import Image from "next/image";
import Hero from "@/components/Hero"
import Newproducts from "@/components/Newproducts"
import Product from "@/components/Product"


export default function Home() {
 
  
  return (
    <main >
      <Hero/>
      <Product/>
      <Newproducts/>
    </main>
  );
}
