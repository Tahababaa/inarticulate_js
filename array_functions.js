function adds(arr,x){
    console.log("original array: "+arr);
    arr.push(x)
    console.log("modified array: "+ arr);

}
adds([1,2,3,4,5],6);

// pop
function remv(arr,x){
    console.log("original array: "+arr);
    arr.pop(x)
    console.log("modified array: "+ arr);

}
remv([1,2,3,4,5],6);

// shift => removes element from start
function rmvs_front(arr,x){
    console.log("original array: "+arr);
    arr.shift(x)
    console.log("modified array: "+ arr);

}
rmvs_front([1,2,3,4,5],6);

// unshift=> add element from start
function adds_frnt(arr,x){
    console.log("original array: "+arr);
    arr.unshift(x)
    console.log("modified array: "+ arr);

}
adds_frnt([1,2,3,4,5],6);

// cocatinate =>adds two arrays

function cocatinate(arr,arr2){
    console.log("original array: "+arr);
    arr.concat(arr2)
    console.log("modified array: "+ arr);

}
adds([1,2,3,4,5],[2,4,5,8,9]);
///
// ForEach
//
const originalArray = [1,2,3,4,5];

function logThing(str){
    console.log(str);

}
originalArray.forEach(logThing);