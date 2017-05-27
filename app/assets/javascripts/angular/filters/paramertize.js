angular.module('GiftsForLess')
  .filter('paramertize', [function() {
   return function(input) {
     var final = input.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
     return final;
   };
  }]);
