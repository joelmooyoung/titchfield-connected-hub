import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Alumni from "./pages/Alumni";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import News from "./pages/News";
import Sports from "./pages/Sports";
import PastPrincipals from "./pages/PastPrincipals";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/student-life" element={<StudentLife />} />
              <Route path="/past-principals" element={<PastPrincipals />} />
              {/* Main Pages */}
              <Route path="/sports" element={<Sports />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Events Page - Coming Soon</h1></div>} />
              <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Contact Page - Coming Soon</h1></div>} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;