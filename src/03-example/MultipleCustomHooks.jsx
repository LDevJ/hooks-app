import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/character/1')
    console.log(data, isLoading. hasError);

  return (
    <>
        <h1>Pokemon Quotes</h1>
        <hr />  
    </>
  )
}
