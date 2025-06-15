"use client";
import { CreditCard, Home, Menu, Moon, Phone, Search, ShoppingBag, ShoppingBasket, ShoppingCart, Sun, Trash2, Truck, UserRound, X } from 'lucide-react'
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { ContextValue } from './Context';
import { usePathname } from 'next/navigation';

const Header = () => {
    const banner = [
        { title: 'Free Shipping', icon: <Truck size={15} /> },
        { title: 'Payment Security', icon: <CreditCard size={15} /> },
        { title: '24/7 Support', icon: <Phone size={15} /> }
    ];

    const menus = [
        { title: 'Home', icon: <Home size={18} />, link: '/' },
        { title: 'Products', icon: <ShoppingBasket size={18} />, link: '/products' },
        { title: 'About', icon: <UserRound size={18} />, link: '/about' },
    ];

    const {
        darkMode,
        setDarkMode,
        searchInput,
        setSearchInput,
        cart,
        removeFromCart,
        clearCart
    } = useContext(ContextValue)

    const [isopen, setIsOpen] = useState(false);
    const [cartopen, setCartOpen] = useState(false);

    const HandleCheckOut = () => {
        alert("Checkout your items. Thank you for the visit.")
        clearCart()
    }

    return (
        <header className="text-current w-full">

            {/* Top Banner */}
            <div className="bg-purple-800 text-white flex flex-wrap justify-center gap-6 p-3 text-[13px]">
                {banner.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>

            {/* Main Header */}
            <div className={`border-b ${darkMode ? "border-neutral-800" : "border-neutral-100"} p-4`}>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">

                    {/* Logo and Mobile Cart */}
                    <div className="flex items-center justify-between w-full space-x-4 sm:w-auto">
                        <button onClick={() => setIsOpen(!isopen)} className={`transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded hover:ring-2 active:ring-2 ring-purple-600`}>
                            <Menu size={20} />
                        </button>

                        <h1 className="text-2xl md:text-4xl font-bold text-center w-full sm:w-auto">ECO Store</h1>

                        <div className='flex gap-4'>
                            <button onClick={() => setDarkMode(!darkMode)} className={`sm:hidden transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded active:ring-2 ring-purple-600`}>
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <button onClick={() => setCartOpen(!cartopen)} className={`sm:hidden relative transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded active:ring-2 ring-purple-600`}>
                                <ShoppingCart size={20} />
                                <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white h-5 w-5 rounded-full flex items-center justify-center">
                                    {cart.length}
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* Navigation Links */}
                    <nav className="flex items-center space-x-4">
                        {menus.map((menu, index) => {
                            const isActive = usePathname()

                            return (
                                <Link href={menu.link} key={index} className={`${menu.link === isActive ? "text-purple-500" : ""} hover:text-purple-800 text-sm`}>
                                    <p className='sm:hidden md:block'>{menu.title}</p>
                                    <span className='hidden sm:block md:hidden mr-6'>{menu.icon}</span>
                                </Link>
                            )
                        })}

                        {/* Cart with Badge (desktop only) */}
                        <button onClick={() => setDarkMode(!darkMode)} className={`hidden sm:block transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded hover:ring-2 ring-purple-600`}>
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button onClick={() => setCartOpen(!cartopen)} className={`hidden sm:block relative transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded hover:ring-2 ring-purple-600`}>
                            <ShoppingCart size={20} />
                            <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white h-5 w-5 rounded-full flex items-center justify-center">
                                {cart.length}
                            </span>
                        </button>

                    </nav>
                </div>

                {/* Search Bar */}
                <div className="mt-4 w-full">
                    <div className="flex justify-end">
                        <div className="w-full md:max-w-lg">
                            <div className={`flex items-center gap-2 border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded px-3 py-2 focus-within:ring-2 transition-all focus-within:ring-purple-500`}>
                                <Search className={`${darkMode ? "text-neutral-600" : "text-neutral-300"}`} />
                                <input
                                    type="text"
                                    value={searchInput}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            setSearchInput("");
                                        }
                                    }}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    placeholder="Search for products..."
                                    className={`w-full outline-none bg-transparent text-sm  ${darkMode ? "placeholder:text-neutral-100" : "placeholder:text-neutral-800"}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {(isopen || cartopen) && (
                <div
                    className="fixed h-screen inset-0 bg-black/40 backdrop-blur-xs z-40"
                    onClick={() => {
                        if (isopen) setIsOpen(false);
                        if (cartopen) setCartOpen(false);
                    }}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed transition-transform ${isopen ? "translate-x-0" : "-translate-x-full"} left-0 top-0 w-64 md:min-w-xs p-4 h-screen z-50 ${darkMode ? "bg-[#171717] text-white" : "bg-white text-black"} border-r ${darkMode ? "border-neutral-800" : "border-neutral-100"}`}>
                <div className="flex items-center justify-between my-6">
                    <h1 className="text-2xl md:text-4xl font-bold">ECO Store</h1>
                    <button onClick={() => setIsOpen(false)} className={`transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded hover:ring-2 active:ring-2 ring-purple-600`}>
                        <X size={20} />
                    </button>
                </div>

                <nav className='grid'>
                    {menus.map((menu, index) => {
                        const isActive = usePathname()

                        return (
                            <Link href={menu.link} key={index} className={`${menu.link === isActive ? "text-purple-500" : ""} hover:text-purple-800 transition-all px-4 py-3 mb-4 flex justify-between items-center group`}>
                                {menu.title}
                                <span className='group-hover:block hidden text-purple-800'>{menu.icon}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className={`mt-6 border-t ${darkMode ? "border-neutral-800" : "border-neutral-100"}  pt-4`}>
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <div className="flex items-center gap-2 mb-4">
                        <Phone size={20} />
                        <span>+1 234 567 890</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard size={20} />
                        <span>Payment Security</span>
                    </div>
                </div>
            </aside>

            {/* Cart */}
            <aside className={`fixed transition-transform ${cartopen ? "translate-x-0" : "translate-x-full"} right-0 top-0 w-64 md:min-w-xs p-4 h-screen z-50 ${darkMode ? "bg-[#171717] text-white" : "bg-white text-black"} border-l ${darkMode ? "border-neutral-800" : "border-neutral-100"}`}>
                <div className="flex items-center justify-between my-6">
                    <button onClick={() => setCartOpen(false)} className={`transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded hover:ring-2 active:ring-2 ring-purple-600`}>
                        <X size={20} />
                    </button>
                    <h1 className="text-2xl md:text-4xl font-bold">Cart</h1>
                </div>

                <div className="flex flex-col gap-4">
                    {cart.length === 0 ? (
                        <div className="text-center grid place-items-center gap-10 text-neutral-500">
                            <p>Your cart is empty</p>
                            <ShoppingBag size={100} />
                        </div>
                    ) : (
                        <div className='h-[60vh] overflow-y-scroll pr-4'>
                            {cart.map((item) => (
                                <div key={item.id} className={`grid gap-3 md:flex items-center justify-between border-b ${darkMode ? "border-neutral-800" : "border-neutral-100"} pb-4 mb-4`}>
                                    <div className="flex items-center gap-2">
                                        <img src={item.image} alt={"Product" + item.id} className="w-16 md:w-26 h-16 object-cover rounded" />
                                        <span>{item.name}</span>
                                    </div>
                                    <span>${item.price.toFixed(2)}</span>
                                    <div className='flex justify-end'>
                                        <button onClick={() => removeFromCart(item.id)} className={`text-red-500 w-fit transition-all p-2 cursor-pointer border ${darkMode ? "border-neutral-800" : "border-neutral-100"} rounded hover:ring-2 active:ring-2 ring-purple-600`}>
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <button onClick={() => clearCart()} className='text-red-500 cursor-pointer text-[12px] underline-offset-2 hover:underline'>Remove All</button>
                        </div>
                    )}

                    {/* Total Price */}
                    {cart.length > 0 && (
                        <>
                            <div className="text-right font-bold text-lg">
                                Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                            </div>

                            <button onClick={() => HandleCheckOut()} className="mt-4 w-full bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition cursor-pointer">
                                Checkout
                            </button>
                        </>
                    )}
                </div>

            </aside>

        </header>
    );
};

export default Header;