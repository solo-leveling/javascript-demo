var player1 = prompt ("Rock Paper Scissors\n Player 1 choice : ");
var player2 = prompt ("Rock Paper Scissors\n Player 2 choice : ");
 player1 =player1.toLowerCase();
 player2 =player2.toLowerCase();
if(player1 == "rock" && player2 == "paper"){
    alert("Player 2 won. ");
}
else if(player1 == "rock" && player2 == "rock"){
    alert("Tie");
}
else if(player1 == "rock" && player2 == "scissors"){
    alert("Player 1 won.");
}
else if(player1 == "paper" && player2 == "paper"){
    alert("Tie ");
}
else if(player1 == "paper" && player2 == "rock"){
    alert("player 1 won.");
}
else if(player1 == "paper" && player2 == "scissors"){
    alert("Player 2 won.");
}
else if(player1 == "scissors" && player2 == "paper"){
    alert("Player 1 won. ");
}
else if(player1 == "scissors" && player2 == "rock"){
    alert("Player 2 won.");
}
else if(player1 == "scissors" && player2 == "scissors"){
    alert("Tie");
}