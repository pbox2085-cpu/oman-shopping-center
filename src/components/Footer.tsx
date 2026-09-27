import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { ProductCategory } from '../types/store';
import { MapPin, Phone, MessageCircle, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101010] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-neutral-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white text-[#151515] rounded-xl flex items-center justify-center font-bold text-lg">
                OG
              </div>
              <div>
                <span className="font-['Manrope'] font-extrabold text-lg text-white block leading-none">
                  {STORE_INFO.name}
                </span>
                <span className="text-[10px] tracking-widest text-[#dfbd7e] uppercase font-semibold">
                  Turbat • Balochistan
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Your trusted local destination for authentic beauty, personal grooming, fragrances, casual fashion, and everyday household essentials in Turbat.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white border border-emerald-500/30 text-xs font-semibold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {STORE_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Shop Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onSelectCategory('beauty')}
                  className="hover:text-white transition-colors"
                >
                  Beauty & Skincare
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('hair')}
                  className="hover:text-white transition-colors"
                >
                  Hair Care & Oils
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('perfumes')}
                  className="hover:text-white transition-colors"
                >
                  Arabian Oud & Perfumes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fashion')}
                  className="hover:text-white transition-colors"
                >
                  Shirts, Trousers & Kurta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('personal')}
                  className="hover:text-white transition-colors"
                >
                  Personal Hygiene & Soaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('essentials')}
                  className="hover:text-white transition-colors"
                >
                  Household Essentials
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Featured Products
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Store
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Turbat Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-4">
              Turbat Store
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dfbd7e] shrink-0 mt-0.5" />
                <span>Turbat Bazaar, Kech, Balochistan</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{STORE_INFO.displayPhone}</span>
              </p>
              <div className="pt-2 text-[11px] text-neutral-500">
                <span>Timings:</span>
                <p>9:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Oman General Store. Turbat, Balochistan. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> for Turbat
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
