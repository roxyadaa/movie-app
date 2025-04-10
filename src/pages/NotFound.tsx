
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

export default function NotFound() {
  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <Film className="h-16 w-16 text-cineverse-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="max-w-md text-gray-500 mb-8">
        We couldn't find the page you were looking for. Perhaps the movie or series has been moved or the URL was typed incorrectly.
      </p>
      <Button asChild className="bg-cineverse-500 hover:bg-cineverse-600">
        <Link to="/">
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
}
