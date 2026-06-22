import { showLogin } from "./pages/login";
import { app } from "./pages/app";
import { showDashboard } from "./pages/dashboard";

export function navigateTo(path: string)
{
    history.pushState({}, "", path);
    renderPage(path);
};


export function renderPage(path: string)
{
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