import React from 'react';
import { Product } from '../types/store';
import { formatPKR } from '../utils/format';
import { X, Heart, Plus, Trash2, ShoppingBag } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  wishlist: Product[];
  onClose: () => void;
  onRemoveFromWishlist: (productId: number) => void;
  onAddToCart: (product: Product) => void;
  onOpenProductModal: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  wishlist,
  onClose,
  onRemoveFromWishlist,
  onAddToCart,
  onOpenProductModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <aside className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between bg-[#faf9f6]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </div>
              <div>
                <h2 className="font-['Manrope'] font-extrabold text-lg text-neutral-900 leading-tight">
                  Your Wishlist
                </h2>
                <span className="text-xs text-neutral-500">
                  {wishlist.length} saved {wishlist.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
            {wishlist.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center text-neutral-500">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                  <Heart className="w-8 h-8 text-neutral-300" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-neutral-800 mb-1">
                  Your wishlist is empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mb-6">
                  Save items you love by tapping the heart icon on any product in Oman General Store.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#151515] text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
                >
                  Start Browsing
                </button>
              </div>
            ) : (
              <div className="py-2 space-y-4">
                {wishlist.map((product) => (
                  <div key={product.id} className="flex gap-3 py-2 items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => {
                        onClose();
                        onOpenProductModal(product);
                      }}
                      className="w-16 h-16 object-cover rounded-xl border border-neutral-100 shrink-0 bg-neutral-100 cursor-pointer"
                    />

                    <div className="flex-1 min-w-0">
                      <h4
                        onClick={() => {
                          onClose();
                          onOpenProductModal(product);
                        }}
                        className="text-xs font-bold text-neutral-900 truncate mb-1 cursor-pointer hover:text-[#8d6a35]"
                      >
                        {product.name}
                      </h4>
                      <div className="text-xs font-extrabold text-[#8d6a35]">
                        {formatPKR(product.price)}
                      </div>
                      <span className="text-[10px] text-neutral-500 uppercase font-semibold">
                        {product.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => {
                          onAddToCart(product);
                        }}
                        className="p-2 rounded-lg bg-[#151515] text-white hover:bg-[#8d6a35] transition-colors"
                        title="Add to cart"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#dfbd7e]" />
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                        title="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};
