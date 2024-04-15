import { getInitialPokemons } from "@/serverActions/pokemons";
import { PokemonCard } from "./PokemonCard";
import { notFound } from "next/navigation";
import { POKEMON_TYPE_COLORS } from "@/constants/typesColor";

const PokemonList = async () => {
    const pokemons = await getInitialPokemons();

    if (!pokemons) notFound();

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}
                    pokemon={pokemon}
                    bgColor={POKEMON_TYPE_COLORS[pokemon.types[0].type.name]}
                />
            ))}
        </div>
    );
};

export default PokemonList;
