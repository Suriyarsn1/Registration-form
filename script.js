const userName=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
const form=document.querySelector('.form')
let green=true;

form.addEventListener('submit',(e)=>{
 
    if(!formValidate()){
    e.preventDefault()
    }
})

function formValidate(){
    const userNameval=userName.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword .value.trim() 

    if(userNameval==='')
    {
      green=false
      setError(userName,'Shoud not empty')
    }
    else{
        setSuccess(userName)
    }
    if(emailval===''){
        green=false
        setError(email,'Shoud not empty')
    }
    else if(!validateEmail(emailval)){
        green=false
        setError(email,'Enter valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordval===''){
        green=false
        setError(password,'Shoud not empty') 
    }
    else if(passwordval.length<8)
    {
        green=false
        setError(password,'Must be 8 Charactor') 
    }
    else{
        setSuccess(password)
    }
    if(cpasswordval==='')
    {
        green=false
        setError(cpassword,'Shoud not empty')    
    }
    else if(cpasswordval!==passwordval)
    {
        green=false
        setError(cpassword,'Must be Same')  
    }
    else
    {
        setSuccess(cpassword)
    }
    return green;
}
function setError(element,message){
    const inputGroup=element.parentElement;
    const msg=inputGroup.querySelector('.error')
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
    msg.textContent=message
}
function setSuccess(element){
    const inputGroup=element.parentElement; 
    const msg=inputGroup.querySelector('.error')
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
    msg.textContent=''
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };