
function login(){

var player_1_name = document.getElementById("input_1").value;
var player_2_name = document.getElementById("input_2").value;

localStorage.setItem("Name_1",player_1_name );
localStorage.setItem("Name_2",player_2_name );

window.location = "game_page.html";

}
