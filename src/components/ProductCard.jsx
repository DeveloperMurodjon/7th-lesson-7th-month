import React from 'react';
import { Link } from 'react-router-dom';


function ProductCard({ product }) {
    if (!product) return <div>Mahsulot mavjud emas</div>;

    return (
        <Link to={`/product/${product.id}`} className="max-w-[300px] border-2 rounded-2xl overflow-hidden shadow-md">
            <img src={product.thumbnail} alt={product.title} className="w-full  h-40 object-contain" />

            <div className="p-3">
                <h2 className="font-bold text-lg">{product.title}</h2>
                {product.brand && (
                    <p className="mt-2 font-extrabold text-sm bg-[#4a911f] px-2 py-1 rounded-md inline-block">
                        {product.brand}
                    </p>
                )}
                <p className="font-medium my-4  text-sm  line-clamp-4">{product.description}</p>
                <p className="bg-[#43d740]  px-2 py-1 inline-block text-white font-semibold rounded-sm">
                    {product.price}$
                </p>
            </div>
        </Link>
    );
}

export default ProductCard;