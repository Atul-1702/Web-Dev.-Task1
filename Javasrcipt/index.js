
const button=document.getElementById("button");
const signup=document.querySelector('#signup');
const signin=document.getElementById("signin");
const cancel1=document.querySelector('.cancelicon');
const cancel2=document.querySelector('.cancelicon1');
const label1=document.querySelector('.label1');
const label2=document.querySelector('.label2');
signup.hidden=true;
signin.hidden=true;
button.onclick=()=>{
   signup.hidden=false;
}
cancel1.onclick=()=>{
    signup.hidden=true;
}
cancel2.onclick=()=>{
    signin.hidden=true;
}
label1.onclick=()=>
    {
        signup.hidden=true;
        signin.hidden=false;
    }
label2.onclick=()=>
    {
        signup.hidden=false;
        signin.hidden=true;
    }