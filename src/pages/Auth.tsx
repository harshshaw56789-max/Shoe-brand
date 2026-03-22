import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(isLogin ? 'Logged in successfully!' : 'Account created successfully!');
    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter mb-4">
            {isLogin ? 'WELCOME BACK' : 'JOIN THE CLUB'}
          </h1>
          <p className="text-white/40 font-medium tracking-widest uppercase text-xs">
            {isLogin ? 'Enter your details to access your account' : 'Start your journey with StrideX today'}
          </p>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#39FF14]/10 blur-3xl rounded-full" />
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-2"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-[#39FF14] transition-colors"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-[#39FF14] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Password</label>
                {isLogin && (
                  <button type="button" className="text-[10px] font-black uppercase tracking-widest text-[#39FF14] hover:underline">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-black border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:border-[#39FF14] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#39FF14] text-black h-16 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 mt-8"
            >
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 space-y-6">
            <p className="text-center text-[10px] font-black uppercase tracking-widest text-white/30">Or continue with</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-white/10 bg-black hover:bg-white/5 transition-colors">
                <Chrome className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-white/10 bg-black hover:bg-white/5 transition-colors">
                <Github className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Github</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/40">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#39FF14] font-black uppercase tracking-widest hover:underline ml-2"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};
