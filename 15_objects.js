var products = [{
    id:1,name:'Mouse',price:18000},{id:2,name:'Keyboard',price:28000},{id:3,name:'Laptop',price:908000},{id:4,name:'Acer Laptop',price:108000}];
console.log(products);
// var newarr = [];
// for(var i=0;i<products.length;i++){
// if(products[i].price>100000){
//    newarr.push([products[i]]);
// }
// }
// console.log(newarr);
var myArray = products.filter(function(element){
    if(element.price>100000){
        return true;
    }else return false;
});
console.log(myArray)

