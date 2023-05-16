import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "The Wall Art Hoodie",
    price: 799,
    originalPrice: 1499,
    averageRating: 4.5,
    category: "Hoodies",
    onSale: true,
    inStock: true,
    img: "https://bit.ly/3o3Pa18",
  },
  {
    _id: uuid(),
    name: "Monaco Grand Prix Circuit Phone Case",
    price: 599,
    originalPrice: 999,
    averageRating: 3.8,
    category: "Accessories",
    onSale: false,
    inStock: true,
    img: "https://bit.ly/3BtoaLv",
  },
  {
    _id: uuid(),
    name: "Pulp Fiction Tribute Poster",
    price: 189,
    originalPrice: 299,
    averageRating: 4.2,
    category: "Posters",
    onSale: false,
    inStock: false,
    img: "https://bit.ly/3pKDJvT",
  },
];
