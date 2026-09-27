import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Heart, Menu, X, Phone, MapPin, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onFocusSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onFocusSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Categories', href: '#categories' },
    { label: 'Shop', href: '#shop' },
    { label: 'Why Us', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Visit Store', href: '#location' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#151515] text-[#dfbd7e] px-4 py-2 text-center text-xs tracking-wider font-medium flex items-center justify-center gap-2 border-b border-neutral-800">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>✦ Oman General Store • Turbat, Balochistan • In-Store & WhatsApp Home Delivery ✦</span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80'
            : 'bg-[#faf9f6] border-b border-neutral-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group shrink-0">
              <div className="w-11 h-11 bg-[#151515] text-white rounded-xl flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-[#8d6a35] transition-colors">
                OG
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#171717] leading-none font-['Manrope']">
                  Oman General Store
                </span>
                <span className="text-[10px] tracking-widest text-[#8d6a35] font-semibold uppercase mt-1 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 inline" /> Turbat • Balochistan
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-neutral-700 hover:text-[#8d6a35] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8d6a35] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search button */}
              <button
                onClick={onFocusSearch}
                className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 hover:text-black transition-all shadow-xs"
                title="Search products"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Wishlist button */}
              <button
                onClick={onOpenWishlist}
                className="w-10 h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 hover:text-black transition-all shadow-xs relative"
                title="Wishlist"
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center px-1">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart button */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#151515] text-white hover:bg-[#282828] transition-all shadow-sm active:scale-95"
                title="Shopping Cart"
                aria-label="Shopping Cart"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-[#dfbd7e]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] bg-[#b28a4a] text-white rounded-full text-[10px] font-bold flex items-center justify-center px-1 border-2 border-[#151515]">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold hidden sm:inline">Cart</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-neutral-800 hover:text-[#8d6a35] py-1 border-b border-neutral-100 last:border-none"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Directly
              </a>
              <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                <span>Turbat, Balochistan</span>
                <span>Sat-Thu: 9AM-10PM</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
