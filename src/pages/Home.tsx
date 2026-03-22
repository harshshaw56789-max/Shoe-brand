import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[30vw] font-black leading-none tracking-tighter">STRIDEX</h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#39FF14] font-black tracking-[0.3em] uppercase text-sm mb-6 block">
              New Collection 2026
            </span>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
              MOVE <br /> FASTER. <br /> <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>LIVE BETTER.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed">
              Experience the next generation of athletic performance. Engineered for speed, designed for the streets.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/shop"
                className="bg-[#39FF14] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white/20 hover:border-white px-10 py-5 rounded-full font-black uppercase tracking-widest transition-colors"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
              alt="Hero Shoe"
              className="w-full h-auto drop-shadow-[0_35px_35px_rgba(57,255,20,0.2)]"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 bg-zinc-900 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Performance</p>
                  <p className="text-lg font-black">+40% Energy Return</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 border-y border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <Truck className="w-6 h-6 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="font-bold text-lg uppercase tracking-tight">Free Shipping</h3>
              <p className="text-white/40 text-sm">On all orders over $150</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <Shield className="w-6 h-6 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="font-bold text-lg uppercase tracking-tight">2 Year Warranty</h3>
              <p className="text-white/40 text-sm">Quality guaranteed</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
              <Star className="w-6 h-6 text-[#39FF14]" />
            </div>
            <div>
              <h3 className="font-bold text-lg uppercase tracking-tight">Premium Quality</h3>
              <p className="text-white/40 text-sm">Handcrafted excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <span className="text-[#39FF14] font-black tracking-widest uppercase text-xs mb-4 block">Selected for you</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">FEATURED <br /> DROPS</h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-3 text-lg font-bold uppercase tracking-widest hover:text-[#39FF14] transition-colors">
              View All Collection <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all"><ArrowRight className="w-5 h-5" /></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">SHOP BY CATEGORY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Running', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop' },
              { name: 'Sneakers', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop' },
              { name: 'Sports', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1000&auto=format&fit=crop' },
              { name: 'Casual', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop' }
            ].map((cat, i) => (
              <Link
                key={cat.name}
                to={`/shop?category=${cat.name}`}
                className="group relative h-[400px] rounded-3xl overflow-hidden"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{cat.name}</h3>
                  <span className="text-[#39FF14] font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-20">WHAT OUR <br /> ATHLETES SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Alex Rivera', role: 'Marathon Runner', text: 'The Velocity Pro changed my game. I shaved 4 minutes off my personal best. The energy return is unlike anything else.' },
              { name: 'Sarah Chen', role: 'Fitness Coach', text: 'StrideX combines style and performance perfectly. I wear them in the gym and on the street. Truly versatile.' },
              { name: 'Marcus Thorne', role: 'Sneakerhead', text: 'The attention to detail and quality of materials is premium. StrideX is definitely the next big thing in footwear.' }
            ].map((t, i) => (
              <div key={i} className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 text-left">
                <div className="flex gap-1 text-[#39FF14] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-white/70 mb-8 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-black uppercase tracking-tight">{t.name}</h4>
                  <p className="text-[#39FF14] text-xs font-bold tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
