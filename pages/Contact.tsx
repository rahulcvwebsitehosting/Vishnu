
import React, { useState } from 'react';
import { Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Function to handle WhatsApp Redirection
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Format the message
    const text = `*New Bulk Order Enquiry via Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Event:* ${formData.eventType}%0A` +
                 `*Details:* ${formData.message}`;

    // 2. Redirect to WhatsApp API
    // Using the number from constants (9551699999)
    const phoneNumber = "919551699999"; 
    const waUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    
    // Open in new tab
    window.open(waUrl, '_blank');
    
    // Show success state
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Function to handle Email Redirection (mailto)
  const handleEmailSubmit = () => {
    if(!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone number first.");
      return;
    }

    const subject = `Bulk Order Enquiry: ${formData.eventType}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEvent: ${formData.eventType}%0D%0ADetails: ${formData.message}`;
    
    window.location.href = `mailto:hello@vinusigloo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-24 pb-20 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Info Side */}
          <div className="bg-brand-dark p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h1 className="font-display text-4xl font-bold mb-6">Bulk Orders & Catering</h1>
              <p className="text-gray-300 mb-8 text-lg">
                Planning a birthday party, college cultural, or a family get-together? Let Vinu's Igloo bring the sweetness.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><Phone className="text-brand-yellow"/></div>
                  <div>
                    <p className="font-bold text-sm text-gray-400">Call Us Directly</p>
                    <p className="text-xl font-bold">+91 95516 99999</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><Mail className="text-brand-pink"/></div>
                  <div>
                    <p className="font-bold text-sm text-gray-400">Email Us</p>
                    <p className="text-xl font-bold">hello@vinusigloo.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <p className="text-sm text-gray-500 italic">
                *Minimum order quantity applies for delivery. Please order at least 48 hours in advance.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-pulse">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} />
                </div>
                <h3 className="font-bold text-2xl text-brand-dark">Redirecting...</h3>
                <p className="text-gray-500 mt-2">Opening WhatsApp to send your details.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-pink font-bold underline text-sm"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Event Type</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all bg-white"
                    value={formData.eventType}
                    onChange={e => setFormData({...formData, eventType: e.target.value})}
                  >
                    <option>Birthday Party</option>
                    <option>Wedding / Reception</option>
                    <option>College / School Event</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message (Est. Quantity)</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
                    placeholder="I need around 100 softy cones for a party..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <div className="space-y-3 pt-2">
                  <button 
                    type="submit" 
                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#128C7E] transition-all shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </button>
                  
                  <div className="text-center">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">OR</span>
                  </div>

                  <button 
                    type="button"
                    onClick={handleEmailSubmit}
                    className="w-full bg-white border-2 border-gray-100 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 hover:border-gray-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail size={18} />
                    Send via Email App
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
