import { showLogin } from "./pages/login";
import { showDashboard } from "./pages/dashboard";
import {navigateTo} from "./router";
import { renderPage } from "./router";
import { initAuth } from "./auth";

await initAuth();
await navigateTo(location.pathname);









