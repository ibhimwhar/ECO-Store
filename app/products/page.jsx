'use client';
import { ContextValue } from '@/component/Context';
import LoadingSpinner from '@/component/LoadingSpinner';
import Link from 'next/link';
import Image from 'next/image'
import React, { useContext } from 'react'


const page = () => {


    const { darkMode, products, cart, addToCart } = useContext(ContextValue);

    if (!products || products.length === 0) {
        return (<LoadingSpinner />);
    }

    return (
        <section className="max-w-6xl mx-auto py-16 px-6">
            <h2 className="text-2xl font-bold mb-10 text-center">Products</h2>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {products.map(product => {
                    const inCart = cart.some(item => item.id === product.id);
                    return (
                        <div
                            key={product.id}
                            className={`border ${darkMode ? "border-neutral-800 hover:shadow-neutral-800" : "border-neutral-100 hover:shadow-neutral-100"} rounded-lg hover:shadow-md overflow-hidden transition`}
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}
                                height={400}
                                className="w-full h-64 object-cover"
                                loading='lazy'
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-purple-600 font-bold">{product.price}</p>
                                <Link href={`/products/${product.id}`}>
                                    <button className="mt-4 mr-2 bg-purple-600 cursor-pointer text-white px-6 py-1 rounded hover:bg-purple-700 transition">
                                        View
                                    </button>
                                </Link>
                                <button
                                    onClick={() => addToCart(product)}
                                    disabled={inCart}
                                    className={`mt-4 mr-2 px-6 py-1 border ${darkMode ? "border-neutral-800" : "border-neutral-200"} rounded ${inCart ? "cursor-not-allowed" : "cursor-pointer hover:text-white active:text-white hover:bg-purple-800 active:bg-purple-800 transition-all"} `}
                                >
                                    {inCart ? "Added to Cart" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section >
    )
}

export default page
