import React from 'react';
import { ShoppingBag, Sparkles, MessageCircle, MapPin, ShieldCheck, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Wide Product Variety',
      description: 'From cosmetics and personal care to perfumes, clothing, and everyday items under one roof.',
    },
    {
      icon: Sparkles,
      title: '100% Authentic Quality',
      description: 'Carefully chosen products ensuring verified brand authenticity and consumer safety.',
    },
    {
      icon: MessageCircle,
      title: 'Easy WhatsApp Orders',
      description: 'Send your cart items directly via WhatsApp for rapid order confirmation and local delivery.',
    },
    {
      icon: MapPin,
      title: 'Local & Trusted in Turbat',
      description: 'Proudly serving thousands of families and households across Kech and Turbat city.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-white border-y border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8d6a35]">
            The Oman Store Difference
          </span>
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mt-1">
            Why Shop With Us?
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            Everything you need for convenient, trusted everyday shopping in Turbat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-neutral-200/90 bg-[#faf9f6] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#dfbd7e]/25 text-[#8d6a35] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
