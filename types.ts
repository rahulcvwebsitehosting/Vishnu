export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'softy' | 'drink' | 'sundae' | 'special';
  image: string;
  isBestseller?: boolean;
  isVegetarian: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  source: 'Google' | 'Zomato' | 'Direct';
}

export interface YoutubeFeature {
  id: string;
  channelName: string;
  videoTitle: string;
  thumbnailUrl: string;
  videoUrl: string;
  views: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  phone: string;
  isPrimary: boolean;
}