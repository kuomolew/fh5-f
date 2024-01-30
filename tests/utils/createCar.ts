import type { Car } from '@/api/types';

export const createCar = (car: Partial<Car> = {}): Car => ({
  id: "Abarth 595 '68",
  manufacturer: 'Abarth',
  model: 'Abarth 595 esseesse',
  image: 'Abarth_595_68',
  year: 1968,
  country: 'IT',
  type: 'Cult Classics',
  rarity: 'Common',
  classification: 'Autoshow',
  value: '35,000 CR',
  autoshow: true,
  dlc: '',
  class: 'D',
  pi: 100,
  speed: 26,
  handling: 37,
  acceleration: 17,
  launch: 26,
  braking: 20,
  offroad: 51,
  stat: 30,
  wheelspin: false,
  barn: false,
  collection: false,
  mission: '',
  ...car,
});
