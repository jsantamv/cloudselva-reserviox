import Image from 'next/image';
import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

  const resp: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const simplePokemon: SimplePokemon[] = resp.results.map((poke: any) => {
    return {
      id: poke.url.split('/').at(-2)!,
      name: poke.name
    }
  })

  return simplePokemon;

}

export default async function PokemonPage() {

  const pokemon = await getPokemon();

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

      {pokemon.map((poke: SimplePokemon) => (
        <div key={poke.id}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
            width={100}
            height={100}
            alt={poke.name}
          />
          <p className="text-center capitalize">{poke.name}</p>
        </div>
      ))}
    </div>
  );
}
