var enroll = document.querySelector("#enroll");
var clear = document.querySelector("#clear");
var name1 = document.querySelector("#name");
var email = document.querySelector("#email");
var website = document.querySelector("#website");
var image = document.querySelector("#image");
var gender = document.getElementsByName("gender");
var table=document.querySelector("#table");
var java=document.querySelector("#java");
var html=document.querySelector("#html");
var css=document.querySelector("#css");
var result=[];
enroll.addEventListener("click", function () {
  if (name1.value == "") {
    alert("please enter your name");
    name1.focus();
    return false;
  }
  if (email.value == "") {
    alert("please enter your email");
    email.focus();
    return false;
  }
  if (website.value == "") {
    alert("please enter website link");
    webste.focus();
    return false;
  }
  if (image.value == "") {
    alert("please enter image link");
    image.focus();
    return false;
  }
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) gender = gender[i].value;
  }
  if(java.checked){
    result.push("java");
  }
  if(html.checked){
    result.push("html");
  }
  if(css.checked){
    result.push("css");
  }
  table.innerHTML+="<tr><td><h4>"+name1.value+"</h4><p>"+gender+"</p><p>"+email.value+"<p><a href='"+website.value+"'>"+website.value+"</a><p>"+result.toString()+"</p></td><td><img src='"+image.value+"' /></td></tr>";
});
clear.addEventListener("click",()=>{
  window.location.reload();
})