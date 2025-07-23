import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { link } from 'fs';

interface ProductsSectionProps {
  initialCategory?: 'exterior' | 'interior' | 'tools';
}

const ProductsSection = ({ initialCategory = 'exterior' }: ProductsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: 'exterior', name: 'Exterior Care', description: 'Premium exterior detailing products' },
    { id: 'interior', name: 'Interior Care', description: 'Luxury interior cleaning solutions' },
    //{ id: 'protection', name: 'Paint Protection', description: 'Advanced protection systems' },
    { id: 'tools', name: 'Professional Tool', description: 'High-quality detailing equipment' },
  ];

  const products = {
    tools: [
      {
        id: 1,
        name: "Pistolet",
        description: "A handheld steam gun used for precise and effective cleaning with high-pressure steam.",
        price: "Rs. 5,500",
        
        image: "/assets/pistolet-parowy-250x250.webp",
        link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=pistolet"
      },
      {
        id: 2,
        name: "Paint Spray Booth",
        description: "An enclosed booth designed for safe and controlled automotive painting applications.",
        price: "Rs. 5,00,000",
        
        image: "/assets/paint-spray-booth-250x250.webp",
        link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=Paint+Spray+Booth"
      },
      {
        id: 3,
        name: "Meguiars",
        description: "A liquid polish used to shine and protect the surfaces of cars and bikes.",
        price: "Rs. 5000",
       
        image: "/assets/meguiars-speed-glaze-250x250.webp",
         link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=Meguiars+Speed+Glaze"
      },
      {
        id: 4,
        name: "SCZ",
        description: "A powerful hydraulic lift for raising vehicles during servicing or repairs.",
        price: "Rs. 99,999",
        
        image: "/assets/scz-1-250x250.webp",
         link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=scz"
      },
      {
        id: 5,
        name: "/assets/Eco Steam Washer",
        description: "A compact, top-loading steam washer used for eco-friendly vehicle cleaning.",
        price: "Rs. 2,40,000",
        
        image: "/assets/ecosteam-steam-washer-250x250.webp",
        link:"https://www.indiamart.com/shiningcarzprivatelimited/car-washer.html"
      },
      {
        id: 6,
        name: "Lift",
        description: "A low-profile hydraulic lift for quickly raising vehicles in limited space.",
        price: "Rs. 1,60,000",
        
        image: "/assets/lift13--250x250 (1).webp",
         link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=lift"
      },
      {
        id: 7,
        name: "Steam Car Washer",
        description: "A mobile steam car washer ideal for deep cleaning using minimal water.",
        price: "Rs. 1,80,000",
        
        image: "/assets/ecosteam-steam-car-washer-250x250.webp",
         link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=steam+washer"
      },
      {
        id: 8,
        name: "Automatic Car Washing",
        description: "A fully automated car wash system delivering high-pressure water jets for thorough cleaning.",
        price: "Rs. 5,999",
        
        image: "/assets/automatic-car-washing-machine-250x250.webp",
         link:"https://www.indiamart.com/shiningcarzprivatelimited/search.html?ss=car+washing"
      }
    ],
    interior: [
      {
        id: 9,
        name: "Blogs Cleaning",
        description: "A specialist sprays disinfectant on a car seat for deep interior cleaning and sanitization.",
        price: "Rs. 899",
        rating: 4.9,
        image: "/assets/Blogs Cleaning.webp",
        link: "https://app.shiningcarz.in/"
      },
      {
        id: 10,
        name: "Upholstery Cleaner ",
        description: "Leather car seats being polished and conditioned with care using detailing tools.",
        price: "Rs. 2000",
        rating: 4.7,
        image: "/assets/Car_Cleaning_with_Upholstery_Cleaner.webp",
        link: "https://app.shiningcarz.in/"
      },
      {
        id: 11,
        name: "Micro Fiber Cloth",
        description: "Dusting and wiping the dashboard to restore a clean, glossy interior finish.",
        price: "Rs. 1499",
        rating: 4.8,
        image: "/assets/wb 1.webp",
        link: "https://app.shiningcarz.in/"
      },
      {
        id: 12,
        name: "Deep Interior Cleaning",
        description: "Thorough cleaning of the gear console using a spray and microfiber cloth.",
        price: "Rs.2499",
        rating: 4.9,
        image: "/assets/wb 2.webp",
        link: "https://app.shiningcarz.in/"
      },
    ],
    exterior: [
      {
        id: 13,
        name: "Tire Pressure Wash",
        description: "Powerful pressure wash targeting the wheels and lower body for deep cleaning.",
        price: "Rs. 1099",
        rating: 4.9,
        image: "/assets/exterior 1.webp",
        link: "https://app.shiningcarz.in/"
      },
      {
        id: 14,
        name: "Car Polishing",
        description: "A professional polishes the car’s surface to restore its glossy shine.",
        price: "Rs. 2999",
        rating: 4.8,
        image: "/assets/exterior 2.webp",
        link: "https://app.shiningcarz.in/"
      },
      {
        id: 15,
        name: "Hand Washing Car",
        description: "Detailed hand wash with foam for a spotless and shiny car exterior.",
        price: "Rs. 1599",
        rating: 4.7,
        image: "/assets/exterior 3.webp",
        link: "https://app.shiningcarz.in/"
      },
      {
        id: 16,
        name: "Car Foam Wash",
        description: "A luxury car undergoing a high-foam exterior wash.",
        price: "Rs. 1799",
        rating: 4.9,
        image: "/assets/exterior 4.jpg",
        link: "https://app.shiningcarz.in/"
      },
    ]
  };

  return (
    <section id="products"  className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Our Premium
            <span className="block gold-gradient bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover our curated collection of premium automotive care products designed for perfection.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories - Fixed on left */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold font-playfair mb-6">Categories</h3>
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    data-category={category.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(category.id as 'exterior' | 'interior' | 'tools');
                    }}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'luxury-card border-primary/50'
                        : 'luxury-card hover:border-accent/40'
                    }`}
                  >
                    <h4 className="text-lg font-semibold mb-2">{category.name}</h4>
                    <p className="text-foreground/70 text-sm">{category.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products - Scrollable on right */}
          <div className="lg:w-2/3">
            <div className="space-y-8">
              {products[activeCategory as keyof typeof products]?.map((product) => (
                <div key={product.id} className="luxury-card p-8 shine-effect">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          
                        </div>
                        
                      </div>
                      
                      <h4 className="text-2xl font-bold font-playfair">{product.name}</h4>
                      <p className="text-foreground/80">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          {activeCategory === 'exterior' || activeCategory === 'interior' ? (
                            <>
                              <span className="text-sm text-red-600 mb-1">starting from</span>
                              <span className="text-3xl font-bold text-primary">{product.price}</span>
                            </>
                          ) : (
                            <span className="text-3xl font-bold text-primary">{product.price}</span>
                          )}
                        </div>
                        {product.link ? (
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button type="button" className="luxury-button">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              {activeCategory === 'tools' ? 'Buy Now' : 'Book Now'}
                            </Button>
                          </a>
                        ) : (
                          <Button type="button" className="luxury-button" onClick={(e) => e.preventDefault()}>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            {activeCategory === 'tools' ? 'Buy Now' : 'Book Now'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;