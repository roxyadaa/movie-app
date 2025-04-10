
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/data/mockData";

interface MovieGridProps {
  movies: Movie[];
  title?: string;
  emptyMessage?: string;
}

export default function MovieGrid({ 
  movies, 
  title, 
  emptyMessage = "No movies found" 
}: MovieGridProps) {
  return (
    <div className="container mx-auto px-4 mt-8">
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      
      {movies.length === 0 ? (
        <div className="flex justify-center items-center min-h-[200px] text-gray-400">
          <p>{emptyMessage}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
