// app/product/[id].tsx
import React from "react";
import { Product } from "../../types/Product";
import Image from "next/image";

// Simulating fetching data
const fetchProductById = async (id: number): Promise<Product | null> => {
  const products: Product[] = [
    { id: 1, name: "Product 1", description: "Description for Product 1", category: "fjkjkj", price: 10.0, image: "/path/to/image.jpg" },
    { id: 2, name: "Product 2", description: "Description for Product 2", category: "fjkjkj", price: 20.0, image: "/path/to/image.jpg" },
  ];
  return products.find(product => product.id === id) || null;
};

export default async function ProductDetailPage({ params }: { params: { id: number } }) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
