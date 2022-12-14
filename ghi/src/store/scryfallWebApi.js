import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scryfallWebApi = createApi({
  reducerPath: "scryfallWeb",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.scryfall.com'
  }),
  endpoints: (builder) => ({
    getSymbols: builder.query({
      query: () => '/symbology/',
    }),
    getCard: builder.query({
      query: (data) => {
        return {
          url: `/cards/multiverse/${data}/`,
        };
      },
    }),
    getCardNames: builder.query({
      query: () => '/catalog/card-names/',
    }),
  }),
});

export const { useGetSymbolsQuery, useGetCardQuery, useGetCardNamesQuery } = scryfallWebApi;