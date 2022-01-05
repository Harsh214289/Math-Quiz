
var p1name = localStorage.getItem("Name_1");
var p2name = localStorage.getItem("Name_2");
 
var p1score = 0;
var p2score = 0;

document.getElementById("p1_name").innerHTML = p1name;
document.getElementById("p2_name").innerHTML = p2name;

document.getElementById("p1_score").innerHTML = p1score;
document.getElementById("p2_score").innerHTML = p2score;

document.getElementById("player_q").innerHTML = "Question Turn : " + p1name;
document.getElementById("player_ans").innerHTML = "Answer Turn : " + p2name;

function display_number(){
     num1 = document.getElementById("1st_number").value;
     num2 = document.getElementById("2nd_number").value;
     answer = num1 * num2;

    question = "<h4 id='question_number'>" + num1 + "x" + num2 + "</h4>";
    input_box = "<input type = 'text' id='text_output' placeholder = 'Enter Answer Here'>";
    check_button = "<br><button onclick='check()'> Check </button>";
    combine = question + input_box + check_button;

    document.getElementById("output").innerHTML = combine;
    document.getElementById("1st_number").value="";
    document.getElementById("2nd_number").value="";

}

var ques_turn = "player1";
var ans_turn = "player2";

function check(){
    var answer1 = document.getElementById("text_output").value;

    if(answer == answer1){
       if(ans_turn == "player2"){
           p2score = p2score + 1;
           document.getElementById("p2_score").innerHTML = p2score;
       }     
       else{
           p1score = p1score + 1;
           document.getElementById("p1_score").innerHTML = p1score;
       }
    }

    if(ques_turn == "player1"){
        ques_turn = "player2";
        document.getElementById("player_q").innerHTML = "Question Turn : " + p2name;
    }
    else{
        ques_turn = "player1";
        document.getElementById("player_q").innerHTML = "Question Turn : " + p1name;
    }



    if(ans_turn == "player1"){
        ans_turn = "player2";
        document.getElementById("player_ans").innerHTML = "Answer Turn : " + p2name;
    }
    else{
        ans_turn = "player1";
        document.getElementById("player_ans").innerHTML = "Answer Turn : " + p1name;
    }

    document.getElementById("output").innerHTML = "";
}