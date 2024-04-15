import { POKEMON_STATUS_COLORS } from "@/constants/pokemonStatus";
import { IPokemonStatus } from "@/types/pokemonType";
import { Slider } from "@nextui-org/react";

interface IPokemonStatusProps {
    status: IPokemonStatus[];
}

const PokemonStatus = ({ status }: IPokemonStatusProps) => {
    if (!status) return null;

    return (
        <div className="w-full">
            {status.map((item) => (
                <div key={item.stat.name} className="flex flex-col">
                    <Slider
                        label={
                            <span>
                                {item.stat.name} {item.base_stat}
                            </span>
                        }
                        value={item.base_stat}
                        draggable={false}
                        hideThumb
                        hideValue
                        maxValue={100}
                        classNames={{
                            filler: `rounded ${
                                POKEMON_STATUS_COLORS[item.stat.name]
                            }`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export { PokemonStatus };
