let outputscreen=document.getElementById("input");
function display(num){
    outputscreen.value+=num;
}
function Clear(){
outputscreen.value="";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
function calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch{
        outputscreen.value="err";
    }
}