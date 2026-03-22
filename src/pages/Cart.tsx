import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
          <ShoppingBag className="w-10 h-10 text-white/20" />
        </div>
        <h2 className="text-4xl font-black tracking-tighter mb-4">YOUR CART IS EMPTY</h2>
        <p className="text-white/40 mb-10 text-center max-w-md">Looks like you haven't added anything to your cart yet. Start exploring our premium collection.</p>
        <Link
          to="/shop"
          className="bg-[#39FF14] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-16">YOUR CART</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex flex-col sm:flex-row gap-8 p-6 bg-zinc-900/50 rounded-3xl border border-white/5 relative group"
                >
                  <div className="w-full sm:w-48 aspect-square rounded-2xl overflow-hidden bg-zinc-800">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-[#39FF14] text-[10px] font-black uppercase tracking-widest mb-1">{item.category}</p>
                          <h3 className="text-2xl font-black tracking-tight uppercase">{item.name}</h3>
                        </div>
                        <p className="text-2xl font-black text-[#39FF14]">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Size:</span>
                          <span className="text-xs font-black">{item.selectedSize}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Color:</span>
                          <span className="text-xs font-black">{item.selectedColor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <div className="flex items-center bg-black rounded-full border border-white/10 p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 text-center font-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                        className="text-white/20 hover:text-red-500 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 sticky top-32">
              <h3 className="text-2xl font-black tracking-tight uppercase mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50 uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="font-black">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50 uppercase tracking-widest font-bold">Shipping</span>
                  <span className="text-[#39FF14] font-black">FREE</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50 uppercase tracking-widest font-bold">Tax</span>
                  <span className="font-black">$0.00</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-black uppercase tracking-widest">Total</span>
                  <span className="text-4xl font-black text-[#39FF14]">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-[#39FF14] text-black h-16 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
              >
                Checkout Now <ArrowRight className="w-5 h-5" />
              </Link>

              <p className="mt-6 text-[10px] text-white/30 text-center uppercase tracking-[0.2em] font-bold">
                Secure checkout powered by StrideX Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
