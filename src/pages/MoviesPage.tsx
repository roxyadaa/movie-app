
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieGrid from "@/components/MovieGrid";
import FilterBar from "@/components/FilterBar";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { filterMovies, mockMovies } from "@/data/mockData";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredMovies, setFilteredMovies] = useState(mockMovies.filter(movie => !movie.isSeries));
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const moviesPerPage = 15;
  
  // Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  // Reset scroll position when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset scroll position when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const genre = searchParams.get("genre");
    const trending = searchParams.get("trending");
    const sort = searchParams.get("sort");
    const pageParam = searchParams.get("page");
    
    // If no page specified in URL, set page 1
    if (!pageParam) {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    } else {
      setCurrentPage(Number(pageParam));
    }
    
    let movies = mockMovies.filter(movie => !movie.isSeries);

    if (trending === "true") {
      movies = movies.filter(movie => movie.isTrending);
    }
    
    if (genre) {
      movies = movies.filter(movie => movie.genres.includes(genre));
    }
    
    if (sort === "rating") {
      movies = [...movies].sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredMovies(movies);
  }, [searchParams, setSearchParams]);

  const handleFilterChange = (filters: {
    genre: string | null;
    rating: number | null;
    year: number | null;
    language: string | null;
  }) => {
    const movies = filterMovies(
      filters.genre,
      filters.rating,
      filters.year, 
      filters.language
    ).filter(movie => !movie.isSeries);
    
    setFilteredMovies(movies);
    
    // Reset to page 1 when filters change
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    
    setCurrentPage(page);
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page, last page, current page and 1 on each side of current
      if (currentPage <= 3) {
        // Near the beginning
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(-1); // Separator
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pageNumbers.push(1);
        pageNumbers.push(-1); // Separator
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Middle
        pageNumbers.push(1);
        pageNumbers.push(-1); // Separator
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(-1); // Separator
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Movies</h1>
          
          <FilterBar onFilterChange={handleFilterChange} />
          
          <MovieGrid 
            movies={currentMovies} 
            emptyMessage="No movies match your filters. Try adjusting your criteria." 
          />
          
          {filteredMovies.length > 0 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {getPageNumbers().map((page, index) => (
                  page === -1 ? (
                    <PaginationItem key={`ellipsis-${index}`}>
                      <span className="px-4 py-2">...</span>
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
