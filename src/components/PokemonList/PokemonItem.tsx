import React from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from 'src/hooks/useGetPokemons';
import { createUseStyles } from 'react-jss';


export const PokemonItem = ({ pokemon }: { pokemon: Pokemon; }) => {
  const classes = useStyles();

  return (
    <Link className={classes.item} to={pokemon.name}>
      <img className={classes.itemImage} src={pokemon.image} alt={`Image of ${pokemon.name}}`} />
      <div>
        <h3>{pokemon.name} - {pokemon.number}</h3>
        - {pokemon.types.join(", ")} -
      </div>
    </Link>
  );
};

const useStyles = createUseStyles(
  {
    item: {
      width: '15%',
      height: 'auto',
      borderRadius: '10px',
      padding: '5px',
      margin: '20px',
      background: '#2e394eff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        boxShadow: '0 0 20px 5px #7C89A3',
      },
      '&:active': {
        boxShadow: '0 0 20px 5px #7C89A3'
      },
      '&:focus': {
        boxShadow: '0 0 20px 5px #7C89A3'
      }
    },
    itemImage: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: '10px'
    },
  },
  { name: 'PokemonItem' }
);