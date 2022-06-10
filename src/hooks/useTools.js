import { useState,useEffect } from 'react';

const useTools = () =>{
    const [computers,setComputers] = useState([]);
    useEffect(()=>{
        fetch("https://ancient-badlands-88778.herokuapp.com/computer")
        .then(res => res.json())
        .then(data => setComputers(data));
    },[])

    return{computers}
}

export default useTools;