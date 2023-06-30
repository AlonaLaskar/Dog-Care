import { CapacitorConfig } from '@capacitor/cli';

// Importing the CapacitorConfig type from the '@capacitor/cli' package.

const config: CapacitorConfig = {
  // Setting various configuration options for the Capacitor project.
  appId: 'com.dogCare.www',
  appName: 'Dog-Care',
  webDir: 'build',
  bundledWebRuntime: false,



  plugins: {
    SplashScreen: {
      // Configuration options for the SplashScreen plugin.
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidScaleType: 'CENTER_CROP',
      androidSplashResourceName: 'splash',
      androidSplashDrawableId: 'splash',
    },
  },
};

export default config;
