// time taken by a function

function summ(n){
  let a=0;
  for(let i=0;i<n;i++){
    a=a+i;
  }
  return a;
}
let bt= new Date(); ///
const starts = bt.getTime();/// Time starts here
console.log("Function started: "+bt.getTime()); /// Printing starting time

console.log(summ(1000000000)); // Function Runs here

let et= new Date(); // 

const ends = et.getTime(); // End time 
console.log("Function ended: "+et.getTime()); // Printing endtime


console.log("Function took "+ (ends-starts)+" milliseconds "); /// Printing time function took to complete in milliseconds