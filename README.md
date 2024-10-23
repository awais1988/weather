# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Start application" step, before proceeding.<br> <br> **Most important** your node version should be >= Node 18.18

## Step 1: Install packages

To install packages run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

After install packages

## For iOS

```
cd ios
pod install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you will see app running in your _Android Emulator_ or _iOS Simulator_ .

## Project Structure:

### On Root

We have:

```bash
index.js
App.tsx
types.ts (To define types)
And other react-native generated files and folders, that we use in our project.
```

### On src Folder we have:

```bash
appNavigator (In it handling app navigation)

assests (In it images are added that will be used in application)

commonComponents (It contains all common components that are using on different screens and components)

component (It contains folders regarding the screens and in folders there are componnet that are using on that screen. Not a common component.)

config (It contains interceptor, endpoints and envoirnment urls)

constants (It contains the constant file like: colors, text that we will use on application)

customHooks (It contains custom hooks that we are using in app)

screens (It contains main screens, on which we navigate)

store (It contains reducers, actions and store)

utils (It contains function that returns some value and also api call file)

```
