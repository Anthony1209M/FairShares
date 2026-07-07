export function setShake()
{
    const el = document.getElementById("login-card");
    el?.classList.remove("shake");
    
    setTimeout(() => {
    el?.classList.add("shake");
    }, 10);
    

    
   
}

export function errorMessage(message: string)
{
    const errorEl = document.getElementById("error-message");
    if(errorEl)
    {
        errorEl.textContent = message;
        errorEl.classList.remove("hidden");

        setTimeout(() => {
         errorEl.classList.add("hidden");
    
         }, 3000);
    }
}

