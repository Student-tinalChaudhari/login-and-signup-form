function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("signupForm").classList.toggle("hidden");
}
  
  let em = document.getElementById('email').value ;
  let ps = document.getElementById('pass').value ;  
  let cps = document.getElementById('cpass').value ;
  let em2 = document.getElementById('email2').value ;
  let ps2 = document.getElementById('pass1').value ;
function signup(ps,cps){
     if(ps == cps)
    {
       document.write('You are SignUp Successfully. now Login...!');
    }
    else{
        alert('check password');
    }
    
}
function login(em,ps,em2,ps2){
    if(em==em2 || ps==ps2)
    {
        document.write('You are Login Successfully !');
    }
    else{
        alert('check email and password');
    }
}
