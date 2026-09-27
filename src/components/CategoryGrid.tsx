import React from 'react';
import { ProductCategory } from '../types/store';
import { CATEGORY_CARDS } from '../data/storeData';
import { ArrowUpRight } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8d6a35]">
              Explore Departments
            </span>
            <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mt-1">
              Shop by Category
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-xl">
              Explore a wide selection of everyday essentials, grooming, beauty, and fashion curated for shoppers in Turbat.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold uppercase tracking-wider text-[#151515] hover:text-[#8d6a35] transition-colors border-b-2 border-black hover:border-[#8d6a35] pb-1 self-start md:self-end flex items-center gap-1"
          >
            <span>View All Products</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORY_CARDS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id as ProductCategory)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 text-left focus:outline-hidden focus:ring-2 focus:ring-[#8d6a35]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-colors" />

              {/* Text info */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#dfbd7e] block mb-1">
                  {cat.itemCount}
                </span>
                <h3 className="font-['Manrope'] font-bold text-sm sm:text-base leading-snug group-hover:text-[#dfbd7e] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-1 mt-0.5">
                  {cat.subtitle}
                </p>
              </div>

              {/* Hover indicator arrow */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
