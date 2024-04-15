interface PokemonTypes {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface PokemonStatus {
    base_stat: number;
    stat: {
        name: string;
        url: string;
    };
}

interface PokemonSprites {
    front_default: string;
    back_default: string;
}

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonTypes[];
    status: PokemonStatus[];
    sprites: PokemonSprites;
}

export interface IPokemonAPIReturn<T> {
    results: T;
}
