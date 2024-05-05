import Button from "@/components/common/Button";
import Link from "next/link";

export default async function HomePage() {
    return (
        <>
            <main>
                <h1>Find Top Movies and TV Shows</h1>
                <Link href='/tv-shows'>Explore</Link>
            </main>
        </>
    );
}