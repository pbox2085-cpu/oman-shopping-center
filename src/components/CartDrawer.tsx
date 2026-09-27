import React, { useState } from 'react';
import { CartItem } from '../types/store';
import { STORE_INFO } from '../data/storeData';
import { formatPKR, buildWhatsAppCartMessage, getWhatsAppUrl } from '../utils/format';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, Copy, Check, MapPin } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
  onShowToast: (message: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShowToast,
}) => {
  const [deliveryArea, setDeliveryArea] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const orderMessage = buildWhatsAppCartMessage(STORE_INFO, cart, customerNote, deliveryArea);
  const whatsappUrl = getWhatsAppUrl(STORE_INFO.whatsappNumber, orderMessage);

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(orderMessage);
    setCopied(true);
    onShowToast('Order details copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <aside className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between bg-[#faf9f6]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#151515] text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-[#dfbd7e]" />
              </div>
              <div>
                <h2 className="font-['Manrope'] font-extrabold text-lg text-neutral-900 leading-tight">
                  Your Cart
                </h2>
                <span className="text-xs text-neutral-500">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-neutral-500 hover:text-red-600 transition-colors px-2 py-1"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-neutral-100">
            {cart.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center text-neutral-500">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-['Manrope'] font-bold text-lg text-neutral-800 mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-neutral-500 max-w-xs mb-6">
                  Explore our beauty, fragrances, and fashion collection to start your order in Turbat.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#151515] text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
                >
                  Browse Store
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="py-2 space-y-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3 py-2 items-center">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-xl border border-neutral-100 shrink-0 bg-neutral-100"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-neutral-900 truncate mb-1">
                          {item.product.name}
                        </h4>
                        <div className="text-xs font-extrabold text-[#8d6a35]">
                          {formatPKR(item.product.price)}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="w-6 h-6 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-5 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="w-6 h-6 rounded-md border border-neutral-200 bg-white flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-extrabold text-neutral-900 block mb-3">
                          {formatPKR(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5 ml-auto" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery and Notes Section */}
                <div className="py-4 space-y-3">
                  <span className="text-xs font-bold text-neutral-800 block">
                    Turbat Delivery / Pickup Info (Optional)
                  </span>

                  <div className="relative">
                    <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Absar Road, Main Bazaar, Turbat"
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                      className="w-full text-xs pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-hidden focus:border-[#8d6a35] focus:bg-white"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Instructions (e.g. size preference, urgent)"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-hidden focus:border-[#8d6a35] focus:bg-white"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer with WhatsApp checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-neutral-200 bg-[#faf9f6] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-semibold">{formatPKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Local Turbat Delivery</span>
                  <span className="text-emerald-600 font-semibold">Calculated on WhatsApp</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Estimated Total</span>
                  <span className="text-[#8d6a35]">{formatPKR(subtotal)}</span>
                </div>
              </div>

              {/* Order via WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Order on WhatsApp →</span>
              </a>

              {/* Copy order fallback */}
              <button
                onClick={handleCopyOrder}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Order Summary!' : 'Copy Order Text to Clipboard'}</span>
              </button>

              <p className="text-[10px] text-center text-neutral-500">
                You will chat directly with Oman General Store staff in Turbat to confirm your order.
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
