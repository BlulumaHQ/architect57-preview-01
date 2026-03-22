import { createRoot } from "react-dom/client";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import App from "./App.tsx";
import "./index.css";

// SPA redirect: restore path from 404.html fallback
const redirectPath = sessionStorage.getItem("spa-redirect");
if (redirectPath && redirectPath !== "/") {
  sessionStorage.removeItem("spa-redirect");
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")!).render(<App />);
