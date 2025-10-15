import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Search } from './PokemonSearch';
import { PokemonItem } from './PokemonItem';
import { usePokemonSearch } from '../../hooks/usePokemonSearch';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const { filterFunction, handleSearchInputChange } = usePokemonSearch();

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <Search onChange={handleSearchInputChange} />
        <hr />
      </div>
      <div className={classes.list}>
        {loading && <div>Loading...</div>}
        {filterFunction(pokemons).map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '0 32px 32px 32px',
      boxSizing: 'border-box',
    },
    list: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    search: {
      position: 'sticky',
      background: '#171E2b',
      top: 0,
      paddingTop: '10px'
    }
  },
  { name: 'PokemonList' }
);
