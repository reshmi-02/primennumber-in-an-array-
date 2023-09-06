let size=parseInt(prompt("Enter the length of the array"));
var arr=[];
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt("Enter value for "+(i+1)));
}
document.write("Given array = [ "+arr+" ]<br><br>");

//function
function primenum(){

var newar=[];

for (let i=0;i<arr.length;i++){

var prime;

if(arr[i]==2){
    prime=true;
}
for(let j=2; j<arr[i]; j++){
    prime=true;
    if(arr[i]%j==0){
       prime=false;
       break;
    }
}

if(prime==true){
    newar.push (arr[i]);
}

}

return newar;

}

//function calling
var a=primenum();
document.write("Prime numbers are = [ "+a+" ]");