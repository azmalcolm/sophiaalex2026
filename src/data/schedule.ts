export interface ScheduleDay {
  day: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  dresscode: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const schedule: ScheduleDay[] = [
  {
    day: 'Day 1',
    title: 'Welcome to Italy',
    date: '3 / 7 / 2026',
    time: '17:30',
    venue: 'Hotel Villa Beccaris',
    dresscode: 'Italian summer cocktail',
    description: 'We are starting off the celebrations with an aperitivo in the gardens of Villa Beccaris, a relaxed evening to enjoy spritz and Italian food together in the summer air. The perfect way to ease into the weekend!',
    image: '/images/schedule-day1.jpg',
    imageAlt: 'Villa Beccaris gardens',
  },
  {
    day: 'Day 2',
    title: 'The Wedding Day',
    date: '4 / 7 / 2026',
    time: '17:00',
    venue: 'Hotel Villa Beccaris',
    dresscode: 'Black tie',
    description: 'Our wedding day begins with a ceremony beneath the grand cedar tree at Villa Beccaris, surrounded by vineyards and sweeping views of Monforte d\'Alba. Guests will be seated from 16:45, with the ceremony starting at 17:00. After the ceremony, we gather for dinner and celebrations into the night.',
    image: '/images/schedule-day2.jpg',
    imageAlt: 'Wedding ceremony at Villa Beccaris',
  },
  {
    day: 'Day 3',
    title: 'Farewell Sunday',
    date: '5 / 7 / 2026',
    time: '10:00',
    venue: 'Hotel Villa Beccaris',
    dresscode: 'Hangover Attire',
    description: 'Before the weekend comes to an end, we would love for everyone to come by and say goodbye on Sunday morning. We will be around at Villa Beccaris before check-out at 11:00, and it would be lovely to share one last moment together — a final hug before we all head off.',
    image: '/images/schedule-day3.png',
    imageAlt: 'Sunday morning farewell',
  },
];
