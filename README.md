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
	"title": STRING,
	"content": STRING,
	topic?: STRING,
	token?: STRING
}
```

When sending mesages, the ID of the topic is stored into the `userGroup`->`id` column. This corresponds to the ID of the topic in the `topics` table... example of how messages are represented/stored in the database...

## Messages Table

| id | userGroup | title | content | createdAt | updatedAt |
| -- | -- | -- | -- | -- | -- |
| 1  | 0  | Test Notification | Test | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |
| 2  | 0  | Test Notification 1 | Test | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |
| 3  | 0  | Test Notification 2 | Test | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |

## Topics Table

| id | name | createdAt | updatedAt |
| -- | -- | -- | -- |
| 1  | default | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |
| 2  | Test1 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |
| 3  | Test2 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |
| 4  | Test3 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00 |

```json
POST /subscribe
{
	"token": "CLIENT_TOKEN",
	"topic": "TOPIC_TO_SUBSCRIBE_TO" <--- Automatically generated upon subscription
}
```

When subscribing to a channel/topic, the ID of the topic that the user is subscribing to is stored into the `subscriptions`->`topic` column. This corresponds to the ID of the topic in the `topics` table. Here is an example of how this is represented...

| id | user | topic | createdAt | updatedAt |
| -- | -- | -- | -- | -- |
| 1  | eYdOrEfNArzI3o8zpYEjCr:APA91bFaRNfw5mf8cKQpt7dUrBCWhCJBhoSlsbWAs1qMssfjMmMySx-Uw51YWxgbORCSm8lgw8w5OdKIh44C3xjQMfufOQYBSThEMSiBn92Y1eOECE0scMnt1bG6wj8hN4AzY76LMWJR  | 5 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00
| 2  | df95D1UcevNczYMTN8ZSvx:APA91bHUtv1XNUI4TUbCD7odvhdhkV6GoVFnXqp9AgDo3qWlfIyxtBA8_0JWwGm7yz4D2ccmtePEyjCa2LbrbfSBVvZKTbdbADXt3DJ0sDlip57Zp2yNPqcfPM4Vv6JnaqBhk1m9k-tX  | 3 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00
| 3  | eYdOrEfNArzI3o8zpYEjCr:APA91bFaRNfw5mf8cKQpt7dUrBCWhCJBhoSlsbWAs1qMssfjMmMySx-Uw51YWxgbORCSm8lgw8w5OdKIh44C3xjQMfufOQYBSThEMSiBn92Y1eOECE0scMnt1bG6wj8hN4AzY76LMWJR  | 1 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00
| 4  | eYdOrEfNArzI3o8zpYEjCr:APA91bFaRNfw5mf8cKQpt7dUrBCWhCJBhoSlsbWAs1qMssfjMmMySx-Uw51YWxgbORCSm8lgw8w5OdKIh44C3xjQMfufOQYBSThEMSiBn92Y1eOECE0scMnt1bG6wj8hN4AzY76LMWJR  | 2 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00
| 5  | eYdOrEfNArzI3o8zpYEjCr:APA91bFaRNfw5mf8cKQpt7dUrBCWhCJBhoSlsbWAs1qMssfjMmMySx-Uw51YWxgbORCSm8lgw8w5OdKIh44C3xjQMfufOQYBSThEMSiBn92Y1eOECE0scMnt1bG6wj8hN4AzY76LMWJR  |4 | 2023-12-14 21:40:33.340 +00:00 | 2023-12-14 21:40:33.340 +00:00

## Setup Instructions

1. Enter into Firebase and create a new project
2. Create a new webapp and copy the configuration. This will be your `firebaseConfig`
3. Go into cloud messaging and create a new web push certificate. Copy the public key. This will be your vapidKey
4. Head over to `App.tsx` and `web/firebase-messaging.tsx` and replace the existing values with your own
5. Open a terminal in this directory and install dependencies using `npm install`

## How to Run

1. Run the project using `npm run web` or `npm run android` (if using Android)
2. For the backend, run `npm start`
