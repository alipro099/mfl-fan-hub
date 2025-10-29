import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FantasyReal from "./pages/FantasyReal";
import Game from "./pages/Game";
import Tasks from "./pages/Tasks";
import Dating from "./pages/Dating";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fantasy" element={<FantasyReal />} />
          <Route path="/game" element={<Game />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/dating" element={<Dating />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
