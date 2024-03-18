import React, {useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';

export const Search = () => {
    const [text, setText] = useState('');
    const {setSearchTerm} = useResultContext();
    // const [debouncedValue] = useDebounce(text, 3000);

    // useEffect(()=>{
    //     if(debouncedValue) setSearchTerm(debouncedValue)
    // }, [debouncedValue])

    return (
        <div className='relative w-full flex justify-center'>
            <input 
                value={text}
                type="text"
                className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-yellow-200 p-6 text-black hover:shadow-lg'
                placeholder='Search'
                onChange={(e)=>setText(e.target.value)}
            />
                
            <button type="button" className='text-2xl text-gray-500' onClick={() => {setSearchTerm(text)}}>
                🐟
            </button>
        </div>
    )
}
