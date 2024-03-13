// dumb reverse counter in js

let x=30; //From 30 to 0

function cs(){
    if(x>0){
    console.log(x);
    x--;}
    else{
        clearInterval(cs);
    }
}
setInterval(cs,1000);
