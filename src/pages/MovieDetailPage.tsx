
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MovieCarousel from "@/components/MovieCarousel";
import { Star, Play, Calendar, Clock, Globe, BookmarkPlus, BookmarkX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  getMovieById, 
  getRecommendedMovies, 
  addToWatchlist, 
  removeFromWatchlist, 
  isInWatchlist 
} from "@/data/mockData";
import { toast } from "sonner";

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [inWatchlist, setInWatchlist] = useState(false);
  const [movie, setMovie] = useState(id ? getMovieById(id) : null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  
  useEffect(() => {
    // Reset scroll position when navigating to this page
    window.scrollTo(0, 0);
    
    if (!id) {
      navigate('/not-found');
      return;
    }
    
    const movieData = getMovieById(id);
    if (!movieData) {
      navigate('/not-found');
      return;
    }
    
    setMovie(movieData);
    setInWatchlist(isInWatchlist(id));
    
    // Get recommended movies
    const recommended = getRecommendedMovies(id, 10);
    setRecommendedMovies(recommended);
  }, [id, navigate]);
  
  if (!movie) return null;

  const handleWatchlistToggle = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        {/* Hero backdrop */}
        <div className="absolute top-0 left-0 w-full h-[70vh] overflow-hidden z-0">
          <img 
            src={movie.backdropUrl} 
            alt={movie.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
        </div>

        {/* Content */}
        <div className="relative pt-24 pb-16 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Movie poster */}
              <div className="md:col-span-1">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={movie.posterUrl} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Movie details */}
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
                
                <div className="flex flex-wrap gap-2 items-center text-gray-400 mb-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-5 w-5 mr-1" fill="currentColor" />
                    <span className="font-semibold text-lg">{movie.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{movie.year}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{movie.duration}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{movie.language}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genres.map(genre => (
                    <span 
                      key={genre} 
                      className="inline-block px-3 py-1 bg-cineverse-800 text-sm rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 mb-6">{movie.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Button 
                    className="bg-cineverse-500 hover:bg-cineverse-600"
                    onClick={() => window.open(movie.trailer, "_blank")}
                  >
                    <Play className="mr-2 h-4 w-4" /> 
                    Watch Trailer
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10"
                    onClick={handleWatchlistToggle}
                  >
                    {inWatchlist ? (
                      <>
                        <BookmarkX className="mr-2 h-4 w-4 text-red-500" /> 
                        Remove from Watchlist
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="mr-2 h-4 w-4" /> 
                        Add to Watchlist
                      </>
                    )}
                  </Button>
                </div>

                {/* Cast information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Top Cast</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                    {movie.cast.map((person, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-cineverse-800">
                          {person.profileUrl && (
                            <img 
                              src={person.profileUrl} 
                              alt={person.name} 
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{person.name}</p>
                          <p className="text-gray-400 text-xs">{person.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs for more content */}
            <Tabs defaultValue="reviews" className="w-full mb-12">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="trailer">Trailer</TabsTrigger>
                <TabsTrigger value="crew">Crew</TabsTrigger>
              </TabsList>
              
              <TabsContent value="reviews" className="bg-cineverse-800/30 border border-cineverse-700/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">User Reviews</h3>
                {movie.reviews.length === 0 ? (
                  <p className="text-gray-400">No reviews yet. Be the first to review!</p>
                ) : (
                  <div className="space-y-6">
                    {movie.reviews.map(review => (
                      <div key={review.id} className="border-b border-cineverse-700/50 pb-6 last:border-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{review.user}</h4>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                            <span>{review.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-2">{review.comment}</p>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="trailer" className="bg-cineverse-800/30 border border-cineverse-700/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">Movie Trailer</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={movie.trailer} 
                    title={`${movie.title} Trailer`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </TabsContent>
              
              <TabsContent value="crew" className="bg-cineverse-800/30 border border-cineverse-700/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6">Crew</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {movie.crew.map((person, index) => (
                    <div key={index} className="text-center">
                      <p className="font-medium">{person.name}</p>
                      <p className="text-gray-400 text-sm">{person.role}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Recommended movies */}
            {recommendedMovies.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">You Might Also Like</h3>
                <MovieCarousel title="" movies={recommendedMovies} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
