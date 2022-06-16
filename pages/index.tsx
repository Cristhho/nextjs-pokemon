import type { NextPage } from 'next';

import { Layout } from '../components/layout';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de pokemones'>
      <h1>Pokedex</h1>
    </Layout>
  )
}

export default HomePage
