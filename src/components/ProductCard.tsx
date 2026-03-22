import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0].name);
    showToast(`Added ${product.name} to cart!`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    showToast(isInWishlist(product.id) ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className={cn("group relative bg-zinc-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-[#39FF14]/30 transition-all duration-500", className)}
    >
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button
            onClick={handleAddToCart}
            className="w-12 h-12 rounded-full bg-[#39FF14] text-black flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-[#39FF14] text-black text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded">
              Featured
            </span>
          )}
          {product.price > 180 && (
            <span className="bg-white text-black text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded">
              Premium
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={cn(
            "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
            isInWishlist(product.id) ? "bg-[#39FF14] text-black" : "bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-black"
          )}
        >
          <Heart className={cn("w-5 h-5", isInWishlist(product.id) && "fill-current")} />
        </button>
      </Link>

      {/* Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">{product.category}</p>
            <Link to={`/product/${product.id}`} className="text-lg font-bold text-white hover:text-[#39FF14] transition-colors line-clamp-1">
              {product.name}
            </Link>
          </div>
          <p className="text-[#39FF14] font-black text-lg">${product.price.toFixed(2)}</p>
        </div>
        
        <div className="flex items-center gap-1 mt-4">
          <div className="flex items-center text-yellow-500">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold ml-1 text-white">{product.rating}</span>
          </div>
          <span className="text-white/30 text-[10px]">({product.reviews} reviews)</span>
        </div>
      </div>
    </motion.div>
  );
};
