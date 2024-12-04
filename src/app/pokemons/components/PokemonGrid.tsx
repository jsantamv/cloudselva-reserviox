import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokomenCard } from "./PokomenCard";

interface Props {
  pokemons: SimplePokemon[]
}


export function PokemonGrid({ pokemons }: Props) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons.map(pokemon => (
          <PokomenCard
            pokemon={pokemon}
            key={pokemon.id}
          />
        ))
      }
    </div>
  );
}