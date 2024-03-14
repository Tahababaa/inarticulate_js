// Finding_length
function stringlength(str){
    console.log("String user entered "+str);
    console.log("length of string: "+str.length);
}

stringlength("What is the time right now");

//First_index
function findind(sentence,target){
    console.log("String user entered: "+sentence);
    console.log("Index of String: "+sentence.indexOf(target));
}
findind("Hello my name is Jacob, and I am looking for Jesus.","for"); //Target => for

// Last_index: when a word occurs more than once and finding last ones index
function findind(sen,findindex){
    console.log("String user entered: "+sen);
    console.log("Index of String: "+sen.lastIndexOf(findindex));
}
findind("Hello my name is Jacob, I am here for a job and I am looking for Jesus.","for");

// Replace in strings
function rep(str,wrd,tar){
    console.log("Original string; "+str);
    console.log("New string: "+str.replace(wrd,tar));
}
rep("Hello my name is John","is","is not");

// Split Strings
function cutIt(str,cutter){
    console.log("Before splitting: "+str);
    console.log("After Splitting: "+str.split(cutter));
}
cutIt("Thank You for all the support is what i said to my parents"," "); //Separated by space " "
//trim the extra spaces before and after the string
function trimIt(str){
    console.log("Before trimming: "+str);
    console.log("After trimming: "+str.trim());
}
trimIt("                Thank You for all the support is what i said to my parents       " );

//toUpperCase
function toUpper(str){
    console.log("Before function toUpperCase: "+str);
    console.log("After function toUpperCase: "+str.toUpperCase());
}
toUpper("Thank You for all the support is what i said to my parents");
// toLowerCase
function toLower(str){
    console.log("Before function toUpperCase: "+str);
    console.log("After function toUpperCase: "+str.toLowerCase());
}
toLower("THANK YOU FOR ALL THE SUPPORT IS WHAT I SAID TO MY PARENTS");