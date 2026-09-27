import React from 'react';
import { TESTIMONIALS } from '../data/storeData';
import { Star, MessageSquareQuote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8d6a35]">
              Community Feedback
            </span>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mt-1">
              What Customers Say
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-xl">
              Real reviews from Turbat residents who count on Oman General Store for their daily needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl border border-neutral-200 bg-[#faf9f6] flex flex-col justify-between hover:border-[#b28a4a] hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-neutral-300" />
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                  “{review.comment}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                <div className="w-10 h-10 rounded-full bg-[#151515] text-[#dfbd7e] flex items-center justify-center font-bold text-xs tracking-wider">
                  {review.avatarText}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-neutral-900 leading-snug">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-neutral-500">
                    {review.role} • {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
