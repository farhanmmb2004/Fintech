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
import Prepaid from "./pages/Bill Payment/Prepaid";
import Postpaid from "./pages/Bill Payment/Postpaid";
import DTH from "./pages/Bill Payment/DTH";
import Electricity from "./pages/Bill Payment/Electricity";
import Water from "./pages/Bill Payment/Water";
import GasLPG from "./pages/Bill Payment/GasLPG";
import GasPipe from "./pages/Bill Payment/GasPip";
import Broadband from "./pages/Bill Payment/Broadband";
import Landline from "./pages/Bill Payment/Landline";
import CableTV from "./pages/Bill Payment/Cabletv";
import Loanemi from "./pages/Bill Payment/Loanemi";

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
          /* Bill Payment Routes */
          <Route
            path="bill-payment/prepaid"
            element={
              <Prepaid/>
            }
          />
          <Route
            path="bill-payment/postpaid"
            element={
              <Postpaid/>
            }
          />
          <Route
            path="bill-payment/dth"
            element={
              <DTH/>
            }
          />
          <Route
            path="bill-payment/electricity"
            element={
              <Electricity/>
            }
          />
          <Route
            path="bill-payment/water"
            element={
              <Water/>
            }
          />
          <Route
            path="bill-payment/gas-[lpg]"
            element={
              <GasLPG/>
            }
          />
          <Route
            path="bill-payment/gaspipe"
            element={
              <GasPipe/>
            }
          />
          <Route
            path="bill-payment/broadband"
            element={
              <Broadband/>
            }
          />
          <Route
            path="bill-payment/landline"
            element={
              <Landline/>
            }
        />
          <Route
            path="bill-payment/cable-tv"
            element={
              <CableTV/>
            }
          />
        <Route
            path="bill-payment/Loan-emi"
            element={
              <Loanemi/>
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
