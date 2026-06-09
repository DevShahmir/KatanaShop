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

const makeProductArt = (title: string, accent: string, glow: string) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#080808" />
          <stop offset="55%" stop-color="#120b0b" />
          <stop offset="100%" stop-color="#050505" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="${glow}" stop-opacity="0.9" />
          <stop offset="55%" stop-color="${glow}" stop-opacity="0.22" />
          <stop offset="100%" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="blade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f9f4ea" />
          <stop offset="45%" stop-color="#d8d2c7" />
          <stop offset="100%" stop-color="#8f8a80" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)" />
      <rect width="800" height="600" fill="url(#glow)" />
      <circle cx="640" cy="145" r="88" fill="${accent}" fill-opacity="0.1" />
      <circle cx="155" cy="455" r="140" fill="${accent}" fill-opacity="0.08" />
      <path d="M120 435 C230 355, 330 275, 470 190 C545 145, 620 110, 705 88" stroke="${accent}" stroke-opacity="0.28" stroke-width="3" fill="none" />
      <g transform="translate(115 92) rotate(-12 280 210)">
        <rect x="230" y="72" width="40" height="330" rx="18" fill="url(#blade)" transform="rotate(11 250 237)" />
        <rect x="224" y="350" width="54" height="108" rx="10" fill="#1a1a1a" stroke="${accent}" stroke-opacity="0.7" />
        <rect x="196" y="389" width="110" height="20" rx="10" fill="${accent}" fill-opacity="0.92" />
        <rect x="205" y="406" width="92" height="28" rx="8" fill="#2a1f1f" />
        <path d="M248 60 L270 78 L248 92 L226 78 Z" fill="${accent}" fill-opacity="0.88" />
        <path d="M248 102 L262 126 L248 145 L234 126 Z" fill="#ffffff" fill-opacity="0.32" />
        <path d="M248 160 L262 184 L248 203 L234 184 Z" fill="#ffffff" fill-opacity="0.18" />
        <path d="M248 218 L262 242 L248 261 L234 242 Z" fill="#ffffff" fill-opacity="0.12" />
        <path d="M248 276 L262 300 L248 319 L234 300 Z" fill="#ffffff" fill-opacity="0.08" />
        <path d="M248 334 L262 358 L248 377 L234 358 Z" fill="#ffffff" fill-opacity="0.06" />
      </g>
      <text x="56" y="540" fill="#f5f0e6" fill-opacity="0.88" font-family="Georgia, serif" font-size="34" letter-spacing="5">${title}</text>
      <text x="56" y="575" fill="#c9a84c" fill-opacity="0.72" font-family="Arial, sans-serif" font-size="14" letter-spacing="6">KATANA SHOP</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

export const Products: Product[] = [
  {
    id: 1,
    img: makeProductArt("Oni Katana", "#8b0000", "#c9a84c"),
    name: "Oni Katana",
    price: 299.99,
    origin: "Kyoto, Japan",
    inStock: true,
    tags: ["handmade", "carbon steel", "limited"],
    category: "battle"
  },
  {
    id: 2,
    img: makeProductArt("Shadow Blade", "#4a4a4a", "#8b0000"),
    name: "Shadow Blade",
    price: 349.99,
    origin: "Osaka",
    inStock: true,
    tags: ["carbon steel"],
    category: "display"
  },
  {
    id: 3,
    img: makeProductArt("Ghost Edge", "#6d6d6d", "#d8d2c7"),
    name: "Ghost Edge",
    price: 199.99,
    origin: "Tokyo",
    inStock: false,
    tags: ["beginner"],
    category: "ceremonial"
  },
  {
    id: 4,
    img: makeProductArt("Demon Slayer", "#8b1d1d", "#f2c14e"),
    name: "Demon Slayer",
    price: 499.99,
    origin: "Kyoto",
    inStock: true,
    tags: ["handmade", "limited"],
    category: "battle"
  },
  {
    id: 5,
    img: makeProductArt("Samurai Spirit", "#6b4f1d", "#c9a84c"),
    name: "Samurai Spirit",
    price: 399.99,
    origin: "Osaka",
    inStock: false,
    tags: ["carbon steel", "limited"],
    category: "display"
  },
  {
    id: 6,
    img: makeProductArt("Ninja Star", "#202020", "#8b0000"),
    name: "Ninja Star",
    price: 29.99,
    origin: "Tokyo",
    inStock: true,
    tags: ["beginner"],
    category: "ceremonial"
  },
  {
    id: 7,
    img: makeProductArt("Dragon Fang", "#2f5f3a", "#c9a84c"),
    name: "Dragon Fang",
    price: 599.99,
    origin: "Kyoto",
    inStock: true,
    tags: ["handmade", "carbon steel"],
    category: "battle"
  },
  {
    id: 8,
    img: makeProductArt("Shadow Dagger", "#383838", "#8b0000"),
    name: "Shadow Dagger",
    price: 149.99,
    origin: "Osaka",
    inStock: false,
    tags: ["carbon steel"],
    category: "display"
  },
  {
    id: 9,
    img: makeProductArt("Phantom Blade", "#5b1f4d", "#c9a84c"),
    name: "Phantom Blade",
    price: 249.99,
    origin: "Tokyo",
    inStock: true,
    tags: ["beginner"],
    category: "ceremonial"
  },
  {
    id: 10,
    img: makeProductArt("Samurai Edge", "#4b2f1f", "#c9a84c"),
    name: "Samurai Edge",
    price: 449.99,
    origin: "Kyoto",
    inStock: true,
    tags: ["handmade", "limited"],
    category: "battle"
  },
  {
    id: 11,
    img: makeProductArt("Ninja Shadow", "#1e1e1e", "#444444"),
    name: "Ninja Shadow",
    price: 199.99,
    origin: "Osaka",
    inStock: false,
    tags: ["carbon steel"],
    category: "display"

  },
  {
    id: 12,
    img: makeProductArt("Dragon Slayer", "#7d2d1b", "#f2c14e"),
    name: "Dragon Slayer",
    price: 549.99,
    origin: "Tokyo",
    inStock: true,
    tags: ["beginner"],

    category: "ceremonial"
  },
];
