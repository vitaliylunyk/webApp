'use strict';
app.filter('euroCurrency', euroCurrency);

function euroCurrency() {
  return function(input) {
    if(isNaN(input)){
      return input;
    } else {
      return '€' +' '+ parseFloat(input).toFixed(2);
    }
  }
}
