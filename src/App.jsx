import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/Auth";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhatIsDakshCWM from "./pages/WhatIsDakshCWM";
import Blog from "./pages/blog/Blog";
import BlogPost1 from "./pages/blog/BlogPost1";
import BlogPost2 from "./pages/blog/BlogPost2";
import BlogPost3 from "./pages/blog/BlogPost3";
import BlogPost4 from "./pages/blog/BlogPost4";
import BlogPost5 from "./pages/blog/BlogPost5";
import BlogPost6 from "./pages/blog/BlogPost6";
import { GuestRoute, ProtectedRoute } from "./components/ProtectedRoute";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/what-is-dakshcwm" element={<WhatIsDakshCWM />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/cad-workflow-automation-engineering-revolution"
          element={<BlogPost1 />}
        />
        <Route
          path="/blog/cad-workflow-automation-human-toll"
          element={<BlogPost2 />}
        />
        <Route
          path="/blog/cad-workflow-automation-behind-devops"
          element={<BlogPost3 />}
        />
        <Route
          path="/blog/errors-manual-cad-workflows-manufacturing"
          element={<BlogPost4 />}
        />
        <Route
          path="/blog/hidden-cost-manual-engineering-tasks"
          element={<BlogPost5 />}
        />
        <Route
          path="/blog/repetitive-engineering-tasks-disrupt-innovation"
          element={<BlogPost6 />}
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Auth />
            </GuestRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
