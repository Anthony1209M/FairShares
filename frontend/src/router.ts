import { showLogin } from "./pages/login";
import { app } from "./pages/app";
import { showDashboard } from "./pages/dashboard";
import {getCurrentUser} from "./api/auth"; 

export async function navigateTo(path: string)
{
    history.pushState({}, "", path);
    await renderPage(path);
};


export async function renderPage(path: string)
{
    const user = await getCurrentUser();

    if ((path === "/login" || path === "/") && user) {
        return showDashboard(); // already logged in
    }

    if (path === "/dashboard" && !user) {
        return showLogin(); // not logged in
    }

    if(path === "/login" || path === "/")
    {
        showLogin();
    }

    else if(path === "/dashboard")
    {
        showDashboard();
    }

};

window.addEventListener("popstate", () => renderPage(location.pathname));