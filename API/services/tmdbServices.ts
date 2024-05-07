import { MovieType, ResultTrailerType, SearchQueryType, TVShowType } from "@/utils";
import {
  getSingleEndpoint,
  getTopRatedEndpoint,
  searchMoviesAndShowsEndpoint,
  getTrailer
} from "../endpoints";
import { axiosTMDBPrivate } from "../http";

// Get top rated movies and tv shows
export const getTopRated = async (type: string) => {
  const response = await axiosTMDBPrivate(getTopRatedEndpoint(type));
  const data = response.data;
  const top10Data = data.results.slice(0, 10);
  return top10Data;
};

// Get Single Movie or TV Show
export const getSingleResult = async (type: string, id: number) => {
  const response = await axiosTMDBPrivate(getSingleEndpoint(type, id));
  const data = response.data;
  return data;
};

// Get Searched Movie and TV Show
export const getSearchedResult = async (query: string, type: string) => {
  const response = await axiosTMDBPrivate(
    searchMoviesAndShowsEndpoint(query, type),
  );
  const data = response.data;
  return data;
};

// Get Movie and TV Show trailer
export const getMovieAndTVShowTrailer = async (type: string, id: number) => {
  const response = await axiosTMDBPrivate(getTrailer(type, id));
  const data = response.data;
  return data;
}