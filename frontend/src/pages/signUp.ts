import {app} from "./app";
import {togglePasswordVisibility, toggleIconVisibility} from "../utils/password";


export const showSignUp = () => 
{
    app.classList.add("min-h-screen", "flex", "flex-col", "items-center");
    app.innerHTML = 
    `
         <div class="card">
              <h1 class="self-center text-3xl font-medium mb-4">SignUp</h1>
              <form action="submit" class="flex flex-col gap-4">
                  <input type="text" placeholder="Name" class="input">
                  <input type="text" placeholder="Last Name" class="input">
                  <input type="email" placeholder="Email" class="input">
                   <div class="relative">
                    <button type="button" class="absolute right-3 top-1/2
                    -translate-y-1/2 " >
                    <ion-icon id="iconPassSignUp" name="eye-off-outline" class="hidden text-black text-xl align-middle cursor-pointer">
                    </ion-icon></button>
                    <input id="inputPassSignUp" type="password" placeholder="Password" class="input w-full">

                 </div>

                 <div class="relative">
                    <button type="button" class="absolute right-3 top-1/2
                    -translate-y-1/2 " >
                    <ion-icon id="iconConfirmPassSignUp" name="eye-off-outline" class="hidden text-black text-xl align-middle cursor-pointer">
                    </ion-icon></button>
                    <input id="confirmPassSignUp" type="password" placeholder="ConfirmPassword" class="input w-full">

                 </div>

                  
                  <button type="submit" class="primaryBtn">Sign Up</button>

                  
              </form>
              
            </div>
    `

    const inputPassSignUp = document.getElementById("inputPassSignUp") as HTMLInputElement;
    const confirmPassSignUp = document.getElementById("confirmPassSignUp") as HTMLInputElement;
    const iconPass = document.getElementById("iconPassSignUp")!;
    const iconConfirmPass = document.getElementById("iconConfirmPassSignUp")!;

    //Password input
    inputPassSignUp.addEventListener('input', () =>{
         toggleIconVisibility(inputPassSignUp, iconPass);
    } );

    iconPass.addEventListener('click', () => {
        togglePasswordVisibility(inputPassSignUp, iconPass);
    });


    //Confirm password input
    confirmPassSignUp.addEventListener('input', () =>{
         toggleIconVisibility(confirmPassSignUp, iconConfirmPass);
    } );

    iconConfirmPass.addEventListener('click', () => {
        togglePasswordVisibility(confirmPassSignUp, iconConfirmPass);
    })
    
    
   

}