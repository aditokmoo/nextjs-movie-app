// Get top rated movies endpoint
export const getTopRatedEndpoint = (type: string) => `/${type}/top_rated`;

// Get single movie or tv shop endpoint
export const getSingleEndpoint = (type: string, id: number) => `/${type}/${id}`;


// Search Movies and TV Shows endpoint
export const searchMoviesAndShowsEndpoint = (query: string, type: string) =>
  `/search/${type}?query=${query}`;

// Get Movies and TV Show Trailers endpoint
export const getTrailer = (type: string, id: number) => `/${type}/${id}/videos?language=en-US`;