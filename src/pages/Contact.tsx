import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Contact = () => {
  const { showToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Message sent! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="pt-32 pb-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 uppercase">GET IN <br /> <span className="text-[#39FF14]">TOUCH.</span></h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question about our products, an order, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5">
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Email Us</h4>
                    <p className="text-lg font-bold">support@stridex.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Call Us</h4>
                    <p className="text-lg font-bold">+1 (888) STRIDEX</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Visit Us</h4>
                    <p className="text-lg font-bold">789 Innovation Way, <br /> San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-6">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {['IG', 'TW', 'FB', 'YT'].map(social => (
                    <button key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black hover:bg-[#39FF14] hover:text-black transition-all">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Chat Mock */}
            <div className="bg-[#39FF14] p-8 rounded-3xl text-black">
              <MessageSquare className="w-10 h-10 mb-6" />
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Live Chat</h3>
              <p className="font-bold text-sm mb-6">Our experts are online and ready to help you find your perfect fit.</p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Start Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-900 p-12 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Subject</label>
                  <select className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors appearance-none">
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Returns & Exchanges</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Your Message</label>
                  <textarea required rows={6} placeholder="How can we help you?" className="w-full bg-black border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#39FF14] transition-colors resize-none" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#39FF14] text-black h-16 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Map Mock */}
            <div className="mt-12 h-80 rounded-3xl overflow-hidden border border-white/5 relative group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
                alt="Map Placeholder"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                  <MapPin className="w-8 h-8 text-[#39FF14] mx-auto mb-2" />
                  <p className="text-xs font-black uppercase tracking-widest">StrideX Global HQ</p>
                  <p className="text-[10px] text-white/40 mt-1">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
