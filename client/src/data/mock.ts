import { assets } from "@/assets/assets"
export interface Nutrient {
  _id: string
  name: string
  amount: string
  benefit?: string
}

export interface MenuItem {
  _id: string
  name: string
  price: number
  calories: number
  category: string
  image: string
  model3D?: string
  nutrients: Nutrient[]
}

export const mockMenuItems: MenuItem[] = [
  {
    _id: "1",
    name: "Classic Cheeseburger",
    price: 12.99,
    calories: 650,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/burger.glb",
    nutrients: [
      { _id: "n1", name: "Protein", amount: "30g", benefit: "Muscle building" },
      { _id: "n2", name: "Carbs", amount: "45g", benefit: "Energy source" },
      { _id: "n3", name: "Fat", amount: "35g", benefit: "Satiety" },
      { _id: "n4", name: "Vitamin C", amount: "15%", benefit: "Immunity" },
    ]
  },
  {
    _id: "2",
    name: "Avocado Toast",
    price: 9.50,
    calories: 350,
    category: "Starters",
    image: assets.menu.avacado_toast,
    model3D: "/models/avocado.glb",
    nutrients: [
      { _id: "n5", name: "Good Fats", amount: "15g", benefit: "Heart health" },
      { _id: "n6", name: "Fiber", amount: "8g", benefit: "Digestion" },
      { _id: "n7", name: "Protein", amount: "6g", benefit: "Muscle support" },
    ]
  },
  {
    _id: "3",
    name: "Grilled Salmon",
    price: 24.00,
    calories: 420,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/salmon.glb",
    nutrients: [
      { _id: "n8", name: "Protein", amount: "40g", benefit: "Muscle repair" },
      { _id: "n9", name: "Omega-3", amount: "High", benefit: "Brain health" },
      { _id: "n10", name: "Vitamin D", amount: "50%", benefit: "Bone strength" },
    ]
  },
  {
    _id: "4",
    name: "Chocolate Lava Cake",
    price: 8.99,
    calories: 850,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/cake.glb",
    nutrients: [
      { _id: "n11", name: "Carbs", amount: "85g", benefit: "Quick energy" },
      { _id: "n12", name: "Sugar", amount: "60g", benefit: "Sweet treat" },
      { _id: "n13", name: "Fat", amount: "45g", benefit: "Rich flavor" },
    ]
  },
  {
    _id: "5",
    name: "Caesar Salad",
    price: 11.00,
    calories: 320,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=800",
    model3D: "/models/salad.glb",
    nutrients: [
      { _id: "n14", name: "Vitamin K", amount: "40%", benefit: "Bone health" },
      { _id: "n15", name: "Fiber", amount: "4g", benefit: "Digestion" },
      { _id: "n16", name: "Calcium", amount: "15%", benefit: "Strong teeth" },
    ]
  },
  {
    _id: "6",
    name: "Spicy Chicken Wings",
    price: 14.50,
    calories: 780,
    category: "Starters",
    image: assets.menu.spicy_chicken_wings,
    model3D: "/models/wings.glb",
    nutrients: [
      { _id: "n17", name: "Protein", amount: "28g", benefit: "Muscle building" },
      { _id: "n18", name: "Fat", amount: "55g", benefit: "Energy" },
      { _id: "n19", name: "Sodium", amount: "1200mg", benefit: "Electrolytes" },
    ]
  }
]