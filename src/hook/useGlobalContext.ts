import { createContext, useContext } from 'react';

export interface globalContext{
    searchMovie: Array<any>;
    setSearchMovie: (d: any) => any;
}
export const MyGlobalContext = createContext<globalContext>({ searchMovie: [], setSearchMovie: () => { } })
export const useGlobalContext = () => useContext(MyGlobalContext)