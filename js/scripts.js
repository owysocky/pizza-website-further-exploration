// Back end ___________________________
// function Order(){
//
// }
function Pizza(){
  this.sizing = "",
  this.toppings = []
}

Pizza.prototype.addTopping = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size){
  return this.sizing = size;
}

Pizza.prototype.totalCost = function(){
  var toppingsTotal = 0;
  this.toppings.forEach(function(topping){
    toppingsTotal += topping.price;
  });
  return toppingsTotal + this.price;
}

function Size(name, price){
  this.name = name,
  this.price = price
}

function Topping(name, price){
  this.name = name,
  this.price = price
}




// Front end __________________________
function displayTotal(){
  var insertIn = $("span#total");
  var insertWhat = pizza.totalCost();
  insertIn.text(insertWhat);
}

var pizza = new Pizza();
var small = new Size ("small", 6.5);
var medium = new Size ("medium", 9.5);
var large = new Size ("large", 14);
var cheese = new Topping("cheese", 2.99);
var dCheese = new Topping("doubleCheese", 3.99);
var pepperoni = new Topping("pepperoni", 2.99);
var artichoke = new Topping("artichoke", 1.99);
var anchovy = new Topping("anchovy", 2.99);
var bacon = new Topping("bacon", 2.99);
var pineapple = new Topping("pineapple", 1.99);

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sizeInput = $("input:radio[name=size]:checked").val();
    pizza.addSize(eval(sizeInput));
console.log(pizza);

  $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      pizza.addTopping(eval(topping));
    });
    displayTotal();
  });
});
