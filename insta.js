//function to like a post
function likeI(){
   var like = document.getElementById('like');
   like.addEventListener('click',()=>{
      like.innerHTML="&#129293";
   })
   like.addEventListener('dblclick',()=>{
      like.innerHTML="&#128150";
   })
}
function likeII(){
   var like2 = document.getElementById('like2');
   
   var like = document.getElementById('like');
   like2.addEventListener('dblclick',()=>{
      like.innerHTML = "&#128150";
   })
   like2.addEventListener('click',()=>{
      like.innerHTML = "&#129293";
   })
}

function likeIII(){
   var like = document.getElementById('like3');
   like.addEventListener('click',()=>{
      like.innerHTML="&#129293";
   })
   like.addEventListener('dblclick',()=>{
      like.innerHTML="&#128150";
   })
}
function likeIV(){
   var like2 = document.getElementById('like4');
   
   var like = document.getElementById('like3');
   like2.addEventListener('dblclick',()=>{
      like.innerHTML = "&#128150";
   })
   like2.addEventListener('click',()=>{
      like.innerHTML = "&#129293";
   })
}

function likeV(){
   var like = document.getElementById('like5');
   like.addEventListener('click',()=>{
      like.innerHTML="&#129293";
   })
   like.addEventListener('dblclick',()=>{
      like.innerHTML="&#128150";
   })
}
function likeVI(){
   var like2 = document.getElementById('like6');
   
   var like = document.getElementById('like5');
   like2.addEventListener('dblclick',()=>{
      like.innerHTML = "&#128150";
   })
   like2.addEventListener('click',()=>{
      like.innerHTML = "&#129293";
   })
}
//function for camera alert
function camera(){
   var cam=document.getElementById('camera');
   cam.addEventListener('click',()=>{
      if(confirm("give access to camera") == true){
         alert("this feature will be added in next version")
      }
   })
}
//function for galery alert
function gallery(){
   var gal=document.getElementById('gallery');
   gal.addEventListener('click',()=>{
      if(confirm("give access to galery") == true){
         alert("this feature will be added in next version")
      }
   })
}

//login details as an array
var idarr = [["leo@gmail.com","12345"],]



//function for login
function fetchdata(){
   var err = document.getElementById('error');
   var mail = document.getElementById('mail').value;
   var passwd = document.getElementById('passwd').value;
   var len = idarr.length;
  var i=0;
   while(i < len){
      if(idarr[i][0] === mail && idarr[i][1] === passwd){
         window.location.href = "feeds.html";
      }
      i++;
   }
    if(i>= len){
      err.innerHTML = "invalid id or password";
    } 
       
   

}

//function for sign_in

function validate(){
   var mid = document.getElementById('mid').value;
   var newpass = document.getElementById('newpass').value;
   var newpasscon = document.getElementById('newpasscon').value;
   var name = document.getElementById("user_name");
   var signerr = document.getElementById('signerr');
   var sign_up = document.getElementById('sign_up');
   if(newpass !== newpasscon){
      signerr.innerHTML = "password not same";
   }
   
   if(mid.length <= 4){
      signerr.innerHTML = "not a mail id";
   }
   else{
   
   console.log("hi")
  window.location.href = "newuser.html";
   sign_up.addEventListener('click',()=>{
      name.innerHTML = "new user";
   })
  
   
   }
   
}
