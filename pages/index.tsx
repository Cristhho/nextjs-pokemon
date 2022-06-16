import type { NextPage } from 'next';

import { Layout } from '../components/layout';
import { Navbar } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de pokemones'>
      <Navbar />
      <h1>Pokedex</h1>
    </Layout>
  )
}

export default HomePage
