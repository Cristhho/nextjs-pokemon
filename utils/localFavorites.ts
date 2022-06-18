const toggleFavorite = (id: string) => {
  let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemon) => pokemon !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const _export = {
  toggleFavorite
};

export default _export;
