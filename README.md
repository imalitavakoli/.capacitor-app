# capacitor-app

🐞 Bug report

This app was created to simulate the bug of the following plugins:

- `@capacitor/status-bar` (V8.0.2).

## How we prepared this report (this branch from the main branch)

- Create a new branch (from the main branch).
- Run `npm install @capacitor/<platform>` to install native project's local dependencies.
- Run `npx cap add <platform>` to add Android/iOS native project.
- _Optional!_ Run `npm install *` command(s) to install the plugin(s) that we wanna test.
- _Optional!_ Modify the codes in `/src/js/capacitor-welcome.js`.
- _Optional!_ Run `npm run build` to compile the app in `/dist` directory.
- Run `npx cap sync` to sync the app compiles files & plugins with the native project.

## Current behavior

I have a problem with [status-bar plugin](https://capacitorjs.com/docs/apis/status-bar). It seems that `StatusBar.setStyle` method doesn't work, if initial style is 'DARK' or 'DEFAULT'.

## Expected behavior

Whenever we call `StatusBar.setStyle`, it should work as expected.

## Steps to reproduce

- Wait for 5 sec to let the code try to change the status-bar style and log `New status-bar style applied!`.

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

  @capacitor/cli: 8.3.1
  @capacitor/core: 8.3.1
  @capacitor/android: 8.3.1
  @capacitor/ios: 8.3.1

Installed Dependencies:

  @capacitor/ios: not installed
  @capacitor/android: 8.3.1
  @capacitor/cli: 8.3.1
  @capacitor/core: 8.3.1
```
