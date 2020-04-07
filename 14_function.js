function sayHello(name) {
    console.log("Hello" + name);
}
// sayHello("Mg Mg");

function download(fun) {
    console.log("Start Downloading....");
    console.log("Download Completed");
    sayHello("  Hein Htet");
    fun();
}
var x = function() {
    console.log("Completed!");
}

download(x);
// download(function(){
//     console.log("Shut Down!");
// });