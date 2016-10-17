// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var array = [];
  blah = function(element) {

    if(element.classList !== undefined && element.classList.contains(className)){
      array.push(element);
    }
    if (element.childNodes !== undefined){
      for(var i = 0; i < element.childNodes.length; i++){
        blah(element.childNodes[i]);
      }
    }
  }
  blah(document.body)
  return array
};
