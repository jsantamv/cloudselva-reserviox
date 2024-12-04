import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  }
}

/** Funcion para generar 
 * metadata de manera dinamica
 * interesante
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { id, name, species } = await getPokemon(params.id);

  return {
    title: `${id} ${name}`,
    description: `Pokemon name ${name}:`,
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  })
    .then(res => res.json())

  return resp;

}






export default async function PokemonPage({ params }: Props) {

  // const { id } = await params;

  // const pokemon = await getPokemon(id);


  return (
    <div>
      <h1>Pokemon {pokemon.name}</h1>
    </div>
  );
}