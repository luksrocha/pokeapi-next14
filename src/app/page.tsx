import PokemonList from "@/components/home/PokemonList";
import { Suspense } from "react";

export default async function Home() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <PokemonList />
            </Suspense>
        </div>
    );
}
