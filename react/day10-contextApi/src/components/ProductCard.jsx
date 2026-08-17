import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ products, setCartItems }) => {
  if (!products) return null;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full group">
      {/* Product Image & Category Badge */}
      <div className="relative p-6 bg-white flex items-center justify-center h-60 border-b border-slate-100">
        <img
          src={products.image}
          alt={products.title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {products.category}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          {products.rating && (
            <div className="flex items-center space-x-1.5 mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-semibold text-slate-700">
                {products.rating.rate}
              </span>
              <span className="text-xs text-slate-400">
                ({products.rating.count})
              </span>
            </div>
          )}

          {/* Title */}
          <h3
            className="font-semibold text-slate-800 text-sm mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors"
            title={products.title}
          >
            {products.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-500 line-clamp-2 mb-4">
            {products.description}
          </p>
        </div>

        {/* Footer: Price & Add to Cart */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-medium">
              Price
            </span>
            <span className="text-lg font-bold text-slate-900">
              ${products.price?.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => setCartItems(prev => [...prev, products] )}
            className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white p-2.5 rounded-lg text-sm transition-all duration-150 flex items-center justify-center shadow-sm hover:shadow"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;