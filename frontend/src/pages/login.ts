import {app} from "./app";
import {showSignUp} from "./signUp";
import {login, type loginDTO} from "../api/auth";
import { navigateTo } from "../router";

export const showLogin = () =>
{
app.classList.add("min-h-screen", "flex", "flex-col", "items-center");
app.innerHTML =
`
<div class="card" >
          <form action="submit" class="flex flex-col gap-4">

            <h1 class="self-center text-3xl font-medium mb-4">Login</h1>

            <div>
              <input type="email" id="email-input" placeholder="Enter your email" class="input w-full">
            </div>
            
            <div class="relative">
              <button type="button" class="absolute right-3 top-1/2
               -translate-y-1/2 " >
               <ion-icon id="togglePasswordBtn" name="eye-off-outline" class="hidden text-black text-xl align-middle cursor-pointer">
               </ion-icon></button>
              <input type="password" id="input-pass" placeholder="Enter your password" class="input w-full">

            </div>
            
            <button id="login-btn" class="primaryBtn">Log in</button>
            
          
          </form>

          <button class="px-4 py-3 text-center text-sm rounded-4xl cursor active:opacity-70 hover:bg-gray-100">Forgot the password?</button>

          <button id="signUpBtn" class=" hover:bg-gray-100 px-4 py-3 border text-center active:opacity-70 border-green-500 text-sm rounded-4xl">Create new account</button>

          
       </div>
       
`



const emailInput = document.querySelector<HTMLInputElement>('#email-input')!;
const passInput = document.querySelector<HTMLInputElement>('#input-pass')!;
const togglePasswordBtn = document.getElementById("togglePasswordBtn");
const logInBtn = document.querySelector<HTMLButtonElement>("#login-btn");
const signUpBtn = document.querySelector("#signUpBtn");


function togglePasswordVisibility(e: MouseEvent)
{
    if(passInput?.type === "password")
    {
        passInput.type = "text";
        togglePasswordBtn?.setAttribute("name", "eye-outline")
    }
    else if(passInput?.type === "text")
    {
        passInput.type = "password";
        togglePasswordBtn?.setAttribute("name", "eye-off-outline")
        
        
    }
    
}

function toggleIconVisibility(e: Event)
{
    

    if(passInput.value.length > 0)
    {
        togglePasswordBtn?.classList.remove("hidden")
    }
    else
    {
        togglePasswordBtn?.classList.add("hidden")
    }
    


}

function checkInputs(e:Event)
{
    
    if(emailInput.value.length > 0 && passInput.value.length >= 6)
    {
        if(logInBtn)
        {
            logInBtn.disabled = false;
        }
        

    }
    else
    {
         if(logInBtn)
        {
            logInBtn.disabled = true;
        }
    }

}

async function signIn(e:Event)
{
    e.preventDefault();

    const user: loginDTO = 
    {
        email: emailInput.value,
        password: passInput.value
    }
    
    try
    {
        await login(user);
        navigateTo("/dashboard");

    }
    catch(err)
    {
        console.log(err);
    }
    
    

}



if(logInBtn)
{
   logInBtn.disabled = true;
}

logInBtn?.addEventListener("click", signIn);

signUpBtn?.addEventListener('click', showSignUp);

togglePasswordBtn?.addEventListener("click", togglePasswordVisibility);

passInput?.addEventListener("input", toggleIconVisibility);

passInput?.addEventListener("input", checkInputs);
emailInput?.addEventListener("input", checkInputs);

};

