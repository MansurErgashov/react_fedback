import { useEffect } from "react"


export const getAsyncFeed = () => {
    return dispatch => {
        useEffect(() => {
            fetch("http://localhost:3001/productRequests")
            .then(res => res.json())
            .then(data => {dispatch({type:"GET_FEEDBACK", payload: data})})
        }, [])
    }
}
