import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { cn } from '../lib/utils';

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    showToast('Order placed successfully!');
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (isOrdered) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 rounded-full bg-[#39FF14] flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="w-12 h-12 text-black" />
        </motion.div>
        <h2 className="text-5xl font-black tracking-tighter mb-4 text-center">THANK YOU FOR YOUR ORDER!</h2>
        <p className="text-white/40 mb-10 text-center max-w-md">Your order has been placed successfully. We'll send you a confirmation email with details shortly.</p>
        <div className="animate-pulse text-[#39FF14] font-bold uppercase tracking-widest">Redirecting to home...</div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold text-xs mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </button>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-16">CHECKOUT</h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2 space-y-12">
            {/* Shipping Info */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Truck className="w-5 h-5 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-black tracking-tight uppercase">Shipping Information</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Street Address</label>
                  <input required type="text" placeholder="123 Stride Way" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">City</label>
                  <input required type="text" placeholder="New York" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                </div>
              </div>
            </section>

            {/* Payment Info */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <CreditCard className="w-5 h-5 text-[#39FF14]" />
                </div>
                <h3 className="text-2xl font-black tracking-tight uppercase">Payment Method</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={cn(
                    "p-6 rounded-2xl border flex flex-col gap-4 text-left transition-all",
                    paymentMethod === 'card' ? "border-[#39FF14] bg-[#39FF14]/5" : "border-white/10 bg-zinc-900 hover:border-white/30"
                  )}
                >
                  <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", paymentMethod === 'card' ? "border-[#39FF14]" : "border-white/20")}>
                    {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-[#39FF14]" />}
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-widest text-sm">Credit / Debit Card</p>
                    <p className="text-xs text-white/40 mt-1">Pay securely with your card</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={cn(
                    "p-6 rounded-2xl border flex flex-col gap-4 text-left transition-all",
                    paymentMethod === 'cod' ? "border-[#39FF14] bg-[#39FF14]/5" : "border-white/10 bg-zinc-900 hover:border-white/30"
                  )}
                >
                  <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center", paymentMethod === 'cod' ? "border-[#39FF14]" : "border-white/20")}>
                    {paymentMethod === 'cod' && <div className="w-3 h-3 rounded-full bg-[#39FF14]" />}
                  </div>
                  <div>
                    <p className="font-black uppercase tracking-widest text-sm">Cash on Delivery</p>
                    <p className="text-xs text-white/40 mt-1">Pay when you receive</p>
                  </div>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Card Number</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">CVV</label>
                    <input type="text" placeholder="000" className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 sticky top-32">
              <h3 className="text-2xl font-black tracking-tight uppercase mb-8">Order Summary</h3>
              
              <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-800 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-black uppercase tracking-tight line-clamp-1">{item.name}</p>
                      <p className="text-[10px] text-white/40 uppercase font-bold">Qty: {item.quantity} | Size: {item.selectedSize}</p>
                      <p className="text-sm font-black text-[#39FF14] mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8 pt-6 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50 uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="font-black">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50 uppercase tracking-widest font-bold">Shipping</span>
                  <span className="text-[#39FF14] font-black">FREE</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mb-10">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-black uppercase tracking-widest">Total</span>
                  <span className="text-4xl font-black text-[#39FF14]">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#39FF14] text-black h-16 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
              >
                Place Order <ShieldCheck className="w-5 h-5" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
