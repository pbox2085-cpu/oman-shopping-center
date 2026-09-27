import { CartItem, Product, StoreInfo } from '../types/store';

export function formatPKR(amount: number): string {
  return `PKR ${amount.toLocaleString('en-PK')}`;
}

export function buildWhatsAppCartMessage(
  store: StoreInfo,
  cart: CartItem[],
  customerNote?: string,
  deliveryAddress?: string
): string {
  if (cart.length === 0) return '';

  let total = 0;
  let itemsText = '';

  cart.forEach((item, index) => {
    const itemTotal = item.product.price * item.quantity;
    total += itemTotal;
    itemsText += `${index + 1}. *${item.product.name}*\n   Qty: ${item.quantity} × ${formatPKR(item.product.price)} = ${formatPKR(itemTotal)}\n`;
  });

  let message = `*NEW ORDER - ${store.name}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  message += itemsText;
  message += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Total Amount:* ${formatPKR(total)}\n`;

  if (deliveryAddress && deliveryAddress.trim()) {
    message += `*Delivery / Pickup Address:* ${deliveryAddress.trim()}\n`;
  }

  if (customerNote && customerNote.trim()) {
    message += `*Note / Instructions:* ${customerNote.trim()}\n`;
  }

  message += `\n_Please confirm stock availability and delivery timing in Turbat. Thank you!_`;

  return message;
}

export function buildWhatsAppSingleProductMessage(
  store: StoreInfo,
  product: Product
): string {
  let message = `Hello *${store.name}*!\n\n`;
  message += `I am interested in:\n`;
  message += `• *${product.name}*\n`;
  message += `• Category: ${product.category.toUpperCase()}\n`;
  message += `• Price: *${formatPKR(product.price)}*\n\n`;
  message += `Is this item currently available in stock at your Turbat store?`;
  return message;
}

export function getWhatsAppUrl(phoneNumber: string, text: string): string {
  const cleaned = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
}
