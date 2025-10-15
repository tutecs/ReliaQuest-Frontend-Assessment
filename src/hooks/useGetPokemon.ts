import { useQuery } from "@apollo/client/react";
import gql from "graphql-tag";
import { useMemo } from "react";

export type PokemonDetails = {
  name: string;
  number: number;
  maxHP: number;
  weaknesses: string[];
}

export const GET_POKEMON = gql`
  query pokemon($name: String!){
    pokemon(name: $name){
      name
      number
      maxHP
      weaknesses
    }
  }
`;

export const useGetPokemon = (name: string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      name: name
    },
  });

  const pokemon: PokemonDetails | null = useMemo(() => data?.pokemon, [data]);

  return {
    pokemon,
    ...queryRes
  }
}