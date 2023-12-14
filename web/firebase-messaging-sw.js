// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  // Firebase configuration object
  apiKey: "AIzaSyDJWYR522sr-NEVVUvnAtXbtids2O2KLd0",
  authDomain: "ub-loopback.firebaseapp.com",
  projectId: "ub-loopback",
  storageBucket: "ub-loopback.appspot.com",
  messagingSenderId: "831992174946",
  appId: "1:831992174946:web:bd0f1963acaca24c0ff43b",
  measurementId: "G-MXP4BEY67C",
};
// Initialize Firebase with the provided configuration
firebase.initializeApp(firebaseConfig);

// Handle background messages
self.addEventListener("push", function (event) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    event.data.json()
  );

  // Extract notification details from the received data
  const push = event.data.json().notification;
  const title = push.title;
  const notificationOptions = {
    body: push.body,
    icon:
      push.image ??
      "https://www.gstatic.com/devrel-devsite/prod/v4c72fb03a7a581549fb317877b3b0627265bda97bd9ba2a29365d1ada8a00354/firebase/images/favicon.png",
  };

  // Show the notification
  event.waitUntil(registration.showNotification(title, notificationOptions));
});

// Bugged -- Does not work --- does same as above ---
// firebase.messaging().onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png",
//     type: "json",
//   };
//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
