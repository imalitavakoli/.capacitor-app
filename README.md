# capacitor-app

🐞 Bug report

This app was created to simulate the bug of the following plugins:

- `@capawesome/capacitor-android-edge-to-edge-support` (V8.0.6).

## Current behavior

When keyboard opens in Android devices, an extra space causes the app content to go all the way up.

## Expected behavior

When keyboard opens in Android devices, no extra space should appear to hide the app content.

## Steps to reproduce

- Click on the input field.
- As soon as the keyboard gets opened, extra space appears at the bottom of the screen and hides the app content.

### Example

To run the provided example, do the following:

- Run `npm install` to install local decencies.
- Run `npm run build` to build the app (generate `/dist` directory).
- Run `npx cap sync` to sync the Android (`/android`) project.
- Open the Android project in AndroidStudio, and click "Debug app".

## Capacitor doctor

Her's the output of `npx cap doctor` command:

```
Latest Dependencies:

  @capacitor/cli: 8.3.0
  @capacitor/core: 8.3.0
  @capacitor/android: 8.3.0
  @capacitor/ios: 8.3.0

Installed Dependencies:

  @capacitor/ios: not installed
  @capacitor/cli: 8.3.0
  @capacitor/core: 8.3.0
  @capacitor/android: 8.3.0
```
