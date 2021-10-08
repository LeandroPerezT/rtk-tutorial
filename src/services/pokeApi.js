import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (quantity) => ({
        url: `pokemon/?limit=${quantity}`
      })
    }),
    getPokemonByName: builder.query({
      query: (id)=>({
        url: `pokemon/${id}`
      })
    })
  })
})

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi