import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description: "Layer up with stylish hoodies.",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    description: "Unleash your accessory obsession!",
  },
  {
    _id: uuid(),
    categoryName: "Posters",
    description: "Unleash your inner collector's vibe!",
  },
];
