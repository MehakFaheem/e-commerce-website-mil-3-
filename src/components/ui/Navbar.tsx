// components/Navbar.tsx
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar = ({ cartCount, onCartClick }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          E-Shop
        </Link>
        <button
          onClick={onCartClick}
          className="relative p-2 hover:bg-gray-100 rounded-full"
        >
          <ShoppingCart className="h-6 w-6" />
          {cartCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
              {cartCount}
            </Badge>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;