import React, { useState } from 'react';
import { Product } from '../types/store';
import { STORE_INFO } from '../data/storeData';
import { formatPKR, buildWhatsAppSingleProductMessage, getWhatsAppUrl } from '../utils/format';
import { X, Check, ShoppingBag, MessageCircle, Star, ShieldCheck, MapPin } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const discount = product.oldPrice ? product.oldPrice - product.price : 0;
  const singleWhatsAppMsg = buildWhatsAppSingleProductMessage(STORE_INFO, product);
  const singleWhatsAppUrl = getWhatsAppUrl(STORE_INFO.whatsappNumber, singleWhatsAppMsg);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors shadow-xs"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Modal Image */}
          <div className="relative min-h-[300px] md:min-h-[460px] bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl"
            />
            {product.featured && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#151515] text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                Featured Product
              </span>
            )}
          </div>

          {/* Modal Information */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold tracking-widest text-[#8d6a35] uppercase">
                  {product.category}
                </span>
                {product.rating && (
                  <div className="flex items-center gap-1 text-xs font-semibold text-neutral-600">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-neutral-400">({product.reviewCount} reviews)</span>
                  </div>
                )}
              </div>

              <h2 className="font-['Manrope'] text-2xl md:text-3xl font-extrabold text-[#151515] leading-tight mb-3">
                {product.name}
              </h2>

              {/* Price Details */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-black text-[#151515]">
                  {formatPKR(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-neutral-400 line-through">
                    {formatPKR(product.oldPrice)}
                  </span>
                )}
                {discount > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Save {formatPKR(discount)}
                  </span>
                )}
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              {/* Key Features */}
              {product.details && (
                <div className="mb-6 space-y-2">
                  <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                    Product Highlights:
                  </span>
                  <ul className="space-y-1.5">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Store Availability Badge */}
              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 mb-6 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-neutral-800">In Stock at Turbat Store</span>
                </div>
                <span className="text-neutral-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#8d6a35]" /> Same-day pickup
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              {/* Quantity selector & Add to Cart */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-neutral-300 rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 rounded-lg"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-neutral-700 hover:bg-neutral-100 rounded-lg"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 py-3 px-5 rounded-xl bg-[#151515] text-white hover:bg-[#303030] text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#dfbd7e]" />
                  <span>Add {quantity > 1 ? `(${quantity})` : ''} to Cart</span>
                </button>
              </div>

              {/* WhatsApp direct buy */}
              <a
                href={singleWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask or Order This on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
