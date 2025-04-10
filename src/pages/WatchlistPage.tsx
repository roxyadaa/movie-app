
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { BookmarkX } from "lucide-react";
import { getWatchlistMovies } from "@/data/mockData";

export default function WatchlistPage() {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Get watchlist movies on initial render
    updateWatchlist();

    // Listen for localStorage changes (e.g. when removing from watchlist on other pages)
    const handleStorageChange = () => {
      updateWatchlist();
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const updateWatchlist = () => {
    const movies = getWatchlistMovies();
    setWatchlistMovies(movies);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Watchlist</h1>

          {watchlistMovies.length === 0 ? (
            <div className="text-center p-12 bg-cineverse-800/30 rounded-lg">
              <BookmarkX className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your watchlist is empty</h2>
              <p className="text-gray-400 mb-6">
                Start adding movies and TV shows to your watchlist to keep track of what you want to watch.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-6 text-gray-400">
                You have {watchlistMovies.length} {watchlistMovies.length === 1 ? 'item' : 'items'} in your watchlist.
              </p>
              <MovieGrid movies={watchlistMovies} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
