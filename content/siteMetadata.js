const siteMetadata = {
  title: 'Jash Parikh',
  author: 'Jash Parikh',
  headerTitle: 'Jash Parikh',
  description: 'Student at AU',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://jashparikh.com',
  siteRepo: 'https://github.com/jash7447',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'jashparikh7447@gmail.com',
  github: 'https://github.com/jash7447',
  twitter: 'https://twitter.com/jash7447',
  facebook: 'https://facebook.com',
  linkedin: 'https://www.linkedin.com/in/jash-parikh-0a795b232/',
  spotify: 'https://open.spotify.com/',
  steam: 'https://steamcommunity.com/id/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
