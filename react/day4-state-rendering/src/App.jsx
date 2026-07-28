import React from "react";

const App = () => {

  let productsData =[
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    discountPrice: 44.99,
    rating: 4.5,
    stock: 23,
    image: "https://picsum.photos/seed/headphones/400/400",
    description: "Over-ear wireless headphones with noise cancellation and 30-hour battery life.",
    inStock: true,
    tags: ["audio", "wireless", "bestseller"]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 129.99,
    discountPrice: null,
    rating: 4.2,
    stock: 0,
    image: "https://picsum.photos/seed/watch/400/400",
    description: "Track your heart rate, sleep, and workouts with this sleek smart watch.",
    inStock: false,
    tags: ["wearable", "fitness"]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 24.99,
    discountPrice: 19.99,
    rating: 4.8,
    stock: 150,
    image: "https://picsum.photos/seed/tshirt/400/400",
    description: "Soft, breathable, 100% organic cotton t-shirt available in multiple colors.",
    inStock: true,
    tags: ["apparel", "eco-friendly"]
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    category: "Home & Kitchen",
    price: 18.5,
    discountPrice: null,
    rating: 4.6,
    stock: 87,
    image: "https://picsum.photos/seed/bottle/400/400",
    description: "Keeps drinks cold for 24 hours or hot for 12. Leak-proof and BPA-free.",
    inStock: true,
    tags: ["kitchen", "eco-friendly"]
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    category: "Electronics",
    price: 89.99,
    discountPrice: 74.99,
    rating: 4.7,
    stock: 12,
    image: "https://picsum.photos/seed/keyboard/400/400",
    description: "RGB backlit mechanical keyboard with hot-swappable switches.",
    inStock: true,
    tags: ["gaming", "peripherals"]
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports & Outdoors",
    price: 34.99,
    discountPrice: null,
    rating: 4.4,
    stock: 60,
    image: "https://picsum.photos/seed/yogamat/400/400",
    description: "Extra-thick non-slip yoga mat with carrying strap.",
    inStock: true,
    tags: ["fitness", "yoga"]
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug Set",
    category: "Home & Kitchen",
    price: 22.0,
    discountPrice: 15.99,
    rating: 4.3,
    stock: 40,
    image: "https://picsum.photos/seed/mugs/400/400",
    description: "Set of 4 handcrafted ceramic mugs, microwave and dishwasher safe.",
    inStock: true,
    tags: ["kitchen", "gift"]
  },
  {
    id: 8,
    name: "Leather Laptop Backpack",
    category: "Accessories",
    price: 74.99,
    discountPrice: null,
    rating: 4.1,
    stock: 5,
    image: "https://picsum.photos/seed/backpack/400/400",
    description: "Water-resistant leather backpack with padded 15-inch laptop compartment.",
    inStock: true,
    tags: ["bags", "travel"]
  },
  {
    id: 9,
    name: "Bluetooth Portable Speaker",
    category: "Electronics",
    price: 45.0,
    discountPrice: 35.0,
    rating: 4.0,
    stock: 0,
    image: "https://picsum.photos/seed/speaker/400/400",
    description: "Compact waterproof speaker with 12-hour playtime and deep bass.",
    inStock: false,
    tags: ["audio", "portable"]
  },
  {
    id: 10,
    name: "Scented Soy Candle",
    category: "Home & Kitchen",
    price: 14.99,
    discountPrice: null,
    rating: 4.9,
    stock: 200,
    image: "https://picsum.photos/seed/candle/400/400",
    description: "Hand-poured soy candle with lavender and vanilla notes, 40-hour burn time.",
    inStock: true,
    tags: ["home decor", "gift"]
  }
];


  return (
    <div>
      <h1>Hey rendering</h1>

      {
        productsData.map((elem) => {
          return <h1>{elem.name}</h1>
        })
      }

    </div>
  );
};

export default App;
