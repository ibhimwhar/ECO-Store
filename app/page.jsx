'use client';
import { ContextValue } from '@/component/Context';
import LoadingSpinner from '@/component/LoadingSpinner';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

const Page = () => {

  const { darkMode, products, addToCart, cart, email, setEmail, HandleSubmit } = useContext(ContextValue);

  if (!products || products.length === 0) {
    return (<LoadingSpinner />);
  }

  return (
    <div className="mt-8">
      {/* Hero Section */}
      <section className={`${darkMode ? "bg-neutral-800" : "bg-neutral-100"} py-20 px-6 md:max-w-4xl sm:mx-auto m-8 text-center`}>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to ECO Store</h1>
        <p className="text-neutral-500 text-lg mb-6">Shop sustainable, live responsible 🌱</p>
        <Link href={"/products"}>
          <button className="bg-purple-600 cursor-pointer text-white px-6 py-3 rounded hover:bg-purple-700 transition">
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">Featured Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.slice(0, 6).map(product => {
            const inCart = cart.some(item => item.id === product.id)
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
      </section>

      {/* Newsletter CTA */}
      <section className={`${darkMode ? "bg-neutral-800" : "bg-neutral-100"} py-12 px-6  md:max-w-4xl sm:mx-auto m-8 text-center`}>
        <h3 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h3>
        <p className="text-neutral-600 mb-6">Get updates on new products and exclusive deals.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(event) => event.key === "Enter" && HandleSubmit()}
            placeholder="Enter your email"
            className={`${darkMode ? "placeholder:text-neutral-100 border-neutral-700" : "placeholder:text-neutral-800 border-neutral-200"}  flex-1 px-4 py-2 border rounded sm:rounded-l sm:rounded-r-none outline-none focus:ring-2 focus:ring-purple-500 transition`}
          />
          <button
            onClick={() => HandleSubmit()}
            type="submit"
            className="px-4 py-2 bg-purple-600 cursor-pointer text-white rounded-md sm:rounded-r sm:rounded-l-none hover:bg-purple-800 transition"
          >
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
};
export default Page;