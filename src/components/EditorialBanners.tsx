import React from 'react';
import { ProductCategory } from '../types/store';
import { ArrowRight, Sparkles } from 'lucide-react';

interface EditorialBannersProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const EditorialBanners: React.FC<EditorialBannersProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 bg-[#f3f0e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Banner 1: Beauty */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden group shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty and Skincare at Oman General Store"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white flex flex-col justify-end">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#dfbd7e] mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Beauty & Skincare
              </span>
              <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold leading-tight mb-3">
                Everyday Care, Made Simple.
              </h3>
              <p className="text-sm text-neutral-200 line-clamp-2 mb-6 max-w-md">
                Gentle cleansers, rich moisturizing creams, and nourishing oils suited for the climate of Turbat.
              </p>
              <div>
                <button
                  onClick={() => onSelectCategory('beauty')}
                  className="px-6 py-3 rounded-xl bg-white text-[#151515] hover:bg-[#dfbd7e] text-xs font-bold transition-all flex items-center gap-2"
                >
                  <span>Explore Skincare</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Banner 2: Fragrances */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden group shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1000&q=85"
              alt="Perfumes and Fragrances in Turbat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white flex flex-col justify-end">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#dfbd7e] mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Fragrances & Attars
              </span>
              <h3 className="font-['Manrope'] text-2xl sm:text-3xl font-extrabold leading-tight mb-3">
                Find Your Signature Scent.
              </h3>
              <p className="text-sm text-neutral-200 line-clamp-2 mb-6 max-w-md">
                Rich Arabian oud oils, French style perfumes, and fresh deodorants for daily and celebratory wear.
              </p>
              <div>
                <button
                  onClick={() => onSelectCategory('perfumes')}
                  className="px-6 py-3 rounded-xl bg-white text-[#151515] hover:bg-[#dfbd7e] text-xs font-bold transition-all flex items-center gap-2"
                >
                  <span>Explore Perfumes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
