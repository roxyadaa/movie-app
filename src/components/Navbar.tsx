
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Film, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-cineverse-900/90 backdrop-blur-md shadow-md" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white">
            <Film className="h-8 w-8 text-cineverse-500" />
            <span className="text-xl font-bold">CineVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cineverse-400 transition-colors">
                Home
              </Link>
              <Link to="/movies" className="text-white hover:text-cineverse-400 transition-colors">
                Movies
              </Link>
              <Link to="/series" className="text-white hover:text-cineverse-400 transition-colors">
                Series
              </Link>
              <Link to="/watchlist" className="text-white hover:text-cineverse-400 transition-colors flex items-center space-x-1">
                <BookmarkPlus className="h-4 w-4" />
                <span>Watchlist</span>
              </Link>
            </div>
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 bg-cineverse-800/60 border-cineverse-700 text-white placeholder:text-gray-400 focus:border-cineverse-500 pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-white hover:text-cineverse-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/movies" 
                className="text-white hover:text-cineverse-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
              <Link 
                to="/series" 
                className="text-white hover:text-cineverse-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Series
              </Link>
              <Link 
                to="/watchlist" 
                className="text-white hover:text-cineverse-400 transition-colors py-2 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookmarkPlus className="h-4 w-4" />
                <span>Watchlist</span>
              </Link>
              <form onSubmit={handleSearch} className="relative mt-2">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-cineverse-800/60 border-cineverse-700 text-white placeholder:text-gray-400 focus:border-cineverse-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 px-2 text-gray-400 hover:text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
