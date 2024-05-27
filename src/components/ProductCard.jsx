import React from "react";
import Image from "next/image";
const ProductCard = ({ img, title, desc, rating, price }) => {
    return (
        <div className="px-5 py-5 border border-gray-200 rounded-xl max-w-[80%] items-center hover:border-[#000]">
            <div>
                <Image className="w-full h-auto" src={img} alt={title} width={200} height={200} />
                <h3 className="text-lg font-semibold text-blue-600">{title}</h3> {/* Changed text color to blue */}
                <p className="text-sm text-gray-500 mb-2">{desc}</p>
                <div className="flex items-center mb-2">
                    {Array.from({ length: rating }, (_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 1a1 1 0 01.777.37l3.426 4.27 6.074.446a1 1 0 01.554 1.705l-4.656 3.579 1.46 6.623a1 1 0 01-1.451 1.055L10 16.69l-5.75 3.033a1 1 0 01-1.45-1.054l1.459-6.624-4.657-3.578a1 1 0 01.555-1.705l6.074-.447L9.224 1.37A1 1 0 0110 1z" clipRule="evenodd" />
                        </svg>
                    ))}
                </div>
                <p className="text-lg font-semibold text-green-600">{`$${price}`}</p> {/* Changed text color to green */}
            </div>
        </div>
    );
}

export default ProductCard;
