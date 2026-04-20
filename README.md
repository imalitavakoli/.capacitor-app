# capacitor-app

🐞 Bug report

This app was created to simulate the bug of the following plugins:

- `@capawesome/capacitor-android-edge-to-edge-support` (V8.0.6).

## How we prepared this report (this branch from the main branch)

- Create a new branch (from the main branch).
- Run `npm install @capacitor/<platform>` to install native project's local dependencies.
- Run `npx cap add <platform>` to add Android/iOS native project.
- _Optional!_ Run `npm install *` command(s) to install the plugin(s) that we wanna test.
- _Optional!_ Modify the codes in `/src/js/capacitor-welcome.js`.
- _Optional!_ Run `npm run build` to compile the app in `/dist` directory.
- Run `npx cap sync` to sync the app compiles files & plugins with the native project.

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
