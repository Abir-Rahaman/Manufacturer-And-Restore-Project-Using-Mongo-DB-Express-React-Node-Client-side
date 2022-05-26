import { useState,useEffect } from 'react';

const useTools = () =>{
    const [computers,setComputers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/computer")
        .then(res => res.json())
        .then(data => setComputers(data));
    },[])

    return{computers}
}

export default useTools;