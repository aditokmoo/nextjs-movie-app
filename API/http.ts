import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjk0OWJhMmJiYzgxNDA0ODY0ZjM1OTIxYTIwYTFkMCIsInN1YiI6IjYzMTM4NjZlMjE2MjFkMDA4MjAzYWNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XSUMKlT7O5BB2npW2AqcRTGnzHNYPzFeWLNODA4bEiU";

export const axiosTMDBPrivate = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});
