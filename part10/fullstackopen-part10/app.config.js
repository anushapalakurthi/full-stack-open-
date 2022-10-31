import 'dotenv/config';

export default {
  name: 'newRNApp',
  extra: {
    env: process.env.ENV,
    APOLLO_URI: process.env.APOLLO_URI,
  },
  slug: 'newRNApp',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  android: {
    permissions: [
      'READ_EXTERNAL_STORAGE',
      'WRITE_EXTERNAL_STORAGE',
      'CAMERA'
    ],
    package: 'com.example.rnapp'
  },
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: './assets/favicon.png'
  }
};
