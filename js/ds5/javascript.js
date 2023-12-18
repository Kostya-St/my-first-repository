let arr = [1, 2, 3, 4, 5];

let i = 0;

let bubu = setInterval( function() {
  let x = arr[i++] || clearInterval( bubu );
  if( x !== undefined ) console.log( x );
}, 1000);