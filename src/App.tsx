import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Contas from "./pages/Contas";
import Lancamentos from "./pages/Lancamentos";
import Patrimonio from "./pages/Patrimonio";
import Investimentos from "./pages/Investimentos";
import Objetivos from "./pages/Objetivos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contas" element={<Contas />} />
          <Route path="/lancamentos" element={<Lancamentos />} />
          <Route path="/patrimonio" element={<Patrimonio />} />
          <Route path="/investimentos" element={<Investimentos />} />
          <Route path="/objetivos" element={<Objetivos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
