import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useAdmin = user =>{
    const [admin,setAdmin]=useState(false)
    const [adminLoading , setAdminLoading] = useState(true)
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`https://ancient-badlands-88778.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => {
                    if(res.status === 403){
                        toast.error('Failed to Make an admin');
                    }
                    return res.json()})
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                    
    
                })
        }

    },[user])
    return[admin,setAdmin,setAdminLoading,adminLoading];
}
export default useAdmin;