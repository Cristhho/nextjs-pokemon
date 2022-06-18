import { Grid } from '@nextui-org/react';

import FavoritePokemonCard from './FavoritePokemonCard';

type FavoritePokemonsProps = {
  pokemons: string[]
}

export const FavoritePokemons: React.FC<FavoritePokemonsProps> = ({ pokemons }) => {

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map((id) => (
          <FavoritePokemonCard key={id} pokemonId={id} />
        ))
      }
    </Grid.Container>
  );
};
