This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

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

### App video

https://github.com/gezperez/Silver.dev/assets/50116922/5d218325-b958-4b5e-a7c1-4de2f146f2f6

Tech Stack

The app is using React Navigation v6, with a custom made drawer to be able to show the screens content on top of the drawer content. The bottom tab has two stacks and the Home stack has two more screens to be able to navigate inside the stack. For the animations Ive used Reanimated v3. The drawer animation consists of two parts, a translateY animation to move down both the drawer and screen contents, and pivot point on the top right corner of the screen content to rotate it.




