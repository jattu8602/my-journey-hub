import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Experience from "./pages/Experience";
import Certification from "./pages/Certification";
import Blogs from "./pages/Blogs";
import Code from "./pages/Code";
import NotFound from "./pages/NotFound";
import NextJsForBeginners from "./pages/blog/NextJsForBeginners";
import TransformersInAI from "./pages/blog/TransformersInAI";
import ReactNativeGuide from "./pages/blog/ReactNativeGuide";
import BeginnerWebDev from "./pages/blog/BeginnerWebDev";
import SystemsLowLevel from "./pages/blog/SystemsLowLevel";
import AlgorithmsBeyondDSA from "./pages/blog/AlgorithmsBeyondDSA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/nextjs-for-beginners" element={<NextJsForBeginners />} />
          <Route path="/blog/transformers-in-ai" element={<TransformersInAI />} />
          <Route path="/blog/react-native-guide" element={<ReactNativeGuide />} />
          <Route path="/blog/beginner-web-dev" element={<BeginnerWebDev />} />
          <Route path="/blog/systems-low-level" element={<SystemsLowLevel />} />
          <Route path="/blog/algorithms-beyond-dsa" element={<AlgorithmsBeyondDSA />} />
          <Route path="/code" element={<Code />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
