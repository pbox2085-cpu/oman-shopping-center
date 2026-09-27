import React from 'react';
import { Check, MapPin, Store, Sparkles, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const offerings = [
    'Original beauty and skincare cosmetics from trusted brands',
    'Long-lasting Arabian Oud, French perfumes & concentrated attars',
    'Quality men’s casual shirts, stretch trousers & linen kurtas',
    'Full selection of personal hygiene and daily household essentials',
    'Friendly local customer service with fast home delivery in Turbat',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=85"
                alt="Inside Oman General Store Turbat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-[#dfbd7e] mb-1">
                  <Store className="w-4 h-4" />
                  <span>Turbat Main Commercial Hub</span>
                </div>
                <h4 className="font-['Manrope'] text-lg font-bold">
                  Serving Kech District Families
                </h4>
              </div>
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#151515] text-white p-5 rounded-2xl shadow-xl border border-neutral-700 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#b28a4a] flex items-center justify-center font-extrabold text-white text-base">
                  10+
                </div>
                <div>
                  <span className="text-xs font-bold text-[#dfbd7e] block">Years of Trust</span>
                  <span className="text-[11px] text-neutral-300">In Turbat, Balochistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right text column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f0e9] text-[#8d6a35] text-xs font-bold uppercase tracking-wider mb-4">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>About Oman General Store</span>
            </div>

            <h2 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-tight mb-6">
              Your Local Destination for Quality & Everyday Essentials.
            </h2>

            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Located in the heart of Turbat, Oman General Store was established with a singular mission: to provide the local community with genuine, premium-quality lifestyle essentials at fair, accessible prices.
              </p>
              <p>
                From specialized skincare products suited for our desert climate to the finest fragrances, men’s and women’s clothing, and everyday home products, we save you the hassle of shopping across multiple vendors by bringing everything under one welcoming roof.
              </p>
            </div>

            {/* Offerings list */}
            <div className="space-y-3 mb-10">
              {offerings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#location"
                className="px-6 py-3.5 rounded-xl bg-[#151515] text-white hover:bg-[#303030] text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#dfbd7e]" />
                <span>Visit Our Turbat Store</span>
              </a>

              <a
                href="#shop"
                className="px-6 py-3.5 rounded-xl bg-neutral-100 text-neutral-800 hover:bg-neutral-200 text-xs sm:text-sm font-bold transition-all"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
