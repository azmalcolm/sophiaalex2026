export interface Hotel {
  name: string;
  description: string;
  price?: string;
  bookingNote?: string;
  website?: string;
  email?: string;
  featured?: boolean;
}

export const hotels: Hotel[] = [
  {
    name: 'Hotel Villa Beccaris',
    description: 'We would love for as many of our guests as possible to stay with us at Hotel Villa Beccaris, where the wedding will take place. A number of rooms will be pre-assigned to close family & the wedding party, and the remaining rooms can be booked directly with the hotel on a first come, first served basis. All bookings and payments are handled directly with the hotel.',
    bookingNote: 'Email villa@villabeccaris.it and mention you\'re attending Sophia & Alex\'s wedding on 4 July 2026.',
    email: 'villa@villabeccaris.it',
    featured: true,
  },
  {
    name: 'La Ribezza',
    description: 'A beautiful wine estate and guesthouse set among the Barolo vineyards, offering elegant rooms with sweeping views of the Langhe hills. About 10 minutes by car from Monforte d\'Alba.',
    price: '€350–450 / night',
    website: 'https://www.laribezza.com',
  },
  {
    name: 'Hotel Felicin',
    description: 'A charming family-run hotel in the village of Monforte d\'Alba with a renowned restaurant, lovely garden terrace, and warm Piedmontese hospitality. Walking distance from Villa Beccaris.',
    price: '€250–300 / night',
    website: 'https://www.felicin.it',
  },
  {
    name: 'Le Case della Saracca',
    description: 'A boutique collection of stone houses in the heart of Monforte d\'Alba, filled with art and character. Each suite is uniquely decorated and just a short stroll from the main square.',
    price: 'From €200 / night',
    website: 'https://www.saracca.com',
  },
  {
    name: 'Hotel Il Grappolo D\'Oro',
    description: 'A simple and comfortable hotel right in the centre of Monforte d\'Alba. Ideal if you\'re looking for a central base at a more accessible price point, with everything the village has to offer on your doorstep.',
    price: 'From €190 / night',
  },
];
