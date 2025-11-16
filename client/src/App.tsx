import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/Home.tsx";
import Doctor from "./pages/Doctor.tsx";
import Doctor2 from "./pages/Doctor2.tsx";
import Hamza from "./pages/Hamza.tsx";
import Team from "./pages/Team.tsx";
import WebRegional from "./pages/RegionalManagerWeb.tsx";
import NoorWebPortfolio from "./pages/NoorWeb.tsx";
import AsmaPage from "./pages/Asma.tsx";

import NotFound from "./pages/Notfound";

// Router component for handling all application routes
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/doctor" component={Doctor} />
      <Route path="/doctor2" component={Doctor2} />
      <Route path="/it-director" component={Hamza} />
      <Route path="/teams" component={Team} />
      <Route path="/web-regional-manager" component={WebRegional} />
      <Route path="/noor-web" component={NoorWebPortfolio} />
      <Route path="/asma" component={AsmaPage} />
     
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;