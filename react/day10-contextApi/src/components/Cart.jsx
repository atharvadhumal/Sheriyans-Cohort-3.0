import React from "react";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

const Cart = ({ cartItems, setCartItems, setIsCartOpen }) => {
  // Update Item Quantity
  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = subtotal > 0 ? 15.0 : 0.0;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto w-full py-4">
      {/* Back Button & Title */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-600"
            title="Back to products"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-slate-800">Your Cart</h1>
        </div>
        <span className="text-sm text-slate-500 font-medium">
          {cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)} Items
        </span>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-20 bg-white border border-slate-100 rounded-lg p-2 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-800 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-bold text-slate-900 mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      className="p-1.5 text-slate-600 hover:bg-slate-200 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-xs font-semibold text-slate-800">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                      className="p-1.5 text-slate-600 hover:bg-slate-200 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-900 w-16 text-right">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-slate-800 mb-4 pb-3 border-b border-slate-100">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-semibold text-slate-800">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between text-base font-bold text-slate-900">
                <span>Total</span>
                <span className="text-indigo-600">${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white py-3 rounded-lg font-medium transition-all shadow-sm">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200 shadow-sm">
          <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-800">
            Your cart is empty
          </h2>
          <p className="text-slate-500 text-sm mt-1 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button
            onClick={() => setIsCartOpen(false)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;