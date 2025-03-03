let count=0;
function inc_count(){
    count++;
    display_count();
    check();
}
function display_count(){
    document.getElementById("count_display").innerHTML=count;
}
function check(){
    if(count===10){
        alert("Gotch 10 points");
    }
    else if (count===20) {
        alert("Ohh 20 noce");
    }
}