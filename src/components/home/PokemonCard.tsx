import Image from "next/image";
import Link from "next/link";

import { POKEMON_TYPE_COLORS } from "@/constants/typesColor";
import { IPokemon } from "@/types/pokemonType";

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard = async ({ pokemon }: IPokemonCardProps) => {
  if (!pokemon) return <div>Not Found</div>;

  const bgColor = POKEMON_TYPE_COLORS[pokemon.types[0].type.name];

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div
        className="flex flex-col items-center border rounded p-4 w-72 h-40 hover:cursor-pointer hover:scale-105 transition-all"
        style={{ backgroundColor: bgColor }}
      >
        <span>
          {pokemon.name} - {pokemon.types[0].type.name}
        </span>
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          height={100}
          width={100}
        />
      </div>
    </Link>
  );
};

export { PokemonCard };
