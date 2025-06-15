'use client';
import { useContext } from "react";
import { ContextValue } from "./Context";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const Wrapper = ({ children }) => {

    const { darkMode, searchInput } = useContext(ContextValue);

    return (
        <div className={`${darkMode ? "bg-[#171717] text-white" : "bg-white text-black"} transition-colors`}>
            <Header />

            <main className="min-h-screen">
                {searchInput.trim() ? <Search /> : children}
            </main>

            <Footer />
        </div>
    );
};

export default Wrapper;