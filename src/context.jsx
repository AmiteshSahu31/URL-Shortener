import { createContext, useContext, useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { getCurrentUser } from "./db/apiAuth";

const UrlContext= createContext();

const UrlProvider=({children})=>{
    const {data:user, loading, fn:fetchUser, error}=useFetch(getCurrentUser);
    const isAuthenticated= user?.role === "authenticated" ;

    useEffect(() => {
        fetchUser();
    },[])
    return (
        <UrlContext.Provider value={{user, loading, isAuthenticated, error, fetchUser}}>{children}</UrlContext.Provider>
    )
};
 export const UrlState= () => {
    return useContext(UrlContext);
 }
export default UrlProvider;