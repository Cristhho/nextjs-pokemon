import { useState } from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { Layout } from '../../components/layout';

import { pokeApi } from '../../api';
import { Pokemon, PokemonListResponse } from '../../interfaces';
import { localFavorites } from '../../utils';

interface PokemonNamePageProps {
  pokemon: Pokemon
}

const PokemonNamePage: NextPage<PokemonNamePageProps> = ({ pokemon }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(localFavorites.existInFavorites(`${pokemon.id}`));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(`${pokemon.id}`);
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      confetti({
        zIndex: 9999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                height={200}
                width='100%'
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!isFavorite}
                onClick={onToggleFavorite}
              >
                { isFavorite ? 'En favoritos' : 'Guardar en favoritos' }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction='row' display='flex'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemons.map((name) => ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonNamePage