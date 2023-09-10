export interface Planet {
  id: string;
  name: string;
  mass?: {
    kg: number;
    earthMasses: number;
  };
  dayLength?: string;
  yearLength?: string;
  orbitalPosition?: string;
  numMoons: number;
  listOfMoons: Moon[];
  composition?: string;
  distanceFromSun?: string;
  temperatures?: {
    daytime: string;
    nighttime: string;
  };
  uniqueFeature: string;
}

export interface Moon {
  id: string;
  name: string;
  radius: number;
  kg: number;
}

export const planets: Planet[] = [
  {
    id: '0',
    name: 'Mercury',
    mass: {
      kg: 3.3011e23,
      earthMasses: 0.055,
    },
    dayLength: 'Approximately 59 Earth days',
    yearLength: 'Approximately 88 Earth days',
    orbitalPosition: 'First planet from the Sun',
    numMoons: 0,
    listOfMoons: [],
    composition: 'Rocky and metallic',
    distanceFromSun: 'Average distance of about 57.91 million kilometers',
    temperatures: {
      daytime: 'Up to 430°C (800°F)',
      nighttime: 'Drops to -180°C (-290°F)',
    },
    uniqueFeature: 'Numerous craters and cliffs on the surface.',
  },
  {
    id: '1',
    name: 'Venus',
    mass: {
      kg: 4.8675e24,
      earthMasses: 0.815,
    },
    dayLength: 'Approximately 243 Earth days',
    yearLength: 'Approximately 225 Earth days',
    orbitalPosition: 'Second planet from the Sun',
    numMoons: 0,
    listOfMoons: [],
    composition: 'Rocky with a thick atmosphere mainly composed of carbon dioxide',
    distanceFromSun: 'Average distance of about 108.2 million kilometers',
    temperatures: {
      daytime: 'About 467°C (872°F)',
      nighttime: 'Extremely hot',
    },
    uniqueFeature: 'Extreme greenhouse effect and surface adorned with volcanoes.',
  },
  {
    id: '2',
    name: 'Earth',
    mass: {
      kg: 5.972e24,
      earthMasses: 1,
    },
    dayLength: 'Approximately 24 hours',
    yearLength: 'Approximately 365.25 days',
    orbitalPosition: 'Third planet from the Sun',
    numMoons: 1,
    listOfMoons: [
      {
        id: '2.1',
        name: 'The Moon',
        kg: 7.35e22,
        radius: 1.738e3
      }
    ],
    composition: 'Rocky with a diverse ecosystem, liquid water, and a unique atmosphere',
    distanceFromSun: 'Average distance of about 149.6 million kilometers',
    temperatures: {
      daytime: 'Varies by location, averages around 15°C (59°F)',
      nighttime: 'Varies by location, can drop significantly depending on the region',
    },
    uniqueFeature: 'Supports a rich and diverse biosphere, unique climate system, and various geological features.',
  },
  {
    id: '3',
    name: 'Mars',
    mass: {
      kg: 6.4171e23,
      earthMasses: 0.107,
    },
    dayLength: 'Approximately 24.6 hours',
    yearLength: 'Approximately 687 Earth days',
    orbitalPosition: 'Fourth planet from the Sun',
    numMoons: 2,
    listOfMoons: [
      {
        id: '3.1',
        name: 'Phobos',
        kg: 1.08e16,
        radius: 11.2667
      },
      {
        id: '3.2',
        name: 'Deimos',
        kg: 2e15,
        radius: 6.2
      }
    ],
    composition: 'Rocky with a thin atmosphere primarily composed of carbon dioxide',
    distanceFromSun: 'Average distance of about 227.9 million kilometers',
    temperatures: {
      daytime: 'Varies, but averages around -20°C (-4°F)',
      nighttime: 'Can drop significantly, reaching lows of around -73°C (-100°F)',
    },
    uniqueFeature: 'Largest volcano in the solar system (Olympus Mons) and evidence of past liquid water.',
  },
  {
    id: '4',
    name: 'Jupiter',
    mass: {
      kg: 1.8982e27,
      earthMasses: 318,
    },
    dayLength: 'Approximately 9.9 hours',
    yearLength: 'Approximately 11.9 Earth years',
    orbitalPosition: 'Fifth planet from the Sun',
    numMoons: 80, // Over 80 confirmed moons
    listOfMoons: [
      {
        id: "4.1",
        name: "Io",
        radius: 1.8213e3,
        kg: 8.93e22
      },
      {
        id: "4.2",
        name: "Europa",
        radius: 1.561e3,
        kg: 4.80e22
      },
      {
        id: "4.3",
        name: "Ganymede",
        radius: 2.6312e3,
        kg: 1.48e23
      }
    ],
    composition: 'Mostly gas (primarily hydrogen and helium) with a small rocky core',
    distanceFromSun: 'Average distance of about 778.3 million kilometers',
    temperatures: {
      daytime: 'Varies with altitude but can be extremely cold in the upper atmosphere',
      nighttime: 'Varies with altitude but can be extremely cold in the upper atmosphere',
    },
    uniqueFeature: 'Largest planet in the solar system with striking bands of clouds and the Great Red Spot.',
  },
  {
    id: '5',
    name: 'Saturn',
    mass: {
      kg: 5.683e26,
      earthMasses: 95,
    },
    dayLength: 'Approximately 10.7 hours',
    yearLength: 'Approximately 29.5 Earth years',
    orbitalPosition: 'Sixth planet from the Sun',
    numMoons: 80, // Over 80 confirmed moons
    listOfMoons: [
      {
        id: "5.1",
        name: "Titan",
        radius: 2.5747e3,
        kg: 1.35e23
      },
      {
        id: "5.2",
        name: "Enceladus",
        radius: 2.521e2,
        kg: 1.08e20
      },
      {
        id: "5.3",
        name: "Iapetus",
        radius: 7.345e2,
        kg: 1.81e21
      }
    ],
    composition: 'Mostly gas (hydrogen and helium) with a substantial system of rings',
    distanceFromSun: 'Average distance of about 1.42 billion kilometers',
    temperatures: {
      daytime: 'Extremely cold in the upper atmosphere',
      nighttime: 'Warmer within the planet due to gravitational compression',
    },
    uniqueFeature: 'Famous for its stunning ring system composed of ice and rock particles.',
  },
  {
    id: '6',
    name: 'Uranus',
    mass: {
      kg: 8.681e25,
      earthMasses: 14,
    },
    dayLength: 'Approximately 17.2 hours',
    yearLength: 'Approximately 84 Earth years',
    orbitalPosition: 'Seventh planet from the Sun',
    numMoons: 27, // 27 confirmed moons
    listOfMoons: [
      {
        id: "6.1",
        name: "Titania",
        radius: 7.889e2,
        kg: 3.41e21
      },
      {
        id: "6.2",
        name: "Oberon",
        radius: 7.614e2,
        kg: 3.01e21
      },
      {
        id: "6.3",
        name: "Umbriel",
        radius: 5.847e2,
        kg: 1.27e21
      }
    ],
    composition: 'Ice giants with a mantle of water, ammonia, and methane ices',
    distanceFromSun: 'Average distance of about 2.87 billion kilometers',
    temperatures: {
      daytime: 'Extremely cold throughout its atmosphere',
      nighttime: 'Extremely cold throughout its atmosphere',
    },
    uniqueFeature: 'Axial tilt causes it to rotate almost perpendicular to its orbit, giving it a unique appearance.',
  },
  {
    id: '7',
    name: 'Neptune',
    mass: {
      kg: 1.02413e26,
      earthMasses: 17,
    },
    dayLength: 'Approximately 16.1 hours',
    yearLength: 'Approximately 165 Earth years',
    orbitalPosition: 'Eighth planet from the Sun',
    numMoons: 14, // 14 confirmed moons
    listOfMoons: [
      {
        id: "7.1",
        name: "Triton",
        radius: 1.3534e3,
        kg: 2.14e22
      },
      {
        id: "7.2",
        name: "Proteus",
        radius: 2.092e2,
        kg: 4.40e19
      },
      {
        id: "7.3",
        name: "Nereid",
        radius: 1.70e2,
        kg: 3.1e19
      }
    ],
    composition: 'Ice giants with a mantle of water, ammonia, and methane ices',
    distanceFromSun: 'Average distance of about 4.5 billion kilometers',
    temperatures: {
      daytime: 'Extremely cold throughout its atmosphere',
      nighttime: 'Extremely cold throughout its atmosphere',
    },
    uniqueFeature: 'Known for its deep blue color and strong winds, including the fastest in the solar system.',
  },
];
