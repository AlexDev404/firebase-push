import { Text, SafeAreaView, StyleSheet, Button } from "react-native";
import Toast from "react-native-toast-message";
import { initializeApp } from "firebase/app";
import { onMessage, getToken } from "firebase/messaging";
import { getMessaging } from "firebase/messaging/sw";
import { Card } from "react-native-paper";
const subscribed = JSON.parse(localStorage.getItem("subscribed"));

const firebaseConfig = {
  apiKey: "AIzaSyDJWYR522sr-NEVVUvnAtXbtids2O2KLd0",
  authDomain: "ub-loopback.firebaseapp.com",
  projectId: "ub-loopback",
  storageBucket: "ub-loopback.appspot.com",
  messagingSenderId: "831992174946",
  appId: "1:831992174946:web:bd0f1963acaca24c0ff43b",
  measurementId: "G-MXP4BEY67C",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Subscribe to "default" topic

setTimeout(() => {
  getToken(messaging, {
    vapidKey:
      "BGYNclealf3yT28K2-DUH5HJTrCtvqdARU8GGdxyC6yQcFUFGRP9y_QnmCbbi40wCJGhHvhb3zTg7aVRNKHrcjs",
  })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        if (!subscribed) {
          fetch("http://localhost:3000/subscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: currentToken,
              topic: "default",
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              Toast.show({
                type: "info",
                text1: "Information",
                text2: data.message,
              });
            })
            .catch((error) => {
              Toast.show({
                type: "error",
                text1: "Error",
                text2: error.toString(),
              });
            });
          localStorage.setItem("subscribed", "true");
        }
      } else {
        // Show permission request UI
        Toast.show({
          type: "warn",
          text1:
            "No registration token available. Request permission to generate one.",
        });
        // ...
      }
    })
    .catch((err) => {
      Toast.show({
        type: "error",
        text1: "An error occurred while retrieving token.",
        text2: err.toString(),
      });
      // ...
    });
}, 3000);

onMessage(messaging, (payload) => {
  console.log("Message received.", payload);
  Toast.show({
    type: "info",
    text1: payload.notification.title,
    text2: payload.notification.body,
  });
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Toast />
      <Card>
        <Text style={styles.paragraph}>Firebase push notification</Text>
      </Card>

      <Button
        title="test"
        onPress={() =>
          Toast.show({
            type: "success",
            text1: "Wow so easy!",
            text2: "Body goes here.",
          })
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
