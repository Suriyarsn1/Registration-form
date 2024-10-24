const userName=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
const form=document.querySelector('.form')


form.addEventListener('submit',(e)=>{
  
    e.preventDefault()
    formValidate()
})

function formValidate(){
    const userNameval=userName.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword .value.trim() 

    if(userNameval==='')
    {
      setError(userName,'Shoud not empty')
    }
    else{
        setSuccess(userName)
    }
    if(emailval===''){
        setError(email,'Shoud not empty')
    }
    else if(!validateEmail(emailval)){
        setError(email,'Enter valid email')
    }
    else{
        setSuccess(email)
    }
    if(passwordval===''){
        setError(password,'Shoud not empty') 
    }
    else if(passwordval.length<8)
    {
        setError(password,'Must be 8 Charactor') 
    }
    else{
        setSuccess(password)
    }
    if(cpasswordval==='')
    {
        setError(cpassword,'Shoud not empty')    
    }
    else if(cpasswordval!==passwordval)
    {
        setError(cpassword,'Must be Same')  
    }
    else
    {
        setSuccess(cpassword)
    }
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