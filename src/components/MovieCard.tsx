
import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, BookmarkPlus, BookmarkX, ImageOff } from "lucide-react";
import { Movie, addToWatchlist, removeFromWatchlist, isInWatchlist } from "@/data/mockData";
import { toast } from "sonner";

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export default function MovieCard({ movie, className = "" }: MovieCardProps) {
  const [inWatchlist, setInWatchlist] = useState(() => isInWatchlist(movie.id));
  const [imageError, setImageError] = useState(false);

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (inWatchlist) {
      removeFromWatchlist(movie.id);
      setInWatchlist(false);
      toast.success(`Removed "${movie.title}" from your watchlist`);
    } else {
      addToWatchlist(movie.id);
      setInWatchlist(true);
      toast.success(`Added "${movie.title}" to your watchlist`);
    }
  };

  const handleImageError = () => {
    console.log(`Image failed to load for movie: ${movie.title}`);
    setImageError(true);
  };

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={`group movie-card ${className}`}>
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <ImageOff className="w-12 h-12 text-gray-500" />
            </div>
          ) : (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onError={handleImageError}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold truncate">{movie.title}</h3>
            <div className="flex items-center mt-1 text-sm text-gray-300">
              <span>{movie.year}</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                <span>{movie.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={handleWatchlistToggle}
            className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {inWatchlist ? (
              <BookmarkX className="h-5 w-5 text-red-500" />
            ) : (
              <BookmarkPlus className="h-5 w-5 text-white" />
            )}
          </button>

          {movie.isSeries && (
            <span className="absolute top-3 left-3 bg-cineverse-500 text-white text-xs px-2 py-1 rounded">
              Series
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
