

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjBtvKl035132Z9mN3yRRy827WQ4u6wug",
  authDomain: "kwitter-10989.firebaseapp.com",
  databaseURL: "https://kwitter-10989-default-rtdb.firebaseio.com",
  projectId: "kwitter-10989",
  storageBucket: "kwitter-10989.appspot.com",
  messagingSenderId: "588504989847",
  appId: "1:588504989847:web:e50bed3e119281fc5269d2",
  measurementId: "G-GB67JNEX6Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("User Name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!";
//ADD YOUR FIREBASE LINKS HERE


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name is - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;  
    //End code
    });});}
  getData();

function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("Room_Name", room_name);
    window.location = "kwitter_page.html";
}

function redirect(name) {
    console.log(name);
    localStorage.setItem("Room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("User Name");
    localStorage.removeItem("Room_name");
    window.location = "index.html";
}
