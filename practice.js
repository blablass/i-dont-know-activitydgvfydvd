
var firebaseConfig = {
    apiKey: "AIzaSyAYbDikS8jz6a6q6yvVF1Gd18YiDaGvFuA",
    authDomain: "kwitter-9dc4f.firebaseapp.com",
    databaseURL: "https://kwitter-9dc4f-default-rtdb.firebaseio.com",
    projectId: "kwitter-9dc4f",
    storageBucket: "kwitter-9dc4f.appspot.com",
    messagingSenderId: "171183546650",
    appId: "1:171183546650:web:ef7d8110a31c3a731b4ca3",
    measurementId: "G-8QEBMXW02T"
  };
  
 
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      texts =document.getElementById("hole").value
    firebase.database().ref("/").child(texts).update({
        purpose:"addingusername"
    });
    }