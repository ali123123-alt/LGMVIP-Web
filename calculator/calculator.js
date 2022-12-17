var input=document.querySelector("#input");
var clear1=document.querySelector("#clear");
function calculate(a){
    if(input.value=="0"){
        input.value="";
        input.value+=a;   
    }else{
        input.value+=a;
    }
}
clear1.addEventListener("click",()=>{
    input.value="0";
})
function equal(){
    if(input.value.charAt(input.value.length-1)=="."){
        input.value="Math error";
    }else if(input.value.charAt(input.value.length-1)=="+"){
        input.value="Math error";
    }else if(input.value.charAt(input.value.length-1)=="*"){
        input.value="Math error";
    }else if(input.value.charAt(input.value.length-1)=="/"){
        input.value="Math error";
    }else if(input.value.charAt(input.value.length-1)=="*"){
        input.value="Math error";
    }else{
        input.value=eval(input.value);
    }

}