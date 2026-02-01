# KIOSK Mobile App Setup Guide

This guide explains how to build and deploy the KIOSK marketplace as native Android and iOS apps using Capacitor.

## Overview

The mobile apps are wrappers around the web application, providing:
- Native app store distribution
- Push notifications
- Camera access for product photos
- Native share functionality
- Better offline capabilities

## Prerequisites

### For Android Development:
1. **Android Studio** (latest version)
   - Download: https://developer.android.com/studio
   - Works on Windows, Mac, or Linux

### For iOS Development:
1. **Xcode** (latest version)
   - Download from Mac App Store
   - **macOS only** - iOS development requires a Mac
2. **Apple Developer Account** ($99/year for App Store distribution)

### For Both:
1. **Node.js 18+** (already installed)
2. **Google Play Developer Account** ($25 one-time) for Android distribution

## Project Structure

```
/android/          # Android native project (open with Android Studio)
/ios/              # iOS native project (open with Xcode)
capacitor.config.ts # Capacitor configuration
```

## Development Workflow

### 1. Configure Server URL

For production builds, set your production URL in `capacitor.config.ts`:

```typescript
server: {
  url: 'https://your-production-url.com',
}
```

For development, you can leave it undefined to use the bundled web assets.

### 2. Sync Changes

After any web code changes, sync to native projects:

```bash
npm run cap:sync
```

### 3. Open in IDE

**Android:**
```bash
npm run cap:android
# Or: npx cap open android
```

**iOS (Mac only):**
```bash
npm run cap:ios
# Or: npx cap open ios
```

## Building for Release

### Android APK/AAB

1. Open project in Android Studio: `npm run cap:android`
2. Go to Build > Generate Signed Bundle/APK
3. Create or select a keystore
4. Build release APK or AAB (for Play Store)

### iOS IPA

1. Open project in Xcode: `npm run cap:ios`
2. Select your team in Signing & Capabilities
3. Archive the app (Product > Archive)
4. Distribute to App Store or export IPA

## App Store Submission

### Google Play Store

1. Create app in Google Play Console
2. Upload your signed AAB file
3. Fill in store listing (screenshots, description)
4. Submit for review

### Apple App Store

1. Create app in App Store Connect
2. Upload via Xcode or Transporter
3. Fill in app information
4. Submit for review

## Customizing the App

### App Icon

Replace icon files in:
- Android: `android/app/src/main/res/mipmap-*/`
- iOS: `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

Use a tool like https://appicon.co/ to generate all sizes.

### Splash Screen

Configure in `capacitor.config.ts`:

```typescript
plugins: {
  SplashScreen: {
    launchShowDuration: 2000,
    backgroundColor: '#16a34a',
    androidSplashResourceName: 'splash',
    showSpinner: false,
  },
}
```

### Push Notifications

Push notifications require additional setup:
1. Firebase Cloud Messaging for Android
2. Apple Push Notification service (APNs) for iOS

## Troubleshooting

### "Missing out directory" warning
This is normal when using live server mode. The app loads from your web server.

### White screen on app launch
- Check that your server URL is accessible
- Verify CORS settings allow your app
- Check Android Studio/Xcode logs for errors

### Build fails
- Ensure you have the latest Android SDK / Xcode
- Run `npm run cap:sync` to sync latest changes
- Check for Java/Gradle version compatibility (Android)

## Files to Push to Your Mobile Repository

Push these folders/files to your new mobile app repository:
- `/android/` - Android native project
- `/ios/` - iOS native project
- `capacitor.config.ts` - Capacitor configuration
- `MOBILE_APP_SETUP.md` - This guide

The rest of the web app code stays in your main repository.
