const api = {
  key: "29d93b349279af1120afee12920275f6",
  startPoint: "https://api.themoviedb.org/3/movie",
  endPoint: "&language=en-US&page=1",
  popularMovies: "/popular?api_key=",
  topRated: "/top_rated?api_key=",
  upComing: "/upcoming?api_key=",
  baseImgUrl: "https://image.tmdb.org/t/p/w500",
};

// sample: `startPoint + popularMovies + key + endPoint`

export default api;
