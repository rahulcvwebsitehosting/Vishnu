import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { MENU_ITEMS, YOUTUBE_FEATURES } from '../constants';

const Home: React.FC = () => {
  const bestsellers = MENU_ITEMS.filter(item => item.isBestseller).slice(0, 3);

  return (
    <div className="overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 bg-brand-cream overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-white px-4 py-1 rounded-full shadow-sm border border-gray-100 mb-6">
                <span className="text-brand-pink font-bold text-xs tracking-wider uppercase">West Mambalam's Finest</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-brand-dark mb-6">
                Chennai's Iconic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400">
                  ₹2 Ice Cream
                </span>
                <span className="text-4xl align-top text-gray-400">*</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Taste the nostalgia! Serving smiles since 1995 with our legendary soft serves, refreshing rose milk, and juices. The coolest spot in West Mambalam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu" className="bg-brand-pink text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-pink/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  View Full Menu <ArrowRight size={20} />
                </Link>
                <a href="https://maps.google.com/?q=Vinu's+Igloo+West+Mambalam" target="_blank" rel="noreferrer" className="bg-white text-brand-dark border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <MapPin size={20} className="text-brand-teal" />
                  Locate Us
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/50/50`} alt="User" className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p>Loved by 10,000+ happy customers</p>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="https://picsum.photos/seed/igloo-hero/600/600" 
                  alt="Vinu's Igloo Famous Softy" 
                  className="w-full max-w-[500px] mx-auto rounded-[3rem] shadow-2xl rotate-3 border-4 border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Badge */}
                <div className="absolute top-10 -right-4 bg-yellow-400 text-brand-dark font-bold p-4 rounded-full shadow-lg h-24 w-24 flex items-center justify-center text-center leading-tight rotate-12 transform hover:scale-110 transition-transform cursor-pointer">
                  Since <br/>1995
                </div>
              </div>
              
              {/* Decorative elements behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-full -z-10 blur-xl"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="bg-brand-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-white/10 p-3 rounded-full"><Clock className="text-brand-yellow"/></div>
              <div>
                <p className="font-bold text-lg">Open Everyday</p>
                <p className="text-gray-400 text-sm">10:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-white/10 p-3 rounded-full"><MapPin className="text-brand-pink"/></div>
              <div>
                <p className="font-bold text-lg">West Mambalam</p>
                <p className="text-gray-400 text-sm">Opp. Ayodhya Mandapam Area</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-white/10 p-3 rounded-full"><Star className="text-brand-teal"/></div>
              <div>
                <p className="font-bold text-lg">4.3/5 Rating</p>
                <p className="text-gray-400 text-sm">On Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-dark mb-4">Crowd Favorites</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These are the items that made us famous. From our signature softy to the refreshing Rose Milk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-4 shadow-xl shadow-gray-100 hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-64">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-dark shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-display text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <Link to="/menu" className="block w-full text-center py-2 rounded-xl bg-gray-50 text-brand-dark font-bold hover:bg-brand-pink hover:text-white transition-colors">
                    Order Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / MEDIA */}
      <section className="py-20 bg-brand-pink/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-brand-pink font-bold tracking-wider uppercase text-sm">As Seen On YouTube</span>
              <h2 className="font-display text-4xl font-bold text-brand-dark mt-2">Chennai's Internet Sensation</h2>
              <p className="text-gray-600 mt-4">Top food vloggers love us. See what they have to say about the Vinu's Igloo experience.</p>
            </div>
            <a href="https://www.youtube.com/results?search_query=vinus+igloo" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-red-600 font-bold hover:underline mt-4 md:mt-0">
              Watch more on YouTube <ArrowRight size={16}/>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {YOUTUBE_FEATURES.map((video) => (
              <a 
                key={video.id} 
                href={video.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-video shadow-lg"
              >
                <img src={video.thumbnailUrl} alt={video.videoTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="font-bold truncate">{video.videoTitle}</p>
                  <p className="text-xs opacity-80">{video.channelName} • {video.views} views</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
             
             <div className="relative z-10">
               <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Craving something sweet?</h2>
               <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Drop by our West Mambalam outlet today. The queue moves fast, and the ice cream is always cold!</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link to="/menu" className="bg-brand-pink text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-brand-pink transition-colors">
                   Check Menu
                 </Link>
                 <Link to="/locations" className="bg-transparent border border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-brand-dark transition-colors">
                   Get Directions
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
