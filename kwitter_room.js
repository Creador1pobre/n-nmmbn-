

var firebaseConfig = {
  apiKey: "AIzaSyA8Xk7pKmvHEdCyziBCThPT4YdlDQSxeUQ",
  authDomain: "kwitter-2f68c.firebaseapp.com",
  databaseURL: "https://kwitter-2f68c-default-rtdb.firebaseio.com",
  projectId: "kwitter-2f68c",
  storageBucket: "kwitter-2f68c.appspot.com",
  messagingSenderId: "406822268116",
  appId: "1:406822268116:web:72e9adc9fc1f72f47b5f41"

};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");


document.getElementById("user_name").innerHTML = "!Te damos la bienvenida," + user_name + "!";


function addRoom()
{
 
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "agregando el nombre de la sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Nombre de la sala: " + Room_names);

       row = "<div class='room_name' id=" + Room_names + "onclic='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();
    
function logout()
{
    /*Eliminar el nombre de usuario del almacenamiento local */
    localStorage.removeItem("user_name");
    /*Eliminar el nombre de usuario de la sala */
     localStorage.removeItem("room_name");
    /*Redirigir la página de  inicio de sesión de kwitter.html */
    window.location = "index.html";
}