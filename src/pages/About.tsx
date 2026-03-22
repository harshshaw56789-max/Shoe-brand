import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Award, ShieldCheck, Zap } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter mb-8"
          >
            REDEFINING <br /> <span className="text-[#39FF14]">MOVEMENT.</span>
          </motion.h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Founded in 2026, StrideX was born from a simple obsession: creating the perfect balance between elite performance and uncompromising style.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop"
              alt="Brand Story"
              className="rounded-3xl w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#39FF14]/20 blur-3xl rounded-full" />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Our Story</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We started in a small workshop with a single goal: to engineer a shoe that could handle a marathon but look at home in a high-fashion gallery. We believe that athletes shouldn't have to choose between aesthetics and functionality.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Today, StrideX is a global community of runners, creators, and urban explorers who demand more from their footwear. Every pair we make is a testament to our commitment to innovation, sustainability, and the pursuit of excellence.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-black text-[#39FF14] mb-1">500K+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Athletes Served</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#39FF14] mb-1">45+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Countries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <div className="bg-zinc-900 p-12 rounded-3xl border border-white/5">
            <Target className="w-12 h-12 text-[#39FF14] mb-8" />
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Our Mission</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To empower every individual to move with confidence and purpose through innovative design and superior craftsmanship.
            </p>
          </div>
          <div className="bg-zinc-900 p-12 rounded-3xl border border-white/5">
            <Eye className="w-12 h-12 text-[#39FF14] mb-8" />
            <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Our Vision</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              To become the world's most influential footwear brand, bridging the gap between sports performance and luxury lifestyle.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-tighter uppercase mb-20">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Award, title: 'Quality', text: 'We never compromise on materials or craftsmanship.' },
              { icon: Zap, title: 'Innovation', text: 'Constantly pushing the boundaries of technology.' },
              { icon: Users, title: 'Community', text: 'Building a global movement of movement.' },
              { icon: ShieldCheck, title: 'Integrity', text: 'Honest practices and sustainable production.' }
            ].map((value, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#39FF14]" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight">{value.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
