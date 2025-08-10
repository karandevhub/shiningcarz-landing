'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { categories, products } from '@/src/utils/constants';

const ProductsSection = ({ initialCategory = 'exterior' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return (
    <section id="products" className="py-20 bg-muted/20">
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
                      setActiveCategory(category.id);
                    }}
                    className={`w-full text-left p-6 rounded-lg transition-all duration-300 ${activeCategory === category.id
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
              {products[activeCategory]?.map((product) => (
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
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
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