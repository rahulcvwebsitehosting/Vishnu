import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { Filter } from 'lucide-react';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'softy' | 'drink' | 'sundae'>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'softy', label: 'Softies' },
    { id: 'drink', label: 'Drinks & Shakes' },
    { id: 'sundae', label: 'Sundaes' },
  ];

  const filteredItems = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter || (filter === 'softy' && item.category === 'special'));

  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">Deliciously Affordable</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mt-2 mb-4">Our Menu</h1>
          <p className="text-gray-600">
            From our legendary ₹2 (now ₹10) cones to rich Faloodas. We use fresh milk and quality ingredients.
            <br />
            <span className="text-xs text-gray-400 mt-2 block">*Prices subject to change. Visit store for latest rates.</span>
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                filter === cat.id 
                  ? 'bg-brand-dark text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-50"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.isBestseller && (
                    <div className="absolute top-3 left-3 bg-brand-yellow text-brand-dark text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                      Best Seller
                    </div>
                  )}
                  {item.isVegetarian && (
                    <div className="absolute top-3 right-3 bg-white p-1 rounded-sm shadow-sm">
                      <div className="w-3 h-3 border-2 border-green-500 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-lg font-bold text-brand-dark leading-tight">{item.name}</h3>
                    <span className="bg-brand-pink/10 text-brand-pink font-bold px-2 py-1 rounded text-sm">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 min-h-[40px]">{item.description}</p>
                  <button className="w-full py-2.5 rounded-xl border border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-colors text-sm">
                    Available In-Store
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm border border-brand-pink/20 max-w-3xl mx-auto">
          <h4 className="font-bold text-xl mb-2 text-brand-pink">Bulk Orders?</h4>
          <p className="text-gray-600 mb-6">We undertake bulk orders for birthday parties, college culturals, and weddings. Get the famous taste at your event!</p>
          <a href="/contact" className="inline-block bg-brand-pink text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-dark transition-colors">
            Contact for Bulk Orders
          </a>
        </div>

      </div>
    </div>
  );
};

export default Menu;
