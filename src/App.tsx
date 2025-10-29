import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FantasyReal from "./pages/FantasyReal";
import Game from "./pages/Game";
import Tasks from "./pages/Tasks";
import Korobka from "./pages/Korobka";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fantasy" element={<FantasyReal />} />
          <Route path="/game" element={<Game />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/korobka" element={<Korobka />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
