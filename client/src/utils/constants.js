export const PROPERTY_TYPES = [
  { value: 'studio', label: 'Studio' },
  { value: 'shared', label: 'Shared Room' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
];

export const AMENITIES = [
  'WiFi',
  'Gym',
  'Pool',
  'Parking',
  'Laundry',
  'Security',
  'Study Room',
  'Kitchen',
  'Air Conditioning',
  'Heating',
];

export const COUNTRIES = [
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'UK', code: 'GB', flag: '🇬🇧' },
  { name: 'USA', code: 'US', flag: '🇺🇸' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
];

export const PRICE_RANGES = [
  { min: 0, max: 500, label: 'Under $500' },
  { min: 500, max: 1000, label: '$500 - $1000' },
  { min: 1000, max: 1500, label: '$1000 - $1500' },
  { min: 1500, max: 2000, label: '$1500 - $2000' },
  { min: 2000, max: null, label: 'Above $2000' },
];