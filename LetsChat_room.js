
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

user_name = localStorage.getitem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "LetsChat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    console.log("room_name " + Room_names);

    row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML = row;
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "LetsChat_page.html";
}