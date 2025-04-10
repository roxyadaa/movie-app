
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Movie, getTrendingMovies } from "@/data/mockData";

export default function HeroSection() {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const movies = getTrendingMovies();
    setTrendingMovies(movies);

    // Auto-rotate heroes every 6 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % movies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentMovie = trendingMovies[currentIndex];

  if (!currentMovie) return null;

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-700">
        <img
          src={currentMovie.backdropUrl}
          alt={currentMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="container mx-auto px-4 pb-16 md:pb-0">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              {currentMovie.title}
            </h1>
            <div className="flex items-center text-white/80 space-x-4 mb-4">
              <span>{currentMovie.year}</span>
              <span>•</span>
              <span>{currentMovie.duration}</span>
              <span>•</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                <span>{currentMovie.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm md:text-base mb-6 line-clamp-3">
              {currentMovie.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={() => navigate(`/movie/${currentMovie.id}`)}
                className="bg-cineverse-500 hover:bg-cineverse-600 text-white"
              >
                <Play className="mr-2 h-4 w-4" /> 
                Watch Trailer
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigate(`/movie/${currentMovie.id}`)}
              >
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {trendingMovies.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
