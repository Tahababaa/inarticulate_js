// Terminal clock in HH:MM:SS format
for(let i=0;i<=500;i++){
    setTimeout(() => printTime(i),i*1000);
}
function printTime(i){
    let date = new Date();
    console.clear();
    console.log(date.getHours(),":",date.getMinutes(),":",date.getSeconds()+1)
}
