import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-brand-cream overflow-hidden">
      
      {/* Header */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-brand-dark mb-6">
            The <span className="text-brand-pink">Legacy</span> of <br/>West Mambalam
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            How a small shop in a quiet colony became a sensation for ice cream lovers across Chennai.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/igloo-old/600/800" 
              alt="Shop Old Photo" 
              className="rounded-3xl shadow-2xl rotate-2 border-8 border-white"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-yellow p-8 rounded-full shadow-xl hidden md:block">
              <p className="font-display text-3xl font-bold text-brand-dark">25+</p>
              <p className="text-xs font-bold uppercase tracking-wider">Years</p>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h2 className="font-display text-3xl font-bold text-brand-dark">It Started with a Vision (and ₹2)</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in the 90s, Vinu's Igloo wasn't trying to be a fancy gelato parlor. The mission was simple: provide a cool treat that any school kid could afford with their pocket money.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of West Mambalam's residential area (Ramakrishnapuram), we became the go-to spot for evening walks. Our famous softy cone, priced at just ₹2 for nearly two decades, became a legend. While inflation has pushed prices up slightly, our commitment to affordability remains unchanged.
            </p>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-brand-pink shadow-sm">
              <p className="italic text-gray-700 font-medium">
                "We don't sell ice cream; we sell childhood memories to grown-ups and happiness to children."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-[3rem] p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">🍦</div>
              <h3 className="font-bold text-xl mb-3">Quality First</h3>
              <p className="text-gray-500 text-sm">Fresh milk, daily production, and no compromises on hygiene.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">💰</div>
              <h3 className="font-bold text-xl mb-3">Pocket Friendly</h3>
              <p className="text-gray-500 text-sm">Prices that make you double-check the menu. Happiness for everyone.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">❤️</div>
              <h3 className="font-bold text-xl mb-3">Community Love</h3>
              <p className="text-gray-500 text-sm">A landmark meeting point for friends, families, and couples.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
