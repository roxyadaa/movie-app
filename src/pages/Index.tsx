
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import MovieCarousel from "@/components/MovieCarousel";
import { mockMovies } from "@/data/mockData";

export default function Index() {
  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const trendingMovies = mockMovies.filter(movie => movie.isTrending);
  const recentMovies = [...mockMovies]
    .sort((a, b) => b.year - a.year)
    .filter(movie => !movie.isSeries)
    .slice(0, 10);
  const topRatedMovies = [...mockMovies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  const series = mockMovies
    .filter(movie => movie.isSeries)
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategorySection />
        <MovieCarousel 
          title="Trending Now" 
          movies={trendingMovies} 
          seeAllLink="/movies?trending=true" 
        />
        <MovieCarousel 
          title="Recent Movies" 
          movies={recentMovies} 
          seeAllLink="/movies" 
        />
        <MovieCarousel 
          title="Top Rated" 
          movies={topRatedMovies} 
          seeAllLink="/movies?sort=rating" 
        />
        <MovieCarousel 
          title="TV Series" 
          movies={series} 
          seeAllLink="/series" 
        />
      </main>
      <Footer />
    </div>
  );
}
