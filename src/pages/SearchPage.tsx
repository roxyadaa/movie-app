
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import { Search } from "lucide-react";
import { searchMovies } from "@/data/mockData";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay for realism
    const timeoutId = setTimeout(() => {
      const results = searchMovies(query);
      setSearchResults(results);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-8">
            <Search className="h-6 w-6 text-gray-400" />
            <h1 className="text-3xl font-bold">
              {query ? (
                <>
                  Search results for <span className="text-cineverse-500">"{query}"</span>
                </>
              ) : (
                "Search"
              )}
            </h1>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {/* Skeleton loaders */}
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[2/3] bg-cineverse-800 rounded-lg mb-2"></div>
                  <div className="h-4 bg-cineverse-800 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-cineverse-800 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {query ? (
                <MovieGrid 
                  movies={searchResults} 
                  emptyMessage={`No results found for "${query}". Try a different search term.`} 
                />
              ) : (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <h2 className="text-xl text-gray-400">Enter a search term to find movies and TV shows</h2>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
