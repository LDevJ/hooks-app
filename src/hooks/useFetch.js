import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null, 
        isLoading: true,
        hasError: null
    })

    const getPokemon = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getPokemon();
    }, [url])
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
