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




// Front end __________________________
var pizza = new Pizza();
var small = new Size ("small", 6.5);
var medium = new Size ("small", 9.5);
var large = new Size ("small", 14);
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
    pizza.addSize(sizeInput);
console.log(pizza);

  $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      pizza.addTopping(topping);
    });
  });
});
