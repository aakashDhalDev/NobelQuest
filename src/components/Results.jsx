import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
    const {results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        getResults(searchTerm)
    }, [searchTerm]);

    if(isLoading) return <Loading/>;

    switch(location.pathname){
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
                    {   
                        searchTerm !== ""?
                        results?.output?.map(({Name, URL, Image_Serialized}, index) => (
                            <div key={index} className='md:w-2/5 w-full'>
                            <a href={URL} target="_blank" rel="noreferrer"
                                className="block p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                                <div className="flex items-center">
                                    {Image_Serialized ? (
                                        <img src={atob(Image_Serialized)} alt="Image" className="w-12 h-12 rounded-full mr-4" />
                                    ) : (
                                        <img src="../images/Nobel_Prize.png" alt="Default Image" className="w-12 h-12 rounded-full mr-4" />
                                    )}
                                    <div>
                                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                            {Name}
                                        </p>
                                        <p className='text-sm dark:text-blue-100 text-blue-500'>
                                            {URL}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        )): <div class="flex justify-center items-center h-screen w-screen bg-gray-100">
                        <div class="text-4xl text-gray-600">Welcome to NobelQuest. Search in the bar above and click on 🐟</div>
                      </div>
                      
                    }
                </div>
            )
        default:
            return 'ERROR!!'
    }
}
