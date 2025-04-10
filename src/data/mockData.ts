export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  language: string;
  trailer: string;
  cast: {
    name: string;
    role: string;
    profileUrl: string;
  }[];
  crew: {
    name: string;
    role: string;
  }[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  isTrending: boolean;
  isSeries: boolean;
}

export const genres = [
  "Action", 
  "Adventure", 
  "Comedy", 
  "Drama", 
  "Fantasy", 
  "Horror", 
  "Mystery", 
  "Romance", 
  "Sci-Fi", 
  "Thriller",
  "Animation",
  "Documentary"
];

export const languages = ["English", "Spanish", "French", "German", "Japanese", "Korean", "Chinese"];

export const years = Array.from({ length: 30 }, (_, i) => 2023 - i);

export const mockMovies: Movie[] = [
  {
    id: "1",
    title: "The Dark Horizon",
    description: "In a post-apocalyptic world, a lone survivor embarks on a dangerous journey to find the last safe haven on Earth. As he travels through desolate landscapes and ruined cities, he must confront not only the hostile environment but also his own demons.",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&auto=format&fit=crop",
    rating: 4.8,
    year: 2023,
    duration: "2h 15m",
    genres: ["Sci-Fi", "Action", "Drama"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "John Anderson", role: "Max", profileUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop" },
      { name: "Sarah Johnson", role: "Elena", profileUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Michael Roberts", role: "Director" },
      { name: "Emily Chen", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "moviefan42", rating: 5, comment: "Mind-blowing visuals and a compelling story!", date: "2023-05-12" },
      { id: "r2", user: "cinephile88", rating: 4.5, comment: "One of the best post-apocalyptic films I've seen.", date: "2023-05-10" },
    ],
    isTrending: true,
    isSeries: false
  },
  {
    id: "2",
    title: "Lost in Time",
    description: "When a brilliant physicist activates his time machine, he finds himself trapped between dimensions. Now he must find a way back to his timeline before the fabric of reality collapses.",
    posterUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&auto=format&fit=crop",
    rating: 4.5,
    year: 2023,
    duration: "2h 8m",
    genres: ["Sci-Fi", "Mystery", "Thriller"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "David Miller", role: "Dr. Thomas Reed", profileUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" },
      { name: "Lisa Wong", role: "Dr. Sophia Chen", profileUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Christopher Lee", role: "Director" },
      { name: "Robert Jackson", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "scifi_lover", rating: 4.5, comment: "The concept is mind-bending and executed perfectly.", date: "2023-06-02" },
      { id: "r2", user: "movie_critic", rating: 4, comment: "Great performances and stunning visual effects.", date: "2023-06-01" },
    ],
    isTrending: true,
    isSeries: false
  },
  {
    id: "3",
    title: "Midnight Chronicles",
    description: "A detective with a troubled past investigates a series of mysterious murders that only occur at midnight, uncovering a supernatural conspiracy that spans centuries.",
    posterUrl: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1619631428091-1eaa03c3bdf1?w=1200&auto=format&fit=crop",
    rating: 4.3,
    year: 2022,
    duration: "2h 30m",
    genres: ["Mystery", "Thriller", "Fantasy"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "James Wilson", role: "Detective Cole", profileUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop" },
      { name: "Emma Davis", role: "Dr. Morgan", profileUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Nicholas Brown", role: "Director" },
      { name: "Alexandra Smith", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "mystery_fan", rating: 4.3, comment: "Keeps you guessing until the very end!", date: "2022-11-15" },
      { id: "r2", user: "thrill_seeker", rating: 4.2, comment: "Atmospheric and genuinely creepy at times.", date: "2022-11-12" },
    ],
    isTrending: true,
    isSeries: false
  },
  {
    id: "4",
    title: "Kingdom of Dreams",
    description: "In a magical kingdom where dreams come to life, a young orphan discovers she has the power to create and control dreams, becoming the key to saving the realm from a nightmare plague.",
    posterUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&auto=format&fit=crop",
    rating: 4.7,
    year: 2022,
    duration: "2h 5m",
    genres: ["Fantasy", "Adventure", "Drama"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Lily Thompson", role: "Elara", profileUrl: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=200&auto=format&fit=crop" },
      { name: "Daniel Brown", role: "Prince Nolan", profileUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Sophia Martinez", role: "Director" },
      { name: "Thomas Walker", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "fantasy_reader", rating: 4.7, comment: "A visual masterpiece with heart and soul!", date: "2022-09-20" },
      { id: "r2", user: "dream_believer", rating: 4.6, comment: "Magical storytelling that captures your imagination.", date: "2022-09-18" },
    ],
    isTrending: true,
    isSeries: false
  },
  {
    id: "5",
    title: "Urban Legends",
    description: "A group of college friends begin experiencing events from urban legends they studied in class. As the legends come to life, they must uncover the truth before they become the next victims.",
    posterUrl: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533922922960-9fceb9ef4733?w=1200&auto=format&fit=crop",
    rating: 4.1,
    year: 2023,
    duration: "1h 55m",
    genres: ["Horror", "Mystery", "Thriller"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Ryan Cooper", role: "Jake", profileUrl: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=200&auto=format&fit=crop" },
      { name: "Michelle Lee", role: "Zoe", profileUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Jordan Phillips", role: "Director" },
      { name: "Samantha Wilson", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "horror_addict", rating: 4.2, comment: "Genuinely scary and clever use of folklore!", date: "2023-02-03" },
      { id: "r2", user: "midnight_watcher", rating: 4, comment: "Some really effective jump scares and a solid plot.", date: "2023-01-30" },
    ],
    isTrending: true,
    isSeries: false
  },
  {
    id: "6",
    title: "The Last Summer",
    description: "Four lifelong friends reunite for one final summer before college, confronting their fears, dreams, and relationships in a coming-of-age story about friendship and growing up.",
    posterUrl: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=1200&auto=format&fit=crop",
    rating: 4.4,
    year: 2021,
    duration: "1h 48m",
    genres: ["Comedy", "Drama", "Romance"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Tyler Johnson", role: "Noah", profileUrl: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=200&auto=format&fit=crop" },
      { name: "Olivia Garcia", role: "Emma", profileUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Jessica Williams", role: "Director" },
      { name: "Benjamin Harris", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "summer_lover", rating: 4.4, comment: "Perfectly captures that nostalgic summer feeling!", date: "2021-07-10" },
      { id: "r2", user: "movie_buff", rating: 4.3, comment: "Heartwarming and funny with great chemistry between the cast.", date: "2021-07-08" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "7",
    title: "Quantum Theory",
    description: "A brilliant but reclusive quantum physicist makes a breakthrough discovery that could revolutionize science, but soon realizes powerful forces are willing to kill to control it.",
    posterUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
    rating: 4.6,
    year: 2022,
    duration: "2h 20m",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Anthony Mitchell", role: "Dr. Edward Clarke", profileUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&auto=format&fit=crop" },
      { name: "Rachel Kim", role: "Dr. Claire Park", profileUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Daniel Foster", role: "Director" },
      { name: "Laura Thompson", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "physics_nerd", rating: 4.7, comment: "Scientifically accurate and thrilling!", date: "2022-03-15" },
      { id: "r2", user: "film_enthusiast", rating: 4.5, comment: "Complex ideas presented in an accessible and exciting way.", date: "2022-03-12" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "8",
    title: "Echoes of Eternity",
    description: "An archaeologist discovers an ancient artifact that allows her to communicate with civilizations from the past, but each interaction changes history with devastating consequences.",
    posterUrl: "https://images.unsplash.com/photo-1557177324-56c542165309?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop",
    rating: 4.2,
    year: 2021,
    duration: "2h 10m",
    genres: ["Adventure", "Drama", "Fantasy"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Jennifer Adams", role: "Dr. Lily Morgan", profileUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop" },
      { name: "Richard Carter", role: "Professor Thomas", profileUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Andrew Wilson", role: "Director" },
      { name: "Victoria Chang", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "history_buff", rating: 4.3, comment: "A fascinating concept with excellent historical details!", date: "2021-10-05" },
      { id: "r2", user: "adventure_seeker", rating: 4.1, comment: "Great pacing and some truly emotional moments.", date: "2021-10-03" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "9",
    title: "Crimson City",
    description: "In a city ruled by corrupt officials and criminal organizations, a disillusioned detective and a vigilante form an unlikely alliance to bring down the syndicate that controls everything.",
    posterUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&auto=format&fit=crop",
    rating: 4.5,
    year: 2023,
    duration: "2h 12m",
    genres: ["Action", "Crime", "Drama"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Marcus Wright", role: "Detective Ray Stone", profileUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop" },
      { name: "Natasha Rivera", role: "Alexis / The Shadow", profileUrl: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Samuel Rodriguez", role: "Director" },
      { name: "Ethan Brooks", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "action_junkie", rating: 4.6, comment: "Gritty, intense, and full of amazing fight sequences!", date: "2023-01-20" },
      { id: "r2", user: "noir_lover", rating: 4.4, comment: "The city feels like its own character. Atmospheric and compelling.", date: "2023-01-18" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "10",
    title: "Beyond the Stars",
    description: "The first manned mission to Mars discovers evidence of ancient alien technology that could change humanity's understanding of its place in the universe.",
    posterUrl: "https://imgs.search.brave.com/CcPNsQ0rnoE0zPtC1M-YlgnZTH9KeQ--HP-PmDJcWH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mZS9CZXlvbmRf/dGhlX1N0YXJzX0RW/RF9jb3Zlci5qcGcv/NTEycHgtQmV5b25k/X3RoZV9TdGFyc19E/VkRfY292ZXIuanBn",
    backdropUrl: "https://imgs.search.brave.com/CcPNsQ0rnoE0zPtC1M-YlgnZTH9KeQ--HP-PmDJcWH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mZS9CZXlvbmRf/dGhlX1N0YXJzX0RW/RF9jb3Zlci5qcGcv/NTEycHgtQmV5b25k/X3RoZV9TdGFyc19E/VkRfY292ZXIuanBn",
    rating: 4.9,
    year: 2023,
    duration: "2h 25m",
    genres: ["Sci-Fi", "Adventure", "Mystery"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Michael Stone", role: "Commander Alex Reynolds", profileUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop" },
      { name: "Sophia Lin", role: "Dr. Maya Chen", profileUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Jonathan Wells", role: "Director" },
      { name: "Catherine Morgan", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "space_explorer", rating: 5, comment: "Breathtaking visuals and a story that will stay with you!", date: "2023-04-12" },
      { id: "r2", user: "sci_fi_fan", rating: 4.8, comment: "One of the most scientifically accurate and thought-provoking space films ever made.", date: "2023-04-10" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "11",
    title: "Dreamland Chronicles",
    description: "When a dream researcher develops technology to record and enter dreams, she discovers a hidden dream dimension where people's subconscious minds connect—and where nightmares can kill.",
    posterUrl: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=1200&auto=format&fit=crop",
    rating: 4.4,
    year: 2022,
    duration: "2h 30m",
    genres: ["Sci-Fi", "Thriller", "Mystery"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Elise Cooper", role: "Dr. Amelia Quinn", profileUrl: "https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?w=200&auto=format&fit=crop" },
      { name: "Jason Reid", role: "David Miller", profileUrl: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Rebecca Chen", role: "Director" },
      { name: "Alex Morgan", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "dream_interpreter", rating: 4.6, comment: "A mind-bending journey that blurs reality and dreams!", date: "2022-07-25" },
      { id: "r2", user: "psych_student", rating: 4.2, comment: "Fascinating exploration of the subconscious with stunning visuals.", date: "2022-07-22" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "12",
    title: "Crown of Thorns",
    description: "In a medieval fantasy kingdom, a reluctant princess must reclaim her rightful throne after her father is murdered by her power-hungry uncle who has made a pact with dark forces.",
    posterUrl: "https://images.unsplash.com/photo-1578353022142-09264fd64295?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=1200&auto=format&fit=crop",
    rating: 4.7,
    year: 2022,
    duration: "2h 20m",
    genres: ["Fantasy", "Adventure", "Drama"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Isabella Moore", role: "Princess Lyra", profileUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop" },
      { name: "William Harrison", role: "Sir Rowan", profileUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Matthew Johnson", role: "Director" },
      { name: "Eleanor Davis", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "fantasy_queen", rating: 4.8, comment: "Epic scale with intimate character moments. A modern classic!", date: "2022-06-15" },
      { id: "r2", user: "medieval_history_buff", rating: 4.6, comment: "Beautiful world-building and compelling political intrigue.", date: "2022-06-12" },
    ],
    isTrending: false,
    isSeries: true
  },
  {
    id: "13",
    title: "Shadows of the Past",
    description: "A woman returns to her hometown after 20 years to attend a high school reunion, only to find herself investigating the mysterious disappearance that drove her away in the first place.",
    posterUrl: "https://images.unsplash.com/photo-1626818590242-5a5f27ee3971?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1561816544-21ecbffa09a3?w=1200&auto=format&fit=crop",
    rating: 4.3,
    year: 2021,
    duration: "1h 55m",
    genres: ["Mystery", "Drama", "Thriller"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Rebecca Allen", role: "Laura Reynolds", profileUrl: "https://images.unsplash.com/photo-1541787457429-b1766a4766b6?w=200&auto=format&fit=crop" },
      { name: "Matthew Parker", role: "Chief Mills", profileUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Elizabeth Collins", role: "Director" },
      { name: "Peter Thompson", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "mystery_addict", rating: 4.4, comment: "So many twists and turns! Kept me guessing until the end.", date: "2021-11-20" },
      { id: "r2", user: "small_town_girl", rating: 4.2, comment: "Perfectly captures the atmosphere of secrets in a small community.", date: "2021-11-18" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "15",
    title: "Until Dawn",
    description: "A group of friends on a camping trip in the mountains are stalked by something that only comes out at night, forcing them to fight for survival until dawn breaks.",
    posterUrl: "https://images.unsplash.com/photo-1579322705247-28df3075547b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backdropUrl: "https://images.unsplash.com/photo-1579322705247-28df3075547b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    year: 2021,
    duration: "1h 58m",
    genres: ["Horror", "Thriller", "Mystery"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Tyler Brooks", role: "Mike", profileUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=200&auto=format&fit=crop" },
      { name: "Jessica Martinez", role: "Ashley", profileUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Ryan Scott", role: "Director" },
      { name: "Laura Thompson", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "horror_hound", rating: 4.3, comment: "Genuinely scary with some really effective jump scares!", date: "2021-09-30" },
      { id: "r2", user: "night_owl", rating: 4.1, comment: "Great tension building and atmosphere throughout.", date: "2021-09-28" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "16",
    title: "Nexus",
    description: "A series following interconnected stories of people around the world who discover they have superhuman abilities and must unite against a shadowy organization hunting them down.",
    posterUrl: "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1510924199351-4e9d94df18a6?w=1200&auto=format&fit=crop",
    rating: 4.8,
    year: 2022,
    duration: "45m per episode",
    genres: ["Sci-Fi", "Drama", "Action"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Jordan Chen", role: "Kai", profileUrl: "https://images.unsplash.com/photo-1539148486279-35116daab810?w=200&auto=format&fit=crop" },
      { name: "Alexis Washington", role: "Maya", profileUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "David Wilson", role: "Creator" },
      { name: "Michelle Rodriguez", role: "Producer" },
    ],
    reviews: [
      { id: "r1", user: "series_binger", rating: 4.9, comment: "Binge-worthy with incredible character development!", date: "2022-08-15" },
      { id: "r2", user: "superhero_fan", rating: 4.7, comment: "A fresh take on the genre with global perspective.", date: "2022-08-12" },
    ],
    isTrending: false,
    isSeries: true
  },
  {
    id: "17",
    title: "The Perfect Storm",
    description: "A coastal town faces the fight of their lives when three converging storm fronts create the largest hurricane in recorded history, testing the bonds of community and survival.",
    posterUrl: "https://images.unsplash.com/photo-1664018696932-a2fb6da3d585?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backdropUrl: "https://images.unsplash.com/photo-1664018696932-a2fb6da3d585?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    year: 2021,
    duration: "2h 8m",
    genres: ["Action", "Drama", "Thriller"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Thomas Grant", role: "Mayor Williams", profileUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" },
      { name: "Leah Collins", role: "Dr. Sarah Allen", profileUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Charles Martin", role: "Director" },
      { name: "Anna Bailey", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "weather_watcher", rating: 4.6, comment: "Incredibly realistic storm sequences and great human drama!", date: "2021-06-22" },
      { id: "r2", user: "disaster_movie_fan", rating: 4.4, comment: "Edge-of-your-seat tension throughout. Couldn't look away!", date: "2021-06-20" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "18",
    title: "Family Secrets",
    description: "A family reunion takes a dark turn when long-buried secrets come to light, threatening to tear apart the foundations of what seemed like the perfect family.",
    posterUrl: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop",
    rating: 4.4,
    year: 2023,
    duration: "2h 15m",
    genres: ["Drama", "Mystery", "Thriller"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Catherine Moore", role: "Elizabeth Blackwood", profileUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&auto=format&fit=crop" },
      { name: "Robert Davis", role: "James Blackwood", profileUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Sarah Jenkins", role: "Director" },
      { name: "Thomas Walker", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "drama_queen", rating: 4.5, comment: "Emotionally raw with incredible performances!", date: "2023-02-18" },
      { id: "r2", user: "family_therapist", rating: 4.3, comment: "A nuanced exploration of family dynamics and generational trauma.", date: "2023-02-15" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "19",
    title: "The Heist",
    description: "A team of expert thieves plan the ultimate bank robbery, but when things go wrong, loyalty is tested and betrayal comes at a deadly price.",
    posterUrl: "https://images.unsplash.com/photo-1634906827485-d58f4b3b0b85?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backdropUrl: "https://images.unsplash.com/photo-1634906827485-d58f4b3b0b85?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    year: 2022,
    duration: "2h 10m",
    genres: ["Action", "Crime", "Thriller"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Victor Mendez", role: "Ray", profileUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop" },
      { name: "Sophia Williams", role: "Jade", profileUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Michael Torres", role: "Director" },
      { name: "Daniel Wright", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "action_addict", rating: 4.7, comment: "Intense, stylish, and full of unexpected twists!", date: "2022-07-10" },
      { id: "r2", user: "crime_thriller_fan", rating: 4.5, comment: "Smart writing and excellently choreographed sequences.", date: "2022-07-08" },
    ],
    isTrending: false,
    isSeries: false
  },
  {
    id: "20",
    title: "Parallel Lives",
    description: "A scientist accidentally opens a portal to parallel universes, encountering different versions of herself and realizing that changing one reality has consequences for all others.",
    posterUrl: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?w=500&auto=format&fit=crop",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop",
    rating: 4.7,
    year: 2023,
    duration: "2h 18m",
    genres: ["Sci-Fi", "Drama", "Adventure"],
    language: "English",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: [
      { name: "Olivia Taylor", role: "Dr. Eva Mitchell", profileUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop" },
      { name: "David Lincoln", role: "Dr. Marcus Reed", profileUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop" },
    ],
    crew: [
      { name: "Gregory Adams", role: "Director" },
      { name: "Jennifer Cruz", role: "Writer" },
    ],
    reviews: [
      { id: "r1", user: "multiverse_theorist", rating: 4.8, comment: "Mind-bending concept with emotional depth!", date: "2023-05-20" },
      { id: "r2", user: "quantum_physicist", rating: 4.6, comment: "The scientific concepts are well-researched and the character work is outstanding.", date: "2023-05-18" },
    ],
    isTrending: false,
    isSeries: true
  },
];

export const getTrendingMovies = () => {
  return mockMovies.filter(movie => movie.isTrending).slice(0, 5);
};

export const getMoviesByGenre = (genre: string) => {
  return mockMovies.filter(movie => movie.genres.includes(genre));
};

export const getMovieById = (id: string) => {
  return mockMovies.find(movie => movie.id === id);
};

export const getRecommendedMovies = (currentMovieId: string, limit = 5) => {
  const currentMovie = mockMovies.find(movie => movie.id === currentMovieId);
  if (!currentMovie) return [];
  
  return mockMovies
    .filter(movie => movie.id !== currentMovieId && movie.genres.some(genre => currentMovie.genres.includes(genre)))
    .slice(0, limit);
};

export const searchMovies = (query: string) => {
  const searchTerm = query.toLowerCase();
  return mockMovies.filter(
    movie => 
      movie.title.toLowerCase().includes(searchTerm) || 
      movie.description.toLowerCase().includes(searchTerm) ||
      movie.genres.some(genre => genre.toLowerCase().includes(searchTerm))
  );
};

export const filterMovies = (
  genre: string | null,
  rating: number | null,
  year: number | null,
  language: string | null
) => {
  return mockMovies.filter(movie => {
    const genreMatch = !genre || movie.genres.includes(genre);
    const ratingMatch = !rating || movie.rating >= rating;
    const yearMatch = !year || movie.year === year;
    const languageMatch = !language || movie.language === language;
    
    return genreMatch && ratingMatch && yearMatch && languageMatch;
  });
};

// Helper functions for watchlist
export const getWatchlistFromStorage = (): string[] => {
  const watchlist = localStorage.getItem('watchlist');
  return watchlist ? JSON.parse(watchlist) : [];
};

export const addToWatchlist = (movieId: string): void => {
  const watchlist = getWatchlistFromStorage();
  if (!watchlist.includes(movieId)) {
    const newWatchlist = [...watchlist, movieId];
    localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
  }
};

export const removeFromWatchlist = (movieId: string): void => {
  const watchlist = getWatchlistFromStorage();
  const newWatchlist = watchlist.filter(id => id !== movieId);
  localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
};

export const isInWatchlist = (movieId: string): boolean => {
  const watchlist = getWatchlistFromStorage();
  return watchlist.includes(movieId);
};

export const getWatchlistMovies = (): Movie[] => {
  const watchlist = getWatchlistFromStorage();
  return mockMovies.filter(movie => watchlist.includes(movie.id));
};