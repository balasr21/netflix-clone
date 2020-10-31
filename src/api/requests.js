const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcwYWU4ZTRiMmNkOTVmNjAxM2M0ZDNjYmVkN2MxOSIsInN1YiI6IjVmOGMwMTU2MWZiOTRmMDAzNTM0NWEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mi-58d9aDK5MtDXk-kTNdbI8kDJUrQkFQEM8xols7M4";

const API_KEY = "3a70ae8e4b2cd95f6013c4d3cbed7c19";

const endpoints = [
  {
    id: 1,
    category: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    isLarge: true,
  },
  {
    id: 2,
    category: "Netflix Originals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    id: 3,
    category: "TopRated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    id: 4,
    category: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    id: 5,
    category: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 6,
    category: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    id: 7,
    category: "Romantic Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: 8,
    category: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export default endpoints;
