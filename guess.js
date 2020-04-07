var num = 7;
do{
var guess = prompt("Guess my Number :");
guess = Number(guess);
if(guess===num){
    alert("correct!");
    break;
}else{
    alert("try again");
}
}while(guess!==num);
