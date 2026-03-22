import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-black tracking-tighter">
            STRIDE<span className="text-[#39FF14]">X</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Redefining the boundaries of athletic performance and urban style. StrideX is more than a brand; it's a movement.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/shop?category=Running" className="hover:text-[#39FF14] transition-colors">Running Shoes</Link></li>
            <li><Link to="/shop?category=Sneakers" className="hover:text-[#39FF14] transition-colors">Sneakers</Link></li>
            <li><Link to="/shop?category=Sports" className="hover:text-[#39FF14] transition-colors">Sports Performance</Link></li>
            <li><Link to="/shop?category=Casual" className="hover:text-[#39FF14] transition-colors">Casual Wear</Link></li>
            <li><Link to="/shop" className="hover:text-[#39FF14] transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/contact" className="hover:text-[#39FF14] transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-[#39FF14] transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-[#39FF14] transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-[#39FF14] transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-[#39FF14] transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
          <p className="text-sm text-white/50 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-[#39FF14] transition-colors"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#39FF14] text-black flex items-center justify-center hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 STRIDEX PREMIUM FOOTWEAR. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};
