import { PokemonStatus } from "@/components/pokemonDetails/PokemonStatus";
import { getPokemonBySlug } from "@/serverActions/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IPokemonDetailsPage {
    params: {
        slug: string;
    };
}

const PokemonDetailsPage = async ({ params }: IPokemonDetailsPage) => {
    const { slug } = params;

    const pokemon = await getPokemonBySlug(slug);

    if (!pokemon) notFound();

    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={200}
                height={200}
            />
            <PokemonStatus status={pokemon.stats} />
        </div>
    );
};

export default PokemonDetailsPage;
