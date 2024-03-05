import { createContext, useEffect, useMemo, useState } from "react";
import axios from 'axios';

const CommentsContext = createContext();

export const CommentsContextProvider = (props) => {
    let { children } = props;

    let [ comments, setComments ] = useState(null);
    let GetComments = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response=>setComments(response.data))
        .catch(error=>console.log(error))
    }
    useEffect(()=> {
        GetComments()
    }, [])

    const contextValue = useMemo(()=>({comments}), [comments])

    return (
        <CommentsContext.Provider value={contextValue}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContext;