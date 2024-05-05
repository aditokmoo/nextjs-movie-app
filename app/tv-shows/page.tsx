import { TVShowList, TVShowSearch } from "./_components";

export default async function TvShowsPage() {
    return (
        <main className="main">
            <div className="container">
                <TVShowSearch />
                <TVShowList />
            </div>
        </main>
    )
}