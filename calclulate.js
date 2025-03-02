
function area(){
    let length;
    let width;
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);
    let ans=length*width;
    document.getElementById('result').innerHTML=`The area of rectangle is ${ans}`;
}