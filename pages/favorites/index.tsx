import { useEffect, useState } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components/layout';
import { FavoritePokemons } from '../../components/pokemon';
import { EmptyFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage: NextPage = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.favorites());
  }, []);

  return (
    <Layout title='Favoritos'>
      {
        favorites.length === 0
          ? (<EmptyFavorites />)
          : (<FavoritePokemons pokemons={favorites} />)
      }
    </Layout>
  )
}

export default FavoritesPage