// lib/api.ts
import { Product } from "@/types/Product";
import earbuds from "@/images/earbuds.jpg"
import premiumlaptop from "@/images/premiumlaptop.jpeg";
import FitnessTracker from "@/images/FitnessTracker.jpg";
import gamingmouse from "@/images/gamingmouse.jpg";
import gamingchair from "@/images/gamingchair.jpeg";
import fourkhdtv from "@/images/fourkhdtv.jpg";
import wirelessheadphons from "@/images/wirelessheadphons.jpeg";
import wirelesskeyboard from "@/images/wirelesskeyboard.jpg";
import homespeaker from "@/images/homespeaker.jpeg";
import dronecamera from "@/images/dronecamera.jpeg";
import powerbank from "@/images/powerbank.jpeg";
import runningshoes from "@/images/runningshoes.jpeg";
import backpack from "@/images/backpack.jpeg";
import SmartWatch from "@/images/SmartWatch.jpg";
import CoffeeMaker from "@/images/CoffeeMaker.jpeg";
import bluetoothspeakers from "@/images/bluetoothspeakers.jpeg";


export const products: Product[] = [
  {
    id: 1,
    name: "Premium Laptop",
    price: 999.99,
    description: "High-performance laptop for professionals",
    category: "Electronics",
    image: premiumlaptop
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Noise-canceling headphones with superior sound quality",
    category: "Accessories",
    image: wirelessheadphons
  },
  {
    id: 3,
    name: "Gaming Chair",
    price: 299.99,
    description: "Ergonomic chair designed for long gaming sessions",
    category: "Furniture",
    image: gamingchair
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 49.99,
    description: "Ergonomic gaming mouse with customizable buttons",
    category: "Accessories",
    image: gamingmouse
  },
  {
    id: 5,
    name: "Wireless Keyboard",
    price: 79.99,
    description: "Compact wireless keyboard with Bluetooth connectivity",
    category: "Accessories",
    image: wirelesskeyboard
  },
  {
    id: 6,
    name: "4K Ultra HD TV",
    price: 1299.99,
    description: "Stunning 4K Ultra HD TV with HDR support",
    category: "Electronics",
    image: fourkhdtv
  },
  {
    id: 7,
    name: "Noise-Cancelling Earbuds",
    price: 149.99,
    description: "Wireless earbuds with active noise cancellation",
    category: "Audio",
    image: earbuds
  },
  {
    id: 8,
    name: "Fitness Tracker",
    price: 89.99,
    description: "Track your fitness goals and monitor your health",
    category: "Wearables",
    image: FitnessTracker
  },
  {
    id: 9,
    name: "Smart Home Speaker",
    price: 199.99,
    description: "Voice-controlled smart home assistant with great sound quality",
    category: "Home",
    image: homespeaker
  },
  {
    id: 10,
    name: "Drone Camera",
    price: 399.99,
    description: "Capture stunning aerial photos and videos",
    category: "Gadgets",
    image: dronecamera
  },
  {
    id: 11,
    name: "Portable Power Bank",
    price: 29.99,
    description: "Compact power bank to charge your devices on the go",
    category: "Accessories",
    image: powerbank
  },
  {
    id: 12,
    name: "Smart Watch",
    price: 149.99,
    description: "Feature-packed smart watch with fitness tracking and notifications",
    category: "Accessories",
    image: SmartWatch
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 99.99,
    description: "Portable Bluetooth speaker with high-quality sound",
    category: "Audio",
    image: bluetoothspeakers
  },
  {
    id: 14,
    name: "Running Shoes",
    price: 129.99,
    description: "Lightweight and comfortable shoes for daily runs",
    category: "Sportswear",
    image: runningshoes
  },
  {
    id: 15,
    name: "Coffee Maker",
    price: 89.99,
    description: "Brew delicious coffee at the touch of a button",
    category: "Home Appliances",
    image: CoffeeMaker
  },
  {
    id: 16,
    name: "Backpack",
    price: 49.99,
    description: "Durable and spacious backpack for travel or school",
    category: "Accessories",
    image: backpack
  },
  // ... other products
];

export const fetchProducts = async (): Promise<Product[]> => {
  // In a real app, this would be an API call
  return products;
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  return products.find(product => product.id === id) || null;
};