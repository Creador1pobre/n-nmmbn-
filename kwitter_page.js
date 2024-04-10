//YOUR FIRE BASE LINKS

var firebaseConfig = {
  apiKey: "AIzaSyA6paSrhAIWKVO4Fgz7Z4gRF47t1qzqsBw",
  authDomain: "prueba-60a41.firebaseapp.com",
  databaseURL: "https://prueba-60a41-default-rtdb.firebaseio.com",
  projectId: "prueba-60a41",
  storageBucket: "prueba-60a41.appspot.com",
  messagingSenderId: "902694735346",
  appId: "1:902694735346:web:b58ca2b6d8c4061a472f6b"
};

firebase.initializeApp(firebaseConfig);


	user_name = localStorage.getItem("user_name");
	room_name = document.getElementById("room_name").value;


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           firebase_message_id = childKey;
           message_data = childData;

   });});}
getData();


function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}

 //Crear la función enviar
 function send()
 {
  //Almacenar en la variable msg el valor del id del cuadro de entrada del mensaje
  msg = document.getElementsById(msg).value;
  //Agregar datos a la base de datos() , y usar el metodo para poner o empujar (en inglés) los valores a la base de datos
  firebase.database().ref(room_name).push({
  //Agregar nombre del usuario
  name:user_name,
  //Agregar mensaje
  message:msg,
  //Iniciar con 0 likes
  like:0
  });
  //actualizar el valor del cuadro de entrada del mensaje a vacío.
  document.getElementById("msg").value = "";
 }