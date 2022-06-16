import { NextPage, GetStaticProps } from 'next';
import { Grid, Card, Row, Text } from '@nextui-org/react';

import { Layout } from '../components/layout';

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
            <Grid xs={6} sm={4} md={3} xl={2} key={pokemon.id}>
              <Card hoverable clickable>
                <Card.Body css={{
                  p: 4
                }}>
                  <Card.Image src={pokemon.image} width='100%' height={140} />
                </Card.Body>
                <Card.Footer>
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{pokemon.name}</Text>
                    <Text>#{pokemon.id}</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
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
