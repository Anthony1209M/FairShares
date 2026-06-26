import { showLogin } from "./pages/login";
import { app } from "./pages/app";
import { showDashboard } from "./pages/dashboard";
import {getCurrentUser} from "./api/auth"; 
import { showSignUp } from "./pages/signUp";

export async function navigateTo(path: string)
{
    history.pushState({}, "", path);
    await renderPage(path);
};


export async function renderPage(path: string)
{
    const user = await getCurrentUser();

    if ((path === "/login" || path === "/") && user) {
        history.replaceState({}, "", "/dashboard");
        return showDashboard(); // already logged in
    }

    if (path === "/dashboard" && !user) {
        history.replaceState({}, "", "/login");
        return showLogin(); // not logged in
    }

     else if(path === "/signup" && user)
    {
        history.replaceState({}, "", "/dashboard");
        return showDashboard();
    }

    if(path === "/login" || path === "/")
    {
        return showLogin();
    }

    else if(path === "/signup")
    {
        return showSignUp();
    }

    else if(path === "/dashboard")
    {
        return showDashboard();
    }

};

window.addEventListener("popstate", () => renderPage(location.pathname));