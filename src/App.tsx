/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ProductCategory, Product, CartItem } from './types/store';
import { STORE_INFO, CATEGORIES, PRODUCTS } from './data/storeData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EditorialBanners } from './components/EditorialBanners';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toast, ToastProps } from './components/Toast';
import { Search, X, SlidersHorizontal, Sparkles, ShoppingBag } from 'lucide-react';

export default function App() {
  // Local storage initialization for cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('oman_store_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Local storage initialization for wishlist
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('oman_store_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filters & State
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [toast, setToast] = useState<{ message: string; type?: 'success' | 'info' } | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('oman_store_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('oman_store_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast helper
  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`${quantity > 1 ? `${quantity}x ` : ''}"${product.name}" added to cart`);
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Cart cleared', 'info');
  };

  // Wishlist operations
  const handleToggleWishlist = (product: Product) => {
    const isSaved = wishlist.some((item) => item.id === product.id);
    if (isSaved) {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id));
      showToast(`Removed from wishlist`, 'info');
    } else {
      setWishlist((prev) => [...prev, product]);
      showToast(`Saved to wishlist`);
    }
  };

  const handleRemoveFromWishlist = (productId: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // Search input focus trigger
  const focusSearchInput = () => {
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 450);
  };

  const handleCategorySelect = (category: ProductCategory) => {
    setSelectedCategory(category);
    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered & Sorted products calculation
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.details && p.details.some((d) => d.toLowerCase().includes(q)));

      return matchesCategory && matchesQuery;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      // 'featured'
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#171717] font-['Inter',sans-serif] selection:bg-[#dfbd7e] selection:text-black">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Main Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onFocusSearch={focusSearchInput}
      />

      <main>
        {/* Hero Section */}
        <Hero onExploreClick={focusSearchInput} />

        {/* 6 Category Highlights */}
        <CategoryGrid onSelectCategory={handleCategorySelect} />

        {/* Shop / Products Section */}
        <section id="shop" className="py-16 sm:py-24 bg-[#faf9f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8d6a35]">
                  Our Catalog
                </span>
                <h2 className="font-['Manrope'] text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight mt-1">
                  Featured Products
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-xl">
                  Browse authentic cosmetics, fragrances, clothing, and everyday items in stock at our Turbat store.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start md:self-end">
                <span className="text-xs font-bold text-neutral-500">
                  Showing {filteredProducts.length} items
                </span>
              </div>
            </div>

            {/* Filter and Search Bar Controls */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200/80">
              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat.id
                        ? 'bg-[#151515] text-white shadow-sm'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/90'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Search & Sort Controls */}
              <div className="flex items-center gap-3">
                {/* Search input */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products in Turbat..."
                    className="w-full text-xs pl-9 pr-8 py-2.5 bg-white border border-neutral-200/90 rounded-full focus:outline-hidden focus:border-[#8d6a35] shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Sort selector */}
                <div className="relative shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="text-xs font-semibold pl-3 pr-8 py-2.5 bg-white border border-neutral-200/90 rounded-full focus:outline-hidden focus:border-[#8d6a35] text-neutral-800 shadow-2xs cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center justify-center bg-white rounded-3xl border border-neutral-200/80 p-8">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="font-['Manrope'] text-xl font-bold text-neutral-800 mb-2">
                  No matching products found
                </h3>
                <p className="text-neutral-500 text-xs sm:text-sm max-w-sm mb-6">
                  We couldn't find anything matching "{searchQuery}". Try selecting another category or check your spelling.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#151515] text-white text-xs font-bold hover:bg-neutral-800 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.some((item) => item.id === product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={(p) => handleAddToCart(p, 1)}
                    onOpenModal={(p) => setSelectedProductForModal(p)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Editorial Promotion Banners */}
        <EditorialBanners onSelectCategory={handleCategorySelect} />

        {/* About Section */}
        <AboutSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Location & Map Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onSelectCategory={handleCategorySelect} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onShowToast={(msg) => showToast(msg, 'success')}
      />

      {/* Slide-over Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        wishlist={wishlist}
        onClose={() => setIsWishlistOpen(false)}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={(p) => handleAddToCart(p, 1)}
        onOpenProductModal={(p) => setSelectedProductForModal(p)}
      />
    </div>
  );
}
