
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { filterMovies, mockMovies } from "@/data/mockData";

export default function SeriesPage() {
  const [searchParams] = useSearchParams();
  const [filteredSeries, setFilteredSeries] = useState(mockMovies.filter(movie => movie.isSeries));
  const [displayedSeries, setDisplayedSeries] = useState<typeof filteredSeries>([]);
  const [page, setPage] = useState(1);
  const seriesPerPage = 20;

  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const genre = searchParams.get("genre");
    const sort = searchParams.get("sort");
    
    let series = mockMovies.filter(movie => movie.isSeries);
    
    if (genre) {
      series = series.filter(movie => movie.genres.includes(genre));
    }
    
    if (sort === "rating") {
      series = [...series].sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredSeries(series);
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    setDisplayedSeries(filteredSeries.slice(0, page * seriesPerPage));
  }, [filteredSeries, page]);

  const handleFilterChange = (filters: {
    genre: string | null;
    rating: number | null;
    year: number | null;
    language: string | null;
  }) => {
    const series = filterMovies(
      filters.genre,
      filters.rating,
      filters.year, 
      filters.language
    ).filter(movie => movie.isSeries);
    
    setFilteredSeries(series);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const hasMoreSeries = displayedSeries.length < filteredSeries.length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">TV Series</h1>
          
          <FilterBar onFilterChange={handleFilterChange} />
          
          <MovieGrid 
            movies={displayedSeries} 
            emptyMessage="No series match your filters. Try adjusting your criteria." 
          />
          
          {hasMoreSeries && (
            <div className="flex justify-center mt-8">
              <Button 
                onClick={loadMore}
                className="bg-cineverse-700 hover:bg-cineverse-600"
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
