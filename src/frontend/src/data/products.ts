export type Category = "Footballs" | "Boots" | "Jerseys" | "Accessories";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Phoenix Match Ball",
    category: "Footballs",
    price: 1299,
    image: "/assets/generated/product-football.dim_600x600.jpg",
    description:
      "FIFA-approved match ball. Premium synthetic leather with superior grip and consistent flight.",
  },
  {
    id: 2,
    name: "Street King Football",
    category: "Footballs",
    price: 899,
    image: "/assets/generated/product-football.dim_600x600.jpg",
    description:
      "Built for street warriors. Scuff-resistant, durable, and always game-ready.",
  },
  {
    id: 3,
    name: "Pro Training Ball",
    category: "Footballs",
    price: 699,
    image: "/assets/generated/product-football.dim_600x600.jpg",
    description:
      "Engineered for intensive training. Consistent bounce and perfect weight distribution.",
  },
  {
    id: 4,
    name: "Phoenix Strike Boots",
    category: "Boots",
    price: 3499,
    image: "/assets/generated/product-boots.dim_600x600.jpg",
    description:
      "Unleash explosive power. Carbon fibre sole plate for maximum energy return.",
  },
  {
    id: 5,
    name: "Speed Demon Cleats",
    category: "Boots",
    price: 2799,
    image: "/assets/generated/product-boots.dim_600x600.jpg",
    description:
      "Zero drag, pure acceleration. Lightweight construction for the fastest players.",
  },
  {
    id: 6,
    name: "Turf Warrior Shoes",
    category: "Boots",
    price: 1999,
    image: "/assets/generated/product-boots.dim_600x600.jpg",
    description:
      "Dominate every turf surface. Multi-stud configuration for superior traction.",
  },
  {
    id: 7,
    name: "Phoenix Home Jersey",
    category: "Jerseys",
    price: 1499,
    image: "/assets/generated/product-jersey.dim_600x600.jpg",
    description:
      "The legendary home kit. Moisture-wicking DryFlex tech keeps you cool under pressure.",
  },
  {
    id: 8,
    name: "Away Edition Jersey",
    category: "Jerseys",
    price: 1499,
    image: "/assets/generated/product-jersey.dim_600x600.jpg",
    description:
      "Bold away colors that command attention. Championship-level performance anywhere.",
  },
  {
    id: 9,
    name: "Training Kit",
    category: "Jerseys",
    price: 999,
    image: "/assets/generated/product-jersey.dim_600x600.jpg",
    description:
      "Train like a pro. Breathable mesh panels and ergonomic fit for peak performance.",
  },
  {
    id: 10,
    name: "Pro Shin Guards",
    category: "Accessories",
    price: 449,
    image: "/assets/generated/product-accessories.dim_600x600.jpg",
    description:
      "Hard-shell protection meets featherlight comfort. Stay safe without slowing down.",
  },
  {
    id: 11,
    name: "Goalkeeper Gloves",
    category: "Accessories",
    price: 799,
    image: "/assets/generated/product-accessories.dim_600x600.jpg",
    description:
      "Superior grip latex palm for shot-stopping confidence. Spinal finger protection.",
  },
  {
    id: 12,
    name: "Captain Armband",
    category: "Accessories",
    price: 249,
    image: "/assets/generated/product-accessories.dim_600x600.jpg",
    description:
      "Wear the badge of leadership. Elastic fit with The Phoenix Empire crest.",
  },
];

export const featuredProducts = products.filter((p) =>
  [1, 4, 7, 10].includes(p.id),
);
