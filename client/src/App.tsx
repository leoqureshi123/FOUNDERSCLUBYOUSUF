import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { lazy, Suspense } from "react";

// Home is imported normally as it's not lazy loaded
import Home from "./pages/Home.tsx";
import NotFound from "./pages/Notfound";

// Lazy load all other pages with beautiful loading animation
const Doctor = lazy(() => import("./pages/Doctor.tsx"));
const Doctor2 = lazy(() => import("./pages/Doctor2.tsx"));
const Hamza = lazy(() => import("./pages/Hamza.tsx"));
const Team = lazy(() => import("./pages/Team.tsx"));
const WebRegional = lazy(() => import("./pages/RegionalManagerWeb.tsx"));
const NoorWebPortfolio = lazy(() => import("./pages/NoorWeb.tsx"));
const RohZulfiqar = lazy(() => import("./pages/RohZulfiqar.tsx"));
const Batool = lazy(() => import("./pages/Batool.tsx"));

// Loading component with beautiful animation
const LoadingComponent = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-accent border-b-transparent rounded-full animate-spin animate-reverse"></div>
      <div className="absolute inset-0 m-auto w-8 h-8 bg-primary rounded-full animate-ping"></div>
    </div>
  </div>
);

// Router component for handling all application routes
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/doctor">
        <Suspense fallback={<LoadingComponent />}>
          <Doctor />
        </Suspense>
      </Route>
      <Route path="/doctor2">
        <Suspense fallback={<LoadingComponent />}>
          <Doctor2 />
        </Suspense>
      </Route>
      <Route path="/it-director">
        <Suspense fallback={<LoadingComponent />}>
          <Hamza />
        </Suspense>
      </Route>
      <Route path="/teams">
        <Suspense fallback={<LoadingComponent />}>
          <Team />
        </Suspense>
      </Route>
      <Route path="/web-regional-manager">
        <Suspense fallback={<LoadingComponent />}>
          <WebRegional />
        </Suspense>
      </Route>
      <Route path="/noor-web">
        <Suspense fallback={<LoadingComponent />}>
          <NoorWebPortfolio />
        </Suspense>
      </Route>
      <Route path="/roh-zulfiqar">
        <Suspense fallback={<LoadingComponent />}>
          <RohZulfiqar />
        </Suspense>
      </Route>
      <Route path="/batool">
        <Suspense fallback={<LoadingComponent />}>
          <Batool />
        </Suspense>
      </Route>
     
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