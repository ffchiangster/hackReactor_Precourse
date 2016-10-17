// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(x) {
  if (x === null){
    return 'null';
  }
  else if (typeof x === 'string'){
    return '"' + x + '"';
  }
  else if(Array.isArray(x)){
    var arrString = '['
    for (var i = 0; i < x.length; i++){
      if (i !== x.length - 1){
        arrString += '' + stringifyJSON(x[i]) + ',';
      } else {
        arrString += stringifyJSON(x[i]);
      }
    }
    arrString += ']'
    return arrString;
  }
  else if (typeof x === 'number'|| typeof x === 'boolean'){
    return "" + x;
  }
  else if (typeof x === 'object') {
    var objString = '{'
    var keys = Object.keys(x);
    var last = keys[keys.length-1];
    for(var i in x){
      if(stringifyJSON(x[i]) !== undefined){
        if (i === last){
          objString += '' + '"' + i + '"' + ":" + stringifyJSON(x[i]);
        } else {
            objString += '' + '"' + i + '"' + ":" + stringifyJSON(x[i]) + ",";
        }
      }
    }
    objString += '}'
    return objString;
  }
};
