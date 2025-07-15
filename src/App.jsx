import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aeps from "./pages/Financial Inclusion/Aeps";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./layouts/AppLayout";
import AepsDeposite from "./pages/Financial Inclusion/AepsDeposite";
import ExpressTransfer from "./pages/Financial Inclusion/ExpressTransfer";
import MoneyTransfer from "./pages/Financial Inclusion/MoneyTransfer";
import MoveToBank from "./pages/Financial Inclusion/MoveToBank";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Home/>
            }
          />
          <Route
            path="financial-inclusion/Aeps"
            element={
              <Aeps/>
            }
          />
          <Route
            path="financial-inclusion/aeps-deposit"
            element={
              <AepsDeposite/>
            }
          />
          <Route
            path="financial-inclusion/Money-Transfer"
            element={
              <MoneyTransfer/>
            }
          />
          <Route
            path="financial-inclusion/Express-Transfer"
            element={
              <ExpressTransfer/>
            }
          />
          <Route
            path="financial-inclusion/Move-to-Bank"
            element={
              <MoveToBank/>
            }
          />
          <Route
            path="*"
            element={
              // <AppLayout>
                <NotFound />
              // </AppLayout>
            }
          />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
