# firebase-push

## Project Description

This project is designed to provide a simple proof-of-concept for FCM.
This project is a simple 'frontend' for [AlexDev404/loopback-FCM-subscribe](https://github.com/AlexDev404/loopback-FCM-subscribe)

# About the Backend

The backend is written using [loopback 4](https://loopback.io) and uses [firebase-admin](https://npmjs.org/package/firebase-admin) to communicate with the Firebase service.

It contains two routes and runs on port `3000`.
These routes are `/messages` and `/subscribe`.

Examples for each respective route are shown below

```json
POST /messages
{
	"title": "Test Notification",
	"content": "Test"
}
```

```json
POST /subscribe
{
	"token": "CLIENT_TOKEN",
	"topic": "TOPIC_TO_SUBSCRIBE_TO"
}
```

## Setup Instructions

1. Enter into Firebase and create a new project
2. Create a new webapp and copy the configuration. This will be your `firebaseConfig`
3. Go into cloud messaging and create a new web push certificate. Copy the public key. This will be your vapidKey
4. Head over to `App.tsx` and `web/firebase-messaging.tsx` and replace the existing values with your own
5. Open a terminal in this directory and install dependencies using `npm install`

## How to Run

1. Run the project using `npm run web` or `npm run android` (if using Android)
