import React from 'react';
import { ArrowRight, Sparkles, MapPin, MessageCircle, ShieldCheck, Truck, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#faf9f6] via-[#f5f1e8] to-[#faf9f6]">
      {/* Decorative ambient radial glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#b28a4a]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#e7e4de] shadow-xs text-xs font-bold uppercase tracking-wider text-[#8d6a35] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Welcome to Oman General Store • Turbat
            </div>

            <h1 className="font-['Manrope'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#151515] tracking-tight leading-[1.05] mb-6">
              Everything You Need,{' '}
              <span className="text-[#8d6a35] relative inline-block">
                All in One Place.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#b28a4a]/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Discover authentic beauty essentials, premium fragrances, modern fashion, personal care items, and everyday household essentials at Oman General Store in Turbat, Balochistan.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onExploreClick}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#151515] text-white hover:bg-[#303030] text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#dfbd7e]" />
              </button>

              <a
                href="#location"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#e7e4de] text-[#151515] hover:bg-neutral-50 text-sm font-bold transition-all shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#8d6a35]" />
                <span>Visit Store in Turbat</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Oman General Store! I am contacting you from your Turbat online store.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200/80 w-full max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#dfbd7e]/20 flex items-center justify-center text-[#8d6a35]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 leading-tight">100% Genuine</h4>
                  <p className="text-[11px] text-neutral-500">Verified products</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 leading-tight">Fast in Turbat</h4>
                  <p className="text-[11px] text-neutral-500">Local delivery</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 leading-tight">Open 7 Days</h4>
                  <p className="text-[11px] text-neutral-500">In Turbat Bazaar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main store visual */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=85"
                  alt="Oman General Store products"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <span className="inline-block px-2.5 py-1 bg-[#b28a4a] text-white text-[10px] font-bold rounded uppercase tracking-wider mb-2">
                    Turbat Flagship Store
                  </span>
                  <h3 className="font-['Manrope'] font-bold text-xl leading-snug">
                    Curated Quality for Turbat Families
                  </h3>
                  <p className="text-xs text-neutral-200 mt-1">Cosmetics, Fragrances & Menswear</p>
                </div>
              </div>

              {/* Floating Badge 1 - Perfumes */}
              <div className="absolute -left-4 sm:-left-8 top-12 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3 animate-pulse">
                <img
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=120&q=80"
                  alt="Perfume"
                  className="w-12 h-12 object-cover rounded-xl"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#b28a4a]" />
                    <span className="text-xs font-bold text-neutral-900">Fresh Fragrances</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Royal Arabian Oud & Scents</p>
                </div>
              </div>

              {/* Floating Badge 2 - Everyday Fashion */}
              <div className="absolute -right-3 sm:-right-6 bottom-16 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-100 flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1602810316693-3667c854239a?auto=format&fit=crop&w=120&q=80"
                  alt="Fashion"
                  className="w-12 h-12 object-cover rounded-xl"
                />
                <div>
                  <span className="text-xs font-bold text-neutral-900 block">Everyday Style</span>
                  <p className="text-[11px] text-neutral-500">Shirts, Trousers & Kurta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
