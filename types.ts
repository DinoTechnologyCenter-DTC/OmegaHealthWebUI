
// Import React to fix "Cannot find namespace 'React'" error
import React from 'react';

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  distance: string;
  image: string;
  rating: number;
}

export interface Hospital {
  id: number;
  name: string;
  location: string;
  distance: string;
  image: string;
}

export interface HealthTip {
  id: number;
  title: string;
  content: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}