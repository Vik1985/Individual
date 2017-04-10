$(function () {
  var inputs = document.getElementsByTagName('input'),
      inputsLen = inputs.length,
      button = document.getElementsByTagName('button')[0],
      form = document.getElementsByTagName('form')[0];

     button.onclick = function () {
    inputsLen = inputs.length;
    
    while (inputsLen--) {
      if (inputs[inputsLen].value.length > 0) {
        return true;
      }     
    next(inputs[inputsLen]).nextSibling.style.display = 'block'; 
    }
  }
  
 
  
function next(elem) {
  do {
    elem = elem.nextSibling;
  }
  while (elem && elem.nodeType !== 1);
  return elem;        
}