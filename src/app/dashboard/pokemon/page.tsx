import Image from 'next/image';
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemon = async (limit = 100, offset = 0): Promise<SimplePokemon[]> => {

  const resp: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    .then(res => res.json())

  const simplePokemon: SimplePokemon[] = resp.results.map((poke: any) => {
    return {
      id: poke.url.split('/').at(-2)!,
      name: poke.name
    }
  })

  // throw new Error('Error al obtener los pokemons');

  return simplePokemon;

}

export default async function PokemonPage() {

  const pokemon = await getPokemon();

  return (
    <div className='flex flex-col'>

      <span className='text-5xl my-2'>Listado de pokemons <small>statitico</small></span>

      <PokemonGrid pokemons={pokemon} />

    </div>
  );
}
