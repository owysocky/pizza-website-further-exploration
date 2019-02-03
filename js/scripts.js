// Back end ___________________________
function Pizza(size, toppings){
  this.sizing = [],
  this.toppings = []
}

Pizza.prototype.addTopping = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function(size){
  this.sizing.push(size);
}

Pizza.prototype.totalCost = function(){
  var toppingsTotal = 0;
  this.toppings.forEach(function(topping){
    toppingsTotal += topping.price;
  });
  return toppingsTotal + size.price;
}

function Size(name, price){
  this.name = name,
  this.price = price
}

function Topping(name, price){
  this.name = name,
  this.price = price
}



var toppingCheese = new Topping ('cheese', 2);
var toppingBacon = new Topping ('bacon', 3);
var size = new Size("small", 2)
var pizza1 = new Pizza ();
pizza1.addTopping(toppingBacon);
pizza1.addTopping(toppingCheese);
pizza1.addSize(size);



// Front end __________________________


$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();

  });
});
