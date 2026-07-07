import { getCurrentUser } from "./api/auth";
import { setCurrentUser } from "./store/user";

export async function initAuth()
{
    const currentUser = await getCurrentUser();
    console.log("Current User:", currentUser);
    
    if(currentUser)
    {    
        setCurrentUser(currentUser);
        
        
       
    }
    else
    {
        
         setCurrentUser(null);

    }

   


    
}