import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "10+ Years of Premium Car Care",
  "100k+ Happy Customers",
  "99% Customer Satisfaction",
  "State-of-the-Art Car Wash Studio",
  "Eco-Friendly Water Recycling System 🌱",
  "Specialists in Luxury Car Detailing 🚗✨",
  "Serving Noida with Pride 🏆",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
