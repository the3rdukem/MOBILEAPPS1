import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kiosk.marketplace',
  appName: 'KIOSK',
  webDir: 'out',
  server: {
    // For production, set this to your deployed URL (e.g., 'https://kiosk.com.gh')
    // For development, you can use your local network IP
    url: process.env.CAPACITOR_SERVER_URL || undefined,
    cleartext: true, // Allow HTTP for development
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#16a34a',
      showSpinner: false,
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#16a34a',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true, // Disable in production
  },
  ios: {
    contentInset: 'automatic',
    allowsLinkPreview: true,
    scrollEnabled: true,
  },
};

export default config;
