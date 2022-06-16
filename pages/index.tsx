import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layout';
import { PokemonCard } from '../components/pokemon';

import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

type HomePageProps = {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemones'>
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index+1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
