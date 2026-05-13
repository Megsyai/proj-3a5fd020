
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Music, BookOpen, Image as ImageIcon, Home, Mic2, Menu, X } from "lucide-react";
import { useState } from "react";

import HomeView from "./pages/HomeView";
import Biography from "./pages/Biography";
import MusicLibrary from "./pages/MusicLibrary";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "السيرة الذاتية", path: "/bio", icon: <BookOpen className="w-4 h-4" /> },
    { name: "أغانيها", path: "/music", icon: <Music className="w-4 h-4" /> },
    { name: "المعرض", path: "/gallery", icon: <ImageIcon className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold-custom/20 text-white font-arabic rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Mic2 className="text-yellow-500 w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-l from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
              كوكب الشرق
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8 space-x-reverse text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-yellow-500 transition-colors px-3 py-2 rounded-md font-medium flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 p-4 space-y-2 border-b border-yellow-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-yellow-900"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-neutral-950 text-white/60 py-12 border-t border-yellow-900/40 text-center font-arabic">
    <div className="container mx-auto px-4">
      <Mic2 className="mx-auto mb-4 text-yellow-500 w-10 h-10 opacity-50" />
      <p className="text-xl mb-2 text-white">أم كلثوم - رمز الفن العربي الأصيل</p>
      <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمحبي التراث العربي</p>
    </div>
  </footer>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-900 overflow-x-hidden rtl">
          <Navbar />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/bio" element={<Biography />} />
              <Route path="/music" element={<MusicLibrary />} />
              <Route path="/gallery" element={<Gallery />} />
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
