import React, {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = "http://127.0.0.1:5000/process";

export const ResultContextProvider = ({children}) =>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (searchTerm) => {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}?query=${searchTerm}&mode=FAISS`,{
            method: 'GET'
        });

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    };

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);


