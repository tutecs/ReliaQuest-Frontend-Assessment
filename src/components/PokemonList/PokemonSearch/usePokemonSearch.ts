import { useState } from "react";
import { Pokemon } from "src/hooks/useGetPokemons";

export const usePokemonSearch = (pokemons: Pokemon[]) => {
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);
  
  const handleSearchInputChange = (input: string) => {
    input = input.trim();
    if (!input) {
      setFilteredPokemons(pokemons);
    } 
    else {
      setFilteredPokemons(pokemons.filter(
        pokemon => 
          pokemon
            .name
            .toLowerCase()
            .includes(input)
        )
      )
    }
  }

  return {
    filteredPokemons,
    handleSearchInputChange
  };
};