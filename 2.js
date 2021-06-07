player1_name=localStorage.getItem("player1name")
player2_name=localStorage.getItem("player2name")

function send(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>"
    input_box="<br>Answer : <input type='text'id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value="";
    }

    question_turn="Player1";
answer_turn="Player2";

player1_score=0;
player2_score=0;

document.getElementById("player1name").innerHTML=player1_name +" - ";
document.getElementById("player2name").innerHTML=player2_name +" - ";


document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

function check(){
get_answer=document.getElementById("input_check_box").value;

if(get_answer==actual_answer){

    if(answer_turn=="Player1"){
        update_player1score=player1score+1;
        document.getElementById("player1score").innerHTML=update_player1_score;    
    }
    else{
    update_player2score=player2_score+1;
    document.getElementById("player2score").innerHTML=update_player2_score;
    }
}

if(question_turn=="Player1"){
question_turn="Player2"
document.getElementById("player_question").innerHTML="Question turn - "+ player2_name;
}
else{
question_turn="Player1"
document.getElementById("player_question").innerHTML="Question turn - "+ player1_name;
}


if(answer_turn=="Player1"){
answer_turn="Player2"
document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name;
}
else{
answer_turn="Player1"
document.getElementById("player_answer").innerHTML="Answer turn - "+ player1_name;
}


document.getElementById("output").innerHTML="";
}