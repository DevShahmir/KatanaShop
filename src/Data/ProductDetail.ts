export type Product = {
  id: number;
  img:string;
  name: string;
  price: number;
  origin: string;
  inStock: boolean;
  tags: string[];
  category: "ceremonial" | "battle" | "display";
};

import katanaBattle from "../assets/katana_battle.png";
import katanaDisplay from "../assets/katana_display.png";
import katanaCeremonial from "../assets/katana_ceremonial.png";
import katanaNinja from "../assets/katana_ninja.png";
import katanaPremium from "../assets/katana_premium.png";

export const Products: Product[] = [
  {
    id: 1,
    img: katanaBattle,
    name: "Oni Katana",
    price: 299.99,
    origin: "Kyoto, Japan",
    inStock: true,
    tags: ["handmade", "carbon steel", "limited"],
    category: "battle"
  },
  {
    id: 2,
    img: katanaDisplay,
    name: "Shadow Blade",
    price: 349.99,
    origin: "Osaka",
    inStock: true,
    tags: ["carbon steel"],
    category: "display"
  },
  {
    id: 3,
    img: katanaCeremonial,
    name: "Ghost Edge",
    price: 199.99,
    origin: "Tokyo",
    inStock: false,
    tags: ["beginner"],
    category: "ceremonial"
  },
  {
    id: 4,
    img: katanaBattle,
    name: "Demon Slayer",
    price: 499.99,
    origin: "Kyoto",
    inStock: true,
    tags: ["handmade", "limited"],
    category: "battle"
  },
  {
    id: 5,
    img: katanaPremium,
    name: "Samurai Spirit",
    price: 399.99,
    origin: "Osaka",
    inStock: false,
    tags: ["carbon steel", "limited"],
    category: "display"
  },
  {
    id: 6,
    img: katanaNinja,
    name: "Ninja Star",
    price: 29.99,
    origin: "Tokyo",
    inStock: true,
    tags: ["beginner"],
    category: "ceremonial"
  },
  {
    id: 7,
    img: katanaBattle,
    name: "Dragon Fang",
    price: 599.99,
    origin: "Kyoto",
    inStock: true,
    tags: ["handmade", "carbon steel"],
    category: "battle"
  },
  {
    id: 8,
    img: katanaDisplay,
    name: "Shadow Dagger",
    price: 149.99,
    origin: "Osaka",
    inStock: false,
    tags: ["carbon steel"],
    category: "display"
  },
  {
    id: 9,
    img: katanaCeremonial,
    name: "Phantom Blade",
    price: 249.99,
    origin: "Tokyo",
    inStock: true,
    tags: ["beginner"],
    category: "ceremonial"
  },
  {
    id: 10,
    img: katanaPremium,
    name: "Samurai Edge",
    price: 449.99,
    origin: "Kyoto",
    inStock: true,
    tags: ["handmade", "limited"],
    category: "battle"
  },
  {
    id: 11,
    img: katanaNinja,
    name: "Ninja Shadow",
    price: 199.99,
    origin: "Osaka",
    inStock: false,
    tags: ["carbon steel"],
    category: "display"
  },
  {
    id: 12,
    img: katanaBattle,
    name: "Dragon Slayer",
    price: 549.99,
    origin: "Tokyo",
    inStock: true,
    tags: ["beginner"],
    category: "ceremonial"
  },
];
