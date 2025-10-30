import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const ua = navigator.userAgent || '';
const hasTGObject = typeof (window as any).Telegram?.WebApp !== 'undefined';
const hasTGQuery = /tgWebApp/.test(location.search) || /tgWebApp/.test(location.hash);
const isTG = hasTGObject || ua.includes('Telegram') || hasTGQuery;

const base = import.meta.env.BASE_URL;

// До монтирования: если в TG и хэша нет — переписываем URL в hash-формат
(function ensureHashInTelegram() {
  if (!isTG) return;
  if (location.hash && location.hash.startsWith('#/')) return;

  const pathAfterBase = location.pathname.startsWith(base)
    ? location.pathname.slice(base.length)
    : location.pathname;

  const normalized = pathAfterBase.replace(/^\/?/, '');
  const next = `${base}#/${normalized}${location.search}`;

  history.replaceState(null, '', next);
})();

try {
  (window as any).Telegram?.WebApp?.ready?.();
} catch {}

const Router: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  isTG ? <HashRouter>{children}</HashRouter>
       : <BrowserRouter basename={base}>{children}</BrowserRouter>;

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
