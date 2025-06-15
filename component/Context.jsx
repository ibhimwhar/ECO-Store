'use client';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ContextValue = createContext();

const ContextContainer = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [email, setEmail] = useState("");

    // Fetch products from API
    useEffect(() => {
        axios.get('/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);
    useEffect(() => {
        axios.get('/api/cart')
            .then(response => {
                setCart(response.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);


    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode !== null) {
            setDarkMode(savedMode === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const addToCart = (product) => {
        const foundProduct = products.find(p => p.id === product.id);
        if (!foundProduct) return;

        // Prevent duplicates
        const alreadyInCart = cart.some(item => item.id === foundProduct.id);
        if (alreadyInCart) return;

        axios.post('/api/cart', foundProduct)
            .then(res => {
                setCart(res.data);
            })
            .catch(error => {
                console.error("Error adding to cart:", error);
            });
    };


    const removeFromCart = (id) => {
        axios.delete('/api/cart', { data: { id } })
            .then(res => {
                setCart(res.data);
            })
            .catch(error => {
                console.error("Error removing from cart:", error);
            });
    };

    const clearCart = () => {
        axios.delete('/api/cart', {
            headers: { 'Content-Type': 'application/json' },
            data: { id: "all" },
        })
            .then(() => setCart([]))
            .catch(error => {
                console.error("Error clearing cart:", error.response?.data || error.message);
            });
    };


    const HandleSubmit = () => {

        if (!email.trim()) {
            alert("Please enter your email");
            return;
        }

        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!isValidEmail) {
            alert("Enter a valid email address");
            return;
        }

        alert(`Submitted email: ${email}`);
        setEmail("")
    };


    return (
        <ContextValue.Provider value={{
            darkMode,
            setDarkMode,
            products,
            cart,
            searchInput,
            setSearchInput,
            addToCart,
            removeFromCart,
            clearCart,
            email,
            setEmail,
            HandleSubmit
        }}>
            {children}
        </ContextValue.Provider>
    );
};

export default ContextContainer;