# NASA Image Viewer App

## Description
The NASA Image Viewer app is a React Native project that allows users to explore NASA's Astronomy Picture of the Day (APOD) and view details of past images. Here are some of the key features and best practices implemented in this app:

## Main Features
- Display the daily image from NASA's APOD API on the main screen.
- Scrollable list of the previous five days' images.
- Consuming the NASA API with careful review of its documentation.
- Modularization of components with a clear separation between "Components" and "Views."
- Type safety with TypeScript.
- Adherence to best coding practices, including Clean Code principles.
- Effective use of components, such as ScrollView.
- Developed using the React Native CLI instead of Expo.
- Integration of React Navigation for React Native, with the use of react-native-screens and react-native-safe-area-context, and components like Stack.Navigator to replace Expo's router.
- Parameter passing using the useRoute and useNavigation hooks from react-navigation for enhanced navigation capabilities.
- Date formatting using the date-fns library.
- Avoiding direct styling in the options of the stack screen by refraining from using routerScreenDefaultOptions, ensuring centered titles and preventing TypeScript issues.
- Creation of custom hooks for reusability.

## Screenshots

| Main screen | Details screen |
| :---: | :---: |
| ![Main screen](https://res.cloudinary.com/getoutbcn/image/upload/v1697119308/portfolio/projects/Nasa1_jlneqy.png) | ![Details screen](https://res.cloudinary.com/getoutbcn/image/upload/v1697119311/portfolio/projects/Nasa2_b3xpha.png) |


## Installation
To get started with the NASA Image Viewer app, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install` or `yarn install`.
4. Run the app on your preferred platform using `npx react-native run-android` or `npx react-native run-ios`.

## Usage
Open the app, and you'll be greeted with the Astronomy Picture of the Day on the main screen. Scroll down to explore previous days' images. Click on an image to see more details.




