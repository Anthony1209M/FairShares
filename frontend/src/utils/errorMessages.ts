export function setShake()
{
    const el = document.getElementById("login-card");
    el?.classList.remove("shake");
    
    setTimeout(() => {
    el?.classList.add("shake");
    }, 10);
    

    
   
}