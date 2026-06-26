import { MenuItem, Testimonial, YoutubeFeature, Branch } from './types';

// DATA SOURCE: Based on web research for Vinu's Igloo West Mambalam
// Note: Prices are approximate current market rates as the "₹2" is the legacy marketing hook.

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'The Legend (Vanilla)',
    description: 'The iconic soft serve that started it all. Creamy, nostalgic vanilla swirl.',
    price: '₹10', // Adjusted for current reality, marketed as "Starts @ ₹2" in history
    category: 'softy',
    image: 'https://picsum.photos/seed/vanilla/400/400',
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: '2',
    name: 'Strawberry Swirl',
    description: 'Fresh strawberry flavor soft serve. A pink delight loved by kids.',
    price: '₹10',
    category: 'softy',
    image: 'https://picsum.photos/seed/strawberry/401/401',
    isVegetarian: true,
  },
  {
    id: '3',
    name: 'Twin Twist',
    description: 'Can\'t decide? Get both Vanilla and Strawberry in one majestic cone.',
    price: '₹15',
    category: 'softy',
    image: 'https://picsum.photos/seed/twist/402/402',
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: '4',
    name: 'Rose Milk',
    description: 'Chennai\'s official thirst quencher. Chilled, sweet, and perfectly pink.',
    price: '₹20',
    category: 'drink',
    image: 'https://picsum.photos/seed/rosemilk/403/403',
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: '5',
    name: 'Badam Milk',
    description: 'Rich almond milk served chilled with crushed nuts.',
    price: '₹25',
    category: 'drink',
    image: 'https://picsum.photos/seed/badam/404/404',
    isVegetarian: true,
  },
  {
    id: '6',
    name: 'Fruit Salad with Ice Cream',
    description: 'Fresh cut seasonal fruits topped with a scoop of vanilla softy and syrup.',
    price: '₹40',
    category: 'sundae',
    image: 'https://picsum.photos/seed/fruitsalad/405/405',
    isVegetarian: true,
  },
  {
    id: '7',
    name: 'Chocolate Dip',
    description: 'Our classic softy dipped in a hard chocolate shell.',
    price: '₹20',
    category: 'special',
    image: 'https://picsum.photos/seed/chocodip/406/406',
    isVegetarian: true,
  },
  {
    id: '8',
    name: 'Grape Juice',
    description: 'Freshly pressed grape juice with pulp.',
    price: '₹15',
    category: 'drink',
    image: 'https://picsum.photos/seed/grapejuice/407/407',
    isVegetarian: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Karthik R.',
    rating: 5,
    comment: 'Been coming here since my school days. The taste hasn\'t changed a bit! The ₹2 cone nostalgia is real.',
    source: 'Google'
  },
  {
    id: 't2',
    name: 'Priya Sundar',
    rating: 4,
    comment: 'Unbelievably affordable. It gets very crowded in the evenings, but the Rose Milk is worth the wait.',
    source: 'Zomato'
  },
  {
    id: 't3',
    name: 'Senthil Kumar',
    rating: 5,
    comment: 'Best place in West Mambalam for a quick dessert. The Fruit Salad is a hidden gem.',
    source: 'Google'
  }
];

export const YOUTUBE_FEATURES: YoutubeFeature[] = [
  {
    id: 'yt1',
    channelName: 'Peppa Foodie',
    videoTitle: 'Cheapest Ice Cream in Chennai | Vinu\'s Igloo',
    thumbnailUrl: 'https://picsum.photos/seed/yt1/600/340',
    videoUrl: 'https://www.youtube.com/results?search_query=vinus+igloo+peppa+foodie',
    views: '1.2M+'
  },
  {
    id: 'yt2',
    channelName: 'Village Food Hunter',
    videoTitle: '2 Rupees Ice Cream Shop | West Mambalam',
    thumbnailUrl: 'https://picsum.photos/seed/yt2/601/341',
    videoUrl: 'https://www.youtube.com/results?search_query=vinus+igloo',
    views: '850K+'
  },
  {
    id: 'yt3',
    channelName: 'Life of Ismail',
    videoTitle: 'Vinu\'s Igloo Review - Still worthy?',
    thumbnailUrl: 'https://picsum.photos/seed/yt3/602/342',
    videoUrl: 'https://www.youtube.com/results?search_query=vinus+igloo',
    views: '500K+'
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'b1',
    name: 'West Mambalam (HQ)',
    address: '35, Thambiah Rd, AGS Colony, Ramakrishnapuram, West Mambalam, Chennai – 600033',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.671387602283!2d80.2223!3d13.0336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670dd47d2fbd%3A0x6331908616183069!2sVinu\'s%20Igloo!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin',
    phone: '9551699999',
    isPrimary: true
  },
  {
    id: 'b2',
    name: 'Purasaiwakkam',
    address: 'Near Abirami Mega Mall, Purasaiwakkam, Chennai.',
    mapUrl: '',
    phone: '7550028599',
    isPrimary: false
  }
];

export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  whatsapp: 'https://wa.me/919551699999'
};
