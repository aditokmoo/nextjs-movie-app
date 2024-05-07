import { MovieList, MovieSearch } from "./_components";

export default async function MoviesPage() {
    return (
        <main className="main">
            <div className="container">
                <MovieSearch />
                <MovieList />
            </div>
        </main>
    )
}