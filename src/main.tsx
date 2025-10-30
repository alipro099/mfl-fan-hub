import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const isTG = typeof window !== 'undefined' && (window as any).Telegram?.WebApp;
const base = import.meta.env.BASE_URL;

const Router: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  isTG ? <HashRouter>{children}</HashRouter>
       : <BrowserRouter basename={base}>{children}</BrowserRouter>;

try {
  (window as any).Telegram?.WebApp?.ready?.();
} catch {}

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
