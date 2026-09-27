import React from 'react';
import { STORE_INFO } from '../data/storeData';
import { MapPin, Phone, Clock, MessageCircle, Navigation, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#151515] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contact Details */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#dfbd7e] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us in Person</span>
            </div>

            <h2 className="font-['Manrope'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
              Come Visit Oman General Store in Turbat.
            </h2>

            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you want to browse fragrances in person, find the perfect cosmetic skincare products, or pick up everyday household items, our friendly team in Turbat is ready to serve you.
            </p>

            {/* Info Items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#b28a4a]/20 text-[#dfbd7e] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400">Store Location</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {STORE_INFO.fullAddress}
                  </p>
                  <span className="text-xs text-neutral-400">Turbat, Kech District, Balochistan</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400">Store Hours</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {STORE_INFO.openingHours}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {STORE_INFO.fridayHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#b28a4a]/20 text-[#dfbd7e] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-neutral-400">Phone & Orders</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {STORE_INFO.displayPhone}
                  </p>
                  <span className="text-xs text-emerald-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Instant WhatsApp support
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Oman General Store! I would like to ask about product availability in Turbat.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white text-[#151515] hover:bg-neutral-200 font-bold text-sm flex items-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#8d6a35]" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900/90 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[420px] shadow-2xl">
              {/* Pattern Background */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative z-10 flex flex-col items-center max-w-sm">
                <div className="w-20 h-20 rounded-full bg-[#b28a4a] text-white flex items-center justify-center shadow-2xl mb-6 animate-bounce">
                  <MapPin className="w-10 h-10" />
                </div>

                <div className="inline-block px-3 py-1 bg-emerald-600/30 text-emerald-400 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-500/30">
                  Open 7 Days a Week
                </div>

                <h3 className="font-['Manrope'] text-2xl font-bold text-white mb-2">
                  Oman General Store
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Turbat, Kech District, Balochistan, Pakistan
                </p>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white text-neutral-900 hover:bg-[#dfbd7e] font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Turbat Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
