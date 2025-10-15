import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemon } from 'src/hooks/useGetPokemon';

export const PokemonModal = () => {
	const navigate = useNavigate();
  const params = useParams();
  const name = params.pokemonId!;
  const { pokemon, loading } = useGetPokemon(name);

	return (
    <Dialog 
      open={true} 
      onClose={() => navigate("../")}
      fullWidth={true}
    >
      {loading || pokemon == null
        ? "Loading..."
        : 
        <>
          <DialogTitle 
            sx={{
              color: '#171E2b'
            }}
          >
            {pokemon.name} ({pokemon.number})
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Max HP: {pokemon.maxHP}
              <br />
              Weaknesses: {pokemon.weaknesses.join(', ')}
            </DialogContentText>
          </DialogContent>
        </>
      }
      
    </Dialog>
	);
};