'use strict';

 function isBetween(num, min, max){
        if(num>min&&num<max){
            return true;
        }
        else {
          return  false;
        }
    }
console.log(isBetween(5, 1, 10)); // true
console.log(isBetween(0, 1, 10)); // false



