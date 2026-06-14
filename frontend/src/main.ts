
// import typescriptLogo from './assets/typescript.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML +=
// `


// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const emailInput = document.querySelector<HTMLInputElement>('#email-input')!;
const passInput = document.querySelector<HTMLInputElement>('#input-pass')!;
const togglePasswordBtn = document.getElementById("togglePasswordBtn");
const logInBtn = document.querySelector<HTMLButtonElement>("#login-btn");


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

if(logInBtn)
{
   logInBtn.disabled = true;
}


togglePasswordBtn?.addEventListener("click", togglePasswordVisibility);

passInput?.addEventListener("input", toggleIconVisibility);

passInput?.addEventListener("input", checkInputs);
emailInput?.addEventListener("input", checkInputs)







