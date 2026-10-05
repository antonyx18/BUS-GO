import { createClient } from '@supabase/Bolt Database-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const Bolt Database = createClient(supabaseUrl, supabaseAnonKey);

export interface Bus {
  id: string;
  operator_name: string;
  bus_type: string;
  from_city: string;
  to_city: string;
  departure_date: string;
  departure_time: string;
  arrival_time: string;
  duration: string;
  price: number;
  total_seats: number;
  available_seats: number;
  rating: number;
  amenities: string[];
  created_at: string;
}

export interface Booking {
  id: string;
  bus_id: string;
  passenger_name: string;
  passenger_email: string;
  passenger_phone: string;
  seat_numbers: number[];
  num_seats: number;
  total_amount: number;
  booking_reference: string;
  booking_date: string;
  status: string;
  bus?: Bus;
}

export const POPULAR_CITIES = [
  'Bangalore', 'Chennai', 'Mumbai', 'Pune', 'Hyderabad',
  'Mysore', 'Coimbatore', 'Madurai', 'Delhi', 'Kolkata', 'Goa', 'Kochi',
];
