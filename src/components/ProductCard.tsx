import React from 'react';
import { Product } from '../types/store';
import { formatPKR } from '../utils/format';
import { Heart, Plus, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenModal,
}) => {
  const discount = product.oldPrice ? product.oldPrice - product.price : 0;

  return (
    <article
      onClick={() => onOpenModal(product)}
      className="group bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer relative"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square sm:h-64 bg-neutral-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.featured && (
            <span className="px-2.5 py-1 rounded-md bg-[#151515] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
              Featured
            </span>
          )}
          {discount > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
              Save {formatPKR(discount)}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-neutral-600 hover:text-red-500 hover:bg-white shadow-xs transition-colors z-10"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 ${isWishlisted ? 'text-red-500 fill-red-500' : ''}`}
          />
        </button>

        {/* Quick View hint on hover */}
        <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center text-white text-xs font-semibold">
          Click for details
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8d6a35]">
              {product.category}
            </span>

            {product.rating && (
              <div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-600">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                <span>{product.rating}</span>
                <span className="text-neutral-400">({product.reviewCount})</span>
              </div>
            )}
          </div>

          <h3 className="font-['Manrope'] font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#8d6a35] transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>

          <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price and Add button */}
        <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-sm sm:text-base text-[#151515]">
                {formatPKR(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-neutral-400 line-through">
                  {formatPKR(product.oldPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-600 font-semibold">In stock in Turbat</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-9 h-9 rounded-xl bg-[#151515] text-white hover:bg-[#8d6a35] flex items-center justify-center transition-all shadow-xs active:scale-95 shrink-0"
            title="Add to Cart"
            aria-label="Add to cart"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
};
