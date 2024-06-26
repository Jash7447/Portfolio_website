export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'ListNGO',
    image: {
      src: '/static/images/project/listngo.png',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I built`,
    title: 'CareerConnect',
    image: {
      src: '/static/images/project/careerconnect  .png',
      width: 600,
      height: 717,
    },
  },
];
