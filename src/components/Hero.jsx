"use client"
import React from "react"
import Slider from "react-slick"
import Slides from "@/components/Slides"


export default function Hero(){
    var settings = {
        dots : true,
        infinite : true,
        slidesToShow : 1,
        autoplay : true,
        pauseOnHover : false,
    };

    const slideData = [
        {
            id:0,
            img:"/Images/1.png",
            // title:"Trending Item",
            // mainTitle:"WOMEN'S LATEST FASHION SALE",
            // PRICE:"$20",
        },
        {
            id:1,
            img:"/Images/2.png",
            // title:"Trending Item",
            // mainTitle:"WOMEN'S LATEST FASHION SALE",
            // PRICE:"$20",
        },
        {
            id:2,
            img:"/Images/3.png",
            // title:"Trending Item",
            // mainTitle:"WOMEN'S LATEST FASHION SALE",
            // PRICE:"$20",
        },
        {
            id:3,
            img:"/Images/4.png",
            // title:"Trending Item",
            // mainTitle:"WOMEN'S LATEST FASHION SALE",
            // PRICE:"$20",
        },
        {
            id:4,
            img:"/Images/5.png",
            // title:"Trending Item",
            // mainTitle:"WOMEN'S LATEST FASHION SALE",
            // PRICE:"$20",
        },
    ]



    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) =>(
                        
                    <Slides 
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    /> 
                    ))}
                </Slider>
            </div>
        </div>
    )
}