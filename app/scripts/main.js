var TodoList = function(){

  this.items = [];

};

TodoList.prototype.addItem = function(item){

  this.items.push(item);

};

TodoList.prototype.isEmpty = function(){

  return this.items.length === 0;

};

TodoList.prototype.size = function(){

  return this.items.length;

};

TodoList.prototype.getItem = function(item){

  return this.items[item];

};

TodoList.prototype.removeItem = function(item){

  this.items.splice(item, 1);

};

TodoList.prototype.removeItems= function(){

  this.items.length = 0;

};

TodoList.prototype.addItems = function (item) {

  item.forEach(function(element){
    this.addItem(element);
  }.bind(this));

};
