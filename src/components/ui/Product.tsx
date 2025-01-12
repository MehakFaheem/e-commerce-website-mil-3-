// components/ui/Product.tsx
import React from "react";
import Image from "next/image";
import { Product } from "@/types/Product";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart,
  priority = false 
}) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative pb-[60%]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={priority}
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <Badge variant="secondary">{product.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 flex-1">{product.description}</p>
        <p className="text-2xl font-bold text-gray-900 mt-4">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          className="w-full"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;