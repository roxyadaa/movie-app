
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Simulate subscription
    toast.success(`Thank you for subscribing with ${email}!`);
    form.reset();
  };

  return (
    <footer className="bg-cineverse-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">CineVerse</h2>
            <p className="text-gray-400 mb-4">
              Your ultimate destination for movie and TV show information.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-gray-400 hover:text-white transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/series" className="text-gray-400 hover:text-white transition-colors">
                  TV Series
                </Link>
              </li>
              <li>
                <Link to="/watchlist" className="text-gray-400 hover:text-white transition-colors">
                  Watchlist
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest movies and shows.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-cineverse-800 border-cineverse-700 text-white"
              />
              <Button type="submit" className="bg-cineverse-500 hover:bg-cineverse-600 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-cineverse-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} CineVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
