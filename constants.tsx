
import React from 'react';
import { 
  Activity, 
  MapPin, 
  Bell, 
  Baby, 
  TrendingUp, 
  UserRound,
  Heart,
  Stethoscope,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { Feature, Doctor, Hospital, HealthTip, Testimonial } from './types';

export const COLORS = {
  primary: '#0072C6',
  secondary: '#00BFA6',
  accent: '#FFC107',
  background: '#FFFFFF',
  lightGray: '#F9F9F9',
};

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Disease Information',
    description: 'Comprehensive encyclopedia of health conditions and treatments.',
    icon: <Activity className="w-8 h-8 text-[#0072C6]" />,
  },
  {
    id: 2,
    title: 'Hospital Locator',
    description: 'Find top-rated medical centers and clinics near your location.',
    icon: <MapPin className="w-8 h-8 text-[#00BFA6]" />,
  },
  {
    id: 3,
    title: 'Medication Reminders',
    description: 'Never miss a dose with our intelligent scheduling assistant.',
    icon: <Bell className="w-8 h-8 text-[#FFC107]" />,
  },
  {
    id: 4,
    title: 'Women & Children',
    description: 'Specialized tracking and advice for maternal and pediatric health.',
    icon: <Baby className="w-8 h-8 text-[#0072C6]" />,
  },
  {
    id: 5,
    title: 'Fitness Tracking',
    description: 'Monitor steps, calories, and heart rate seamlessly.',
    icon: <TrendingUp className="w-8 h-8 text-[#00BFA6]" />,
  },
  {
    id: 6,
    title: 'Doctors Directory',
    description: 'Connect with specialists and book appointments online.',
    icon: <UserRound className="w-8 h-8 text-[#FFC107]" />,
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    distance: '1.2 miles away',
    image: 'https://picsum.photos/seed/doc1/400/400',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    specialty: 'Pediatrician',
    distance: '2.5 miles away',
    image: 'https://picsum.photos/seed/doc2/400/400',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    specialty: 'Dermatologist',
    distance: '3.1 miles away',
    image: 'https://picsum.photos/seed/doc3/400/400',
    rating: 5.0,
  },
];

export const TIPS: HealthTip[] = [
  {
    id: 1,
    title: 'Hydration is Key',
    content: 'Drinking enough water daily supports metabolism and brain function.',
    category: 'Wellness',
  },
  {
    id: 2,
    title: 'Screen Time Break',
    content: 'Follow the 20-20-20 rule to reduce digital eye strain.',
    category: 'Lifestyle',
  },
  {
    id: 3,
    title: 'Sleep Hygiene',
    content: 'Consistent sleep schedules improve mood and immune system strength.',
    category: 'Health',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Chen',
    role: 'New Parent',
    quote: 'Alpha Health made tracking my baby\'s vaccinations so simple. I never worry about missing an appointment anymore.',
    avatar: 'https://picsum.photos/seed/p1/100/100',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    role: 'Fitness Enthusiast',
    quote: 'The hospital locator saved me when I was traveling. Found an urgent care clinic in minutes!',
    avatar: 'https://picsum.photos/seed/p2/100/100',
  },
];
