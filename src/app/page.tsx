"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, X } from "lucide-react";
import { Product } from "@/types/Product";
import { fetchProducts } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ui/Product";
import Navbar from "@/components/ui/Navbar"

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { cart, addToCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error loading products:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error}</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

        {/* Main Content */}
        <main className="container mx-auto px-4 pt-20 pb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h1>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-48 bg-gray-200" />
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </CardContent>
                <CardFooter>
                  <div className="h-10 bg-gray-200 rounded w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                priority={product.id <= 4}
              />
            ))}
          </div>
        )}
      </main>

      {/* Sliding Cart Panel */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsCartOpen(false);
            }
          }}
        >
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold">Shopping Cart</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="p-4 flex flex-col h-[calc(100vh-180px)] overflow-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-4 border-b"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="text-xl font-bold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <Button 
                className="w-full" 
                size="lg"
                disabled={cart.length === 0}
                onClick={() => {
                  // Implement checkout logic
                  alert('Checkout functionality coming soon!');
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;