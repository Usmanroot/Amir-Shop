import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, clearCart } = useCart();

  const TELEGRAM_BOT_TOKEN = '8904095134:AAEAxpD269LdjRVWjth_nl5bNE2VA_PoGPo'; 
  const TELEGRAM_CHAT_ID = '8169174686';

  const handleSubmit = async () => {
    if (cart.length === 0) return alert("Корзина пуста!");

    let message = `🚀 **Новый заказ!**\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. 📦 ${item.name}\n`;
      message += `   Кол-во: ${item.quantity} шт.\n`;
      message += `   Цена: ${(item.price * item.quantity).toLocaleString()} so'm\n\n`;
    });

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💰 **Итого: ${totalPrice.toLocaleString()} so'm**`;

  
  try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        alert("Заказ отправлен продавцу в Telegram!");
        clearCart();
      } else {
        throw new Error('Ошибка при отправке');
      }
    } catch (error) {
      console.error("Ошибка TG:", error);
      alert("Ошибка! Проверьте интернет или настройки бота.");
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className='max-w-[1200px] mx-auto p-10'>
      <h1 className='text-4xl font-bold mb-10'>Your Cart</h1>
      
      {cart.length === 0 ? (
        <p className='text-2xl opacity-50'>Your cart is empty... Go get some snacks!</p>
      ) : (
        <div className='flex flex-col gap-5'>
          {cart.map(item => (
            <div key={item.id} className='flex justify-between items-center border-b pb-4'>
              <div className='flex items-center gap-4'>
                <img src={item.image} alt={item.name} className='w-20 h-20 object-contain' />
                <div>
                  <p className='text-xl font-bold'>{item.name}</p>
                  <p>{item.quantity} x {item.price.toLocaleString()} so'm</p>
                </div>
              </div>
              <p className='text-xl font-bold'>{(item.quantity * item.price).toLocaleString()} so'm</p>
            </div>
          ))}
          
          <div className='mt-10 flex justify-between items-center'>
            <p className='text-3xl font-bold'>Total: {totalPrice.toLocaleString()}, 000 so'm</p>
            <button 
              onClick={handleSubmit}
              className='bg-[#5fa3e3] text-white px-10 py-4 rounded-xl text-2xl hover:bg-blue-400 transition-all active:scale-95'
            >
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}