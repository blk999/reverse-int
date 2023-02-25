module.exports = function reverse(n) {
    
    let str = Math.abs(n).toString();
    let reverse = "";
      for (i = 0; i < str.length; i++) {
          reverse = str[i] + reverse;
      };
     
      return +reverse;
}
