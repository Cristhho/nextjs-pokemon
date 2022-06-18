import { useRouter } from 'next/router';
import { Grid, Card, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces';

type PokemonCardProps = {
  pokemon: SmallPokemon
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  }

  return (
    <Grid xs={6} sm={4} md={3} xl={2}>
      <Card
        hoverable
        clickable
        onClick={onClick}
      >
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
  );
}
