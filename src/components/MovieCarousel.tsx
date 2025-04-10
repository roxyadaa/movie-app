
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/data/mockData";

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  seeAllLink?: string;
}

export default function MovieCarousel({ title, movies, seeAllLink }: MovieCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    
    const scrollAmount = direction === "left" 
      ? -carouselRef.current.clientWidth / 2 
      : carouselRef.current.clientWidth / 2;
      
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (movies.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {seeAllLink && (
          <Link 
            to={seeAllLink} 
            className="text-cineverse-500 hover:text-cineverse-400 transition-colors flex items-center"
          >
            See All <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>

      <div className="relative group">
        <button 
          onClick={() => scroll("left")} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div 
          ref={carouselRef} 
          className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide snap-x scroll-smooth"
        >
          {movies.map(movie => (
            <div 
              key={movie.id} 
              className="flex-none w-[160px] sm:w-[200px] md:w-[220px] snap-start"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll("right")} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
