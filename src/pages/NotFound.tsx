
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-8 animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">404</h1>
          <p className="mt-4 text-xl text-muted-foreground">The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Return Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
