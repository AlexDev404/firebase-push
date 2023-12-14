# firebase-push

## Project Description

This project is designed to provide a simple proof-of-concept for FCM.
This project is a simple 'frontend' for [AlexDev404/loopback-FCM-subscribe](https://github.com/AlexDev404/loopback-FCM-subscribe)

## Setup Instructions

1. Enter into Firebase and create a new project
2. Create a new webapp and copy the configuration. This will be your `firebaseConfig`
3. Go into cloud messaging and create a new web push certificate. Copy the public key. This will be your vapidKey
4. Head over to `App.tsx` and `web/firebase-messaging.tsx` and replace the existing values with your own
5. Open a terminal in this directory and install dependencies using  `npm install`

## How to Run

1. Run the project using `npm run web` or `npm run android` (if using Android)
