var increse = 0;

function add_score(){
    increse = increse + 1;
    document.getElementById("score").innerHTML = "Score = " + increse;
}

function save_score(){
    localStorage.setItem("Score" , increse);
}

function next_page(){
     window.location = "https://www.youtube.com/channel/UC6F-rjlJdoecOP1kAjWjTBg";
}