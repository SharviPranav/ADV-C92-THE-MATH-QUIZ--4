var firebaseConfig = {
      apiKey: "AIzaSyCL5ll5HDlcjQIu8NJgMMnHDLglrR03T_o",
      authDomain: "kwitter-346ab.firebaseapp.com",
      databaseURL: "https://kwitter-346ab-default-rtdb.firebaseio.com",
      projectId: "kwitter-346ab",
      storageBucket: "kwitter-346ab.appspot.com",
      messagingSenderId: "923921407280",
      appId: "1:923921407280:web:b3d96bbe3c5f6dff5ffcf5",
      measurementId: "G-2QMT7M3QYV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+Room_names).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref("/"+Room_names).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}