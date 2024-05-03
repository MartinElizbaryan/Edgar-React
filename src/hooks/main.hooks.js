import { useState } from "react"
import { User } from "../clases/user"

const useMain = ()=>{
    const [users, setUsers] = useState([])

    setUsers([...users])
    return {users}

}
 export default useMain