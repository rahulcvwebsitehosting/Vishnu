import React, { useState } from 'react';
import { BRANCHES } from '../constants';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Locations: React.FC = () => {
  const [activeBranchId, setActiveBranchId] = useState(BRANCHES[0].id);
  const activeBranch = BRANCHES.find(b => b.id === activeBranchId) || BRANCHES[0];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* List of Branches */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h1 className="font-display text-4xl font-bold text-brand-dark mb-2">Visit Us</h1>
              <p className="text-gray-500">We are expanding! Find the Vinu's Igloo nearest to you.</p>
            </div>

            <div className="space-y-4">
              {BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border-2 ${
                    activeBranchId === branch.id 
                      ? 'border-brand-pink bg-brand-pink/5 shadow-md' 
                      : 'border-gray-100 bg-white hover:border-brand-pink/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-brand-dark">{branch.name}</h3>
                    {branch.isPrimary && (
                      <span className="bg-brand-yellow text-xs font-bold px-2 py-1 rounded">HQ</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{branch.address}</p>
                  <div className="flex items-center gap-4 text-sm font-medium">
                    <div className="flex items-center gap-1 text-gray-700">
                      <Phone size={14} /> {branch.phone}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-brand-teal/10 p-6 rounded-2xl">
              <h4 className="font-bold flex items-center gap-2 mb-2 text-brand-dark">
                <Clock size={18} /> Opening Hours
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Mon - Sun</span>
                  <span className="font-bold">10:00 AM - 11:00 PM</span>
                </li>
              </ul>
              <p className="text-xs mt-4 text-gray-500 italic">Hours might vary on festivals.</p>
            </div>
          </div>

          {/* Map Display */}
          <div className="lg:col-span-2 h-[600px] bg-gray-100 rounded-3xl overflow-hidden shadow-inner relative">
            {activeBranch.mapUrl ? (
              <iframe 
                src={activeBranch.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vinus Igloo Map"
              ></iframe>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50">
                <MapPin size={48} className="mb-4 opacity-50"/>
                <p>Map view coming soon for this location.</p>
              </div>
            )}
            
            <div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Selected Location</p>
                <p className="font-bold text-brand-dark">{activeBranch.name}</p>
              </div>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(activeBranch.address)}`}
                target="_blank"
                rel="noreferrer"
                className="bg-brand-pink text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-brand-dark transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Locations;
