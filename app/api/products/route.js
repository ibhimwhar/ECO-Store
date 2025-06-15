import { v4 as uuidv4 } from "uuid"

let Products = [
    {
        id: uuidv4(),
        name: "Eco-Friendly Water Bottle",
        price: 19.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Stay hydrated with our eco-friendly water bottle made from recycled materials. Perfect for on-the-go hydration.",
        category: "Accessories"
    },

    {
        id: uuidv4(),
        name: "Organic Cotton T-Shirt",
        price: 24.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Soft and comfortable organic cotton t-shirt. Available in various sizes and colors.",
        category: "Clothing"
    },

    {
        id: uuidv4(),
        name: "Recycled Paper Notebook",
        price: 9.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "A sustainable notebook made from recycled paper. Ideal for jotting down your thoughts or sketches.",
        category: "Stationery"
    },
    {
        id: uuidv4(),
        name: "Solar-Powered Charger",
        price: 39.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Charge your devices sustainably with our solar-powered charger. Perfect for outdoor adventures.",
        category: "Electronics"
    },
    {
        id: uuidv4(),
        name: "Reusable Shopping Bag",
        price: 5.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Say no to plastic with our durable and stylish reusable shopping bag. Foldable and easy to carry.",
        category: "Accessories"
    },
    {
        id: uuidv4(),
        name: "Vegan Leather Wallet",
        price: 29.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "A sleek and stylish wallet made from vegan leather. Perfect for those who care about animals and the environment.",
        category: "Accessories"
    },

    {
        id: uuidv4(),
        name: "Biodegradable Phone Case",
        price: 14.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Protect your phone with our biodegradable phone case. Made from plant-based materials.",
        category: "Electronics"
    },
    {
        id: uuidv4(),
        name: "Eco-Friendly Yoga Mat",
        price: 49.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Practice yoga sustainably with our eco-friendly yoga mat. Made from natural rubber and free from harmful chemicals.",
        category: "Fitness"
    },
    {
        id: uuidv4(),
        name: "Sustainable Travel Mug",
        price: 15.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Keep your drinks hot or cold with our sustainable travel mug. Made from stainless steel and BPA-free materials.",
        category: "Accessories"
    },
    {
        id: uuidv4(),
        name: "Organic Herbal Tea Set",
        price: 19.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Enjoy a selection of organic herbal teas in our eco-friendly packaging. Perfect for relaxation.",
        category: "Food & Beverages"
    },
    {
        id: uuidv4(),
        name: "Compostable Phone Stand",
        price: 12.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "A stylish phone stand made from compostable materials. Perfect for your desk or bedside table.",
        category: "Electronics"
    },
    {
        id: uuidv4(),
        name: "Eco-Friendly Candle",
        price: 9.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "Light up your space with our eco-friendly candle made from natural wax and essential oils.",
        category: "Home Decor"
    },
    {
        id: uuidv4(),
        name: "Sustainable Backpack",
        price: 59.99,
        image: "/VideoCapture_20231103-062158 (2).jpg",
        description: "A stylish and durable backpack made from recycled materials. Perfect for daily use or travel.",
        category: "Accessories"
    }
]

export async function GET() {
    return Response.json(Products)
}