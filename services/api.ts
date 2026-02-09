export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${query}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    //@ts-ignore
    throw new Error('failed to fetch movies', response.statusText);
  }

  const data = await response.json();

  return data.results;
};

// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjhmMDNmOTFjMDA3NmNjZjM2YzJmNjg1NWFhYmNmYiIsIm5iZiI6MTc3MDYzNTQ3NS42NzIsInN1YiI6IjY5ODljMGQzZTdmMTE0ZmMwOThmZDYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n8NETkM99jKGYClpffH3ln4nj1gj2yD_REOHRoHMhwQ',
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
