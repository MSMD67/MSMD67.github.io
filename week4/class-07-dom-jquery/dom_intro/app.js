// prompt('hi');
// var myName  = "Mike";
// console.log(myName);

window.onload = function (){
  // alert('hi');
};
// alert('still loading');

var helloEl = document.getElementById('hello');
console.log(helloEl);

helloEl.innerHTML = 'JS IS SO COOL!';

// query for one of a type
var pEl = document.querySelector('p');
console.log(pEl);

// query for all of a type
var listEls = document.querySelectorAll('li');
console.log(listEls);

//click event
document.getElementById('my-btn').onclick = function (event){
  // console.log(event);
  var input = document.getElementById('my-input').value;

};