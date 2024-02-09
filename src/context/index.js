import React, {useState} from 'react'
import axios from 'axios'

export const MyContext = React.createContext({})

export const MyContextProvider = ({children}) => {
    const [pokemonData, setPokemonData] = useState();

    const fetchData = async () => {
        try{
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/ditto"
            );
            setPokemonData(response.data);
        } catch (error){
            console.error("Error fetching data",error);
        }   
    }

    const global = {
        someValue: "Nilai dari Context",
        secondValue : "Nilai Kedua Context",
        pokemonData,
        fetchData
    };

    const provider = {
        // ... -> untuk copas const
        //semua const ditaruh di provider
        ...global,
    };

    return(
        //value -> berisi data-data
        // children -> untuk mengambil data-data yang ada di provider
        <MyContext.Provider value={provider}>
            {children}
        </MyContext.Provider>
    )
}