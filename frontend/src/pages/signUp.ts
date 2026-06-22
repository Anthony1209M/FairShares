import {app} from "./app";

export const showSignUp = () => 
{
    app.innerHTML = 
    `
         <div class="card">
              <h1 class="self-center text-3xl font-medium mb-4">SignUp</h1>
              <form action="submit" class="flex flex-col gap-4">
                  <input type="text" placeholder="Name" class="input">
                  <input type="text" placeholder="Last Name" class="input">
                  <input type="email" placeholder="Email" class="input">
                  <input type="password" placeholder="Password" class="input">
                  <input type="password" placeholder="ConfirmPassword" class="input">
                  <button type="submit" class="primaryBtn">Sign Up</button>
              </form>
              
            </div>
    `
}