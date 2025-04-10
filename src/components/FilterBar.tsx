import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { genres, languages, years } from "@/data/mockData";

interface FilterBarProps {
  onFilterChange: (filters: {
    genre: string | null;
    rating: number | null;
    year: number | null;
    language: string | null;
  }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  const [filters, setFilters] = useState({
    genre: searchParams.get("genre") || null,
    rating: searchParams.get("rating") ? Number(searchParams.get("rating")) : null,
    year: searchParams.get("year") ? Number(searchParams.get("year")) : null,
    language: searchParams.get("language") || null
  });

  useEffect(() => {
    // Apply filters from URL params on mount
    onFilterChange(filters);
  }, []);

  const handleFilterChange = (key: string, value: string | number | null) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
    
    // Reset to page 1 when filters change and update URL params
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    
    if (value === null) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
    setSearchParams(params);
  };

  const resetFilters = () => {
    setFilters({
      genre: null,
      rating: null,
      year: null,
      language: null
    });
    onFilterChange({
      genre: null,
      rating: null,
      year: null,
      language: null
    });
    
    // Keep only page parameter when resetting
    const params = new URLSearchParams();
    params.set("page", "1");
    setSearchParams(params);
  };

  const hasActiveFilters = filters.genre || filters.rating || filters.year || filters.language;

  return (
    <div className="bg-cineverse-800/50 border border-cineverse-700/50 rounded-lg p-4 mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Filters</h3>
        <div className="flex space-x-2">
          {hasActiveFilters && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetFilters}
              className="border-cineverse-700 hover:bg-cineverse-700 text-gray-300"
            >
              <X className="h-4 w-4 mr-1" /> Clear All
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden border-cineverse-700 hover:bg-cineverse-700 text-gray-300"
          >
            <Filter className="h-4 w-4 mr-1" />
            {isOpen ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
      </div>

      <div className={`md:flex md:space-x-4 mt-4 space-y-4 md:space-y-0 ${isOpen ? 'block' : 'hidden md:flex'}`}>
        <div className="w-full md:w-1/4">
          <label className="block text-sm text-gray-400 mb-1">Genre</label>
          <Select
            value={filters.genre || "all_genres"}
            onValueChange={(value) => handleFilterChange("genre", value === "all_genres" ? null : value)}
          >
            <SelectTrigger className="w-full bg-cineverse-800 border-cineverse-700">
              <SelectValue placeholder="All Genres" />
            </SelectTrigger>
            <SelectContent className="bg-cineverse-800 border-cineverse-700">
              <SelectItem value="all_genres">All Genres</SelectItem>
              {genres.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-sm text-gray-400 mb-1">Rating</label>
          <Select
            value={filters.rating?.toString() || "any_rating"}
            onValueChange={(value) => handleFilterChange("rating", value === "any_rating" ? null : Number(value))}
          >
            <SelectTrigger className="w-full bg-cineverse-800 border-cineverse-700">
              <SelectValue placeholder="Any Rating" />
            </SelectTrigger>
            <SelectContent className="bg-cineverse-800 border-cineverse-700">
              <SelectItem value="any_rating">Any Rating</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4+ Stars</SelectItem>
              <SelectItem value="3">3+ Stars</SelectItem>
              <SelectItem value="2">2+ Stars</SelectItem>
              <SelectItem value="1">1+ Star</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-sm text-gray-400 mb-1">Year</label>
          <Select
            value={filters.year?.toString() || "any_year"}
            onValueChange={(value) => handleFilterChange("year", value === "any_year" ? null : Number(value))}
          >
            <SelectTrigger className="w-full bg-cineverse-800 border-cineverse-700">
              <SelectValue placeholder="Any Year" />
            </SelectTrigger>
            <SelectContent className="bg-cineverse-800 border-cineverse-700">
              <SelectItem value="any_year">Any Year</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-sm text-gray-400 mb-1">Language</label>
          <Select
            value={filters.language || "any_language"}
            onValueChange={(value) => handleFilterChange("language", value === "any_language" ? null : value)}
          >
            <SelectTrigger className="w-full bg-cineverse-800 border-cineverse-700">
              <SelectValue placeholder="Any Language" />
            </SelectTrigger>
            <SelectContent className="bg-cineverse-800 border-cineverse-700">
              <SelectItem value="any_language">Any Language</SelectItem>
              {languages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
