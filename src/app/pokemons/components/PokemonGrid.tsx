import { SimplePokemon } from "../interfaces/simple-pokemon";

interface Props {
    pokemons: SimplePokemon[]
}


export function PokemonGrid({ pokemons }: Props) {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map((poke: SimplePokemon) => (
                //   <div key={poke.id}>
                //     <Image
                //       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                //       width={100}
                //       height={100}
                //       alt={poke.name}
                //     />
                //     <p className="text-center capitalize">{poke.name}</p>
                //   </div>

                <span key={poke.id}>cualquier cosa</span>
            ))}
        </div>
    );
}