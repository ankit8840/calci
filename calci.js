var x,i=0;
var first='',second='';
function display(x){
    if(x==100 || x==200 || x==300 || x==400)
    {
        if(first==''){
        first=document.getElementById("dis").value;
        return;
        }
        else{
        second=document.getElementById("dis").value;
        operation(x);
        return;
        }
    }
    if(first!=''){
        if(i==0){
        document.getElementById("dis").value= ''; 
        i++;
        }
        document.getElementById("dis").value += x; 
    }
    else{
        
        document.getElementById("dis").value += x; 
    }

}
function operation(x){
    if(x==100){
        first=parseInt(first);
        second=parseInt(second);
        var ans=first+second;
        document.getElementById("dis").value = ans;
    }
    if(x==200){
        first=parseInt(first);
        second=parseInt(second);
        var ans=first-second;
        document.getElementById("dis").value = ans;
    }
    if(x==300){
        first=parseInt(first);
        second=parseInt(second);
        var ans=first*second;
        document.getElementById("dis").value = ans;
    }
    if(x==400){
        first=parseInt(first);
        second=parseInt(second);
        var ans=first/second;
        document.getElementById("dis").value = ans;
    }
}
function del(){
    first='';
    second='';
    document.getElementById("dis").value = '';
    location.reload();
}