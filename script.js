const loginForm=document.querySelector("form.login");
const signupForm=document.querySelector("form.signup");
const loginTab=document.querySelector("label.login");
const signupTab=document.querySelector("label.signup");
const signupLink=document.querySelector(".signup-link a");
const signupText=document.querySelector(".title-text .signup");
const loginText=document.querySelector(".title-text .login")

// console.log(signupForm,loginForm ,"   ",loginTab,signupTab )

signupTab.addEventListener("click",signupClicked);
loginTab.addEventListener("click",loginClicked);
signupLink.addEventListener("click",signupLinkClicked)
function signupClicked(){
	loginForm.style.marginLeft="-50%";
	loginText.style.marginLeft="-200%"
}
function loginClicked(){
	loginForm.style.marginLeft="0";
	loginText.style.marginLeft="0"
}
function signupLinkClicked(){
	signupTab.click();
	return;
}