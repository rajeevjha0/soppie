import React from "react";
import ProductCard from "@/components/ProductCard"; // Changed from Productcard to ProductCard

export default function ProductList() { // Added a function name "ProductList"
    const products = [
        {
            img: "/Images/jacket-1.jpg",
            title: "Sports",
            desc: "Trekking & Running Shoes - Black",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/Images/skirt-1.jpg",
            title: "Skirts",
            desc: "Trekking & Running Shoes - Black",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/Images/jacket-1.jpg",
            title: "Sports",
            desc: "Trekking & Running Shoes - Black",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/Images/skirt-1.jpg",
            title: "Skirts",
            desc: "Trekking & Running Shoes - Black",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/Images/watch-2.jpg",
            title: "Watch",
            desc: "Trekking & Running Shoes - Black",
            rating: 3,
            price: "58.00",
        },
        {
            img: "/Images/skirt-1.jpg",
            title: "Skirts",
            desc: "Trekking & Running Shoes - Black",
            rating: 4,
            price: "58.00",
        },
        {
            img: "/Images/skirt-1.jpg",
            title: "Skirts",
            desc: "Trekking & Running Shoes - Black",
            rating: 5,
            price: "58.00",
        },
        {
            img: "/Images/skirt-1.jpg",
            title: "Skirts",
            desc: "Trekking & Running Shoes - Black",
            rating: 3,
            price: "58.00",
        },
        
    ];

    return (
        <div className="container pb-[80px] px-[30px] mx-auto">
            <h2 className="font-medium text-5xl	text-center pb-4">New Products</h2>
            <p className="text-center mb-[25px]">Find your style. Fall fashion 20xx</p>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-x-0 xl:gap-y-10 ml-[20px]">
                {products.map((item, index) => (
                    <ProductCard // Changed from Productcard to ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
