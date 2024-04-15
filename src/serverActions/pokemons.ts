"use server";

import { IPokemon, IPokemonAPIReturn } from "@/types/pokemonType";
import { fetchGet } from ".";

interface PokemonResults {
    name: string;
    url: string;
}

export const getInitialPokemons = async (): Promise<IPokemon[]> => {
    const pokemons = await fetchGet<IPokemonAPIReturn<PokemonResults[]>>(
        "/pokemon"
    );

    const pokemonWithCompleteDataPromise = pokemons.results.map((pokemon) =>
        fetchGet<IPokemon>(`pokemon/${pokemon.name}`)
    );

    let pokemonWithCompleteData: IPokemon[] = [];

    await Promise.all(pokemonWithCompleteDataPromise).then(
        (results) => (pokemonWithCompleteData = results)
    );

    return pokemonWithCompleteData;
};
