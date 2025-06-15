'use client';
import { ContextValue } from '@/component/Context';
import LoadingSpinner from '@/component/LoadingSpinner';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useContext } from 'react';

export default function ProductDetailPage() {

    const { darkMode, products, addToCart, cart } = useContext(ContextValue);

    const { id } = useParams();
    const product = products.find(product => product.id === id);

    if (!product || product.length === 0) {
        return (<LoadingSpinner />);
    }

    if (!product) {
        return <div className="p-6 text-purple-800 flex justify-center items-center h-screen">Product not found</div>;
    }

    const inCart = cart.some((item) => item.id === product.id);

    return (
        <div
            className={`flex flex-col md:flex-row justify-center gap-8 p-6 md:p-10 min-h-screen transition duration-300 ${darkMode ? "bg-neutral-800" : "bg-neutral-100"}`}
        >
            <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={400}
                className="w-full sm:w-[400px] md:w-[450px] h-[70vh] object-cover rounded-lg"
                loading="lazy"
            />

            <div className='sticky top-10 h-fit sm:p-6'>
                <div className="flex flex-col justify-center w-full md:w-auto space-y-4">
                    <h3 className="font-semibold text-3xl">{product.name}</h3>
                    <p className="text-purple-600 font-bold text-2xl">${product.price}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md">
                        Discover the quality of our product. Built with precision, styled for comfort.
                    </p>
                    <button
                        onClick={() => addToCart(product)}
                        disabled={inCart}
                        className={`px-5 py-2 border ${darkMode ? "border-neutral-700" : "border-neutral-200"} rounded ${inCart ? "cursor-not-allowed" : "cursor-pointer hover:text-white active:text-white hover:bg-purple-800 active:bg-purple-800 transition-all"} `}
                    >
                        {inCart ? "Added to Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>

    );
}