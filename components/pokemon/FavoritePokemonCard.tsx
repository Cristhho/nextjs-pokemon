import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

type FavoritePokemonCardProps = {
  pokemonId: string
}

const FavoritePokemonCard: React.FC<FavoritePokemonCardProps> = ({ pokemonId }) => {
  const router = useRouter();

  return (
    <Grid xs={6} sm={4} md={3} xl={2}>
      <Card
        hoverable
        clickable
        css={{
          padding: 10
        }}
        onClick={() => router.push(`/pokemon/${pokemonId}`)}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width='100%'
          height={140}
        />
      </Card>
    </Grid>
  );
};

export default FavoritePokemonCard;