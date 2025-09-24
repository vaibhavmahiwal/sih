import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import DataInput from "@/pages/DataInput";
import Forecasting from "@/pages/Forecasting";
import Analysis from "@/pages/Analysis";
import Timeline from "@/pages/Timeline";
import DataManagement from "@/pages/DataManagement";
import Settings from "@/pages/Settings";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/data-input" component={DataInput} />
      <Route path="/forecasting" component={Forecasting} />
      <Route path="/analysis" component={Analysis} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/data" component={DataManagement} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                      <Zap className="h-3 w-3" />
                      POWERGRID
                    </Badge>
                    <span className="font-semibold text-lg">Smart Automation</span>
                  </div>
                </div>
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-auto">
                <Router />
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
