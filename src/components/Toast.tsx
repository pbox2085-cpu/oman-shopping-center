import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-[#151515] text-white px-5 py-3.5 rounded-full shadow-2xl border border-white/10 animate-bounce-in max-w-[90vw] text-sm font-medium">
      {type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      ) : (
        <Info className="w-4 h-4 text-[#dfbd7e] shrink-0" />
      )}
      <span className="truncate">{message}</span>
      <button
        onClick={onClose}
        className="ml-1 p-1 text-neutral-400 hover:text-white rounded-full transition-colors"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
