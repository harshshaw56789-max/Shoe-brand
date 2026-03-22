import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart, Shield, Truck, RefreshCcw, ChevronRight, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { ProductCard } from '../components/ProductCard';
import { cn } from '../lib/utils';

export const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const { showToast } = useToast();

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center text-white">
        <h2 className="text-4xl font-black mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-[#39FF14] underline uppercase tracking-widest font-bold">Back to Shop</Link>
      </div>
    );
  }

  // Initialize selections if not set
  if (selectedSize === null) setSelectedSize(product.sizes[0]);
  if (selectedColor === null) setSelectedColor(product.colors[0].name);

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      for(let i = 0; i < quantity; i++) {
        addToCart(product, selectedSize, selectedColor);
      }
      showToast(`Added ${quantity} ${product.name} to cart!`);
    }
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-32 pb-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-white/40 uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/5"
            >
              <img
                src={product.images[activeImage] || product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "aspect-square rounded-xl overflow-hidden border-2 transition-all",
                    activeImage === i ? "border-[#39FF14]" : "border-transparent opacity-50 hover:opacity-100"
                  )}
                >
                  <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-[#39FF14] font-black tracking-widest uppercase text-xs mb-4 block">{product.category}</span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <p className="text-3xl font-black text-[#39FF14]">${product.price.toFixed(2)}</p>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm font-bold">{product.rating}</span>
                  <span className="text-white/30 text-xs">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <p className="text-white/60 text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Selection */}
            <div className="space-y-8 mb-10">
              {/* Colors */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Select Color</h4>
                <div className="flex gap-4">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "group relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all",
                        selectedColor === color.name ? "border-[#39FF14] bg-[#39FF14]/10" : "border-white/10 hover:border-white/30"
                      )}
                    >
                      <span className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: color.hex }} />
                      <span className="text-xs font-bold uppercase tracking-widest">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Select Size (US)</h4>
                <div className="grid grid-cols-6 gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "py-4 rounded-xl border font-black transition-all",
                        selectedSize === size ? "bg-white text-black border-white" : "border-white/10 text-white hover:border-white"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Quantity</h4>
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-zinc-900 rounded-full border border-white/10 p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-black text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#39FF14] text-black h-16 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
              >
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={cn(
                  "w-16 h-16 rounded-2xl border flex items-center justify-center transition-all",
                  isInWishlist(product.id) ? "bg-[#39FF14] border-[#39FF14] text-black" : "border-white/10 text-white hover:border-white"
                )}
              >
                <Heart className={cn("w-6 h-6", isInWishlist(product.id) && "fill-current")} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#39FF14]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCcw className="w-5 h-5 text-[#39FF14]" />
                <span className="text-[10px] font-black uppercase tracking-widest">30 Day Returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#39FF14]" />
                <span className="text-[10px] font-black uppercase tracking-widest">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-12 uppercase">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
