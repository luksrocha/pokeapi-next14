interface IPokemonTypes {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface IPokemonStatus {
    base_stat: number;
    stat: {
        name: string;
        url: string;
    };
}

interface IPokemonSprites {
    front_default: string;
    back_default: string;
}

export interface IPokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: IPokemonTypes[];
    stats: IPokemonStatus[];
    sprites: IPokemonSprites;
}

export interface IPokemonAPIReturn<T> {
    results: T;
}
