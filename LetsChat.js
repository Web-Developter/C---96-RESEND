var firebaseConfig = {
    apiKey: "AIzaSyCv5oyCTTCkslLvsc9RraajraKXnZpdI3o",
    authDomain: "letschat-98738.firebaseapp.com",
    databaseURL: "https://letschat-98738-default-rtdb.firebaseio.com",
    projectId: "letschat-98738",
    storageBucket: "letschat-98738.appspot.com",
    messagingSenderId: "797586430188",
    appId: "1:797586430188:web:07420faeb66903eb50edc9"
  };
  
 firebase.initializeApp(firebaseConfig);

 function addUser(){
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);

  window.location = "LetsChat_room.html";
}