// Back end ___________________________
function Order(){
  this.pizzas = [],
  this.currentId = 0
}

Order.prototype.addPizza = function(pizza){
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.deletePizza = function(id){
  for(var i=0; i<this.pizzas.length; i++){
    if(this.pizzas[i]){
      if (this.pizzas[i].id == id){
        delete this.pizzas[i];
        return true;
      }
    }
  };
  return false;
}

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
  return toppingsTotal + this.sizing.price;
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
  var insertWhere = $("span#total");
  var insertWhat = pizza.totalCost().toFixed(2);
  insertWhere.text(insertWhat);
}

var order = new Order();
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
    document.getElementById("formOne").reset();
    order.addPizza(pizza);
console.log(order.pizzas);
    displayTotal();
  });
});
