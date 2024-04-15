import { getInitialPokemons } from "@/serverActions/pokemons";
import { PokemonCard } from "./PokemonCard";
import { notFound } from "next/navigation";

const PokemonList = async () => {
    const pokemons = await getInitialPokemons();

    if (!pokemons) notFound();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;
