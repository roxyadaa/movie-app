
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { genres } from "@/data/mockData";

export default function CategorySection() {
  const genreImages = [
    "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1664366320037-6cad9e3c6e20?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557177324-56c542165309?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611516491426-03025e6043c8?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578353022142-09264fd64295?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506443432602-ac2fcd6cc690?w=500&auto=format&fit=crop"
  ];
  
  // Only show a subset of genres for the home page
  const displayedGenres = genres.slice(0, 6);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <Link 
          to="/movies" 
          className="text-cineverse-500 hover:text-cineverse-400 transition-colors flex items-center"
        >
          All Categories <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {displayedGenres.map((genre, index) => (
          <Link 
            to={`/movies?genre=${encodeURIComponent(genre)}`}
            key={genre}
            className="group relative overflow-hidden rounded-lg aspect-[3/4]"
          >
            <img
              src={genreImages[index]}
              alt={genre}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 transition-all" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white font-bold text-xl">{genre}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
