import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useCart();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') as Category | 'All' || 'All';
  const showWishlist = searchParams.get('wishlist') === 'true';

  const categories: (Category | 'All')[] = ['All', 'Running', 'Sneakers', 'Sports', 'Casual'];

  const filteredProducts = useMemo(() => {
    let result = showWishlist ? wishlist : PRODUCTS;

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, searchQuery, sortBy, showWishlist, wishlist]);

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
              {showWishlist ? 'YOUR WISHLIST' : activeCategory === 'All' ? 'THE SHOP' : activeCategory.toUpperCase()}
            </h1>
            <p className="text-white/40 font-medium tracking-widest uppercase text-sm">
              {filteredProducts.length} Products Found
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-[#39FF14] transition-colors" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-[#39FF14] w-full md:w-64 transition-all"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-all",
                isFilterOpen ? "bg-[#39FF14] border-[#39FF14] text-black" : "border-white/10 text-white hover:border-white"
              )}
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <div className="relative group">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-zinc-900 border border-white/10 rounded-full py-3 pl-6 pr-12 text-sm text-white focus:outline-none focus:border-[#39FF14] cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="popular">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6">Categories</h4>
                    <div className="flex flex-wrap gap-3">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setSearchParams({ category: cat })}
                          className={cn(
                            "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all",
                            activeCategory === cat ? "bg-white text-black border-white" : "border-white/10 text-white/60 hover:border-white/40"
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Size Filter (Mock) */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6">Sizes</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {[7, 8, 9, 10, 11, 12, 13].map(size => (
                        <button
                          key={size}
                          className="py-2 rounded-lg border border-white/10 text-xs font-bold hover:border-[#39FF14] hover:text-[#39FF14] transition-all"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter (Mock) */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/40 mb-6">Colors</h4>
                    <div className="flex flex-wrap gap-3">
                      {['#000000', '#FFFFFF', '#39FF14', '#FF0000', '#0000FF'].map(color => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-full border border-white/20 hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => {
                      setSearchParams({});
                      setSearchQuery('');
                      setSortBy('newest');
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-[#39FF14] transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" /> Reset All Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
            <p className="text-white/40 mb-8">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSearchParams({});
                setSearchQuery('');
              }}
              className="bg-[#39FF14] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
