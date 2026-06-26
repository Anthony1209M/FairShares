export function togglePasswordVisibility(passInput: HTMLInputElement, iconPassBtn: HTMLElement)
{

    if(passInput?.type === "password")
    {
        passInput.type = "text";
        iconPassBtn?.setAttribute("name", "eye-outline")
    }
    else if(passInput?.type === "text")
    {
        passInput.type = "password";
        iconPassBtn?.setAttribute("name", "eye-off-outline")
        
        
    }
    
}

export function toggleIconVisibility(passInput: HTMLInputElement, iconPassBtn: HTMLElement)
{
    

    if(passInput.value.length > 0)
    {
        iconPassBtn?.classList.remove("hidden")
    }
    else
    {
        iconPassBtn?.classList.add("hidden")
    }
    


}

