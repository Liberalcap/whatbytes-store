export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "Electronics" | "Clothing" | "Home";
  brand: string;
  image: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    description:
      "High-performance running shoes with advanced cushioning technology for maximum comfort during long runs.",
    category: "Clothing",
    brand: "Nike",
    image: "/images/shoes.jpg",
    rating: 4,
    reviews: 128,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149,
    description:
      "Premium over-ear wireless headphones with active noise cancellation.",
    category: "Electronics",
    brand: "Sony",
    image: "/images/headphone.jpg",
    rating: 5,
    reviews: 256,
  },
  {
    id: 3,
    title: "Bagpack",
    price: 129,
    description:
      "Durable and spacious backpack with multiple compartments.",
    category: "Home",
    brand: "Caycroy",
    image: "/images/bagpack.jpg",
    rating: 4,
    reviews: 89,
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    description:
      "Feature-packed smartwatch with health monitoring and GPS tracking.",
    category: "Electronics",
    brand: "Apple",
    image: "/images/smartwatch.jpg",
    rating: 5,
    reviews: 312,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    description:
      "Stylish polarized sunglasses with UV400 protection.",
    category: "Clothing",
    brand: "RayBan",
    image: "/images/sunglasses.jpg",
    rating: 4,
    reviews: 67,
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    description:
      "Professional-grade digital camera with 24MP sensor and 4K video.",
    category: "Electronics",
    brand: "Canon",
    image: "/images/digitalcam.jpg",
    rating: 5,
    reviews: 143,
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    description:
      "Premium quality cotton t-shirt with a comfortable fit.",
    category: "Clothing",
    brand: "H&M",
    image: "/images/tshirt.jpg",
    rating: 3,
    reviews: 204,
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    description:
      "Flagship smartphone with OLED display and triple camera system.",
    category: "Electronics",
    brand: "Apple",
    image: "/images/mobilephone.jpg",
    rating: 4,
    reviews: 589,
  },
  {
    id: 9,
    title: "Desk Lamp",
    price: 49,
    description:
      "Modern LED desk lamp with adjustable brightness.",
    category: "Home",
    brand: "Philips",
    image: "/images/lamp.jpg",
    rating: 4,
    reviews: 77,
  },
  {
    id: 10,
    title: "Coffee Maker",
    price: 89,
    description:
      "Programmable coffee maker with thermal carafe.",
    category: "Home",
    brand: "Caycroy",
    image: "/images/coffeemaker.jpg",
    rating: 4,
    reviews: 198,
  },
  {
    id: 11,
    title: "Bluetooth Speaker",
    price: 79,
    description:
      "Portable waterproof Bluetooth speaker with 360-degree sound.",
    category: "Electronics",
    brand: "Sony",
    image: "/images/bluetoothspeaker.jpg",
    rating: 4,
    reviews: 165,
  },
  {
    id: 12,
    title: "Yoga Mat",
    price: 39,
    description:
      "Non-slip premium yoga mat with extra cushioning.",
    category: "Home",
    brand: "H&M",
    image: "/images/yogamat.jpg",
    rating: 5,
    reviews: 312,
  },
];

export const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Home",
] as const;

export const brands = [
  "All",
  "Apple",
  "Sony",
  "Nike",
  "Canon",
  "RayBan",
  "H&M",
  "Philips",
  "Caycroy",
] as const;