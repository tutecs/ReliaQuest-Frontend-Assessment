import { useState } from "react";
import { Pokemon } from "src/hooks/useGetPokemons";

export const usePokemonSearch = () => {
  const [filterString, setFilterString] = useState<string | null>(null);
  
  const handleSearchInputChange = (input: string) => {
    input = input.trim();
    if (!input) {
      setFilterString(null);
    } 
    else {
      setFilterString(input);
    }
  };

  const filterFunction = (pokemons: Pokemon[]) => {
    if (!filterString)
      return pokemons;
    return pokemons.filter(pokemon => 
      pokemon
        .name
        .toLowerCase()
        .includes(filterString)
    )
  };

  return {
    filterFunction,
    handleSearchInputChange
  };
};