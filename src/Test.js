import { useEffect } from "react"

const Test = () =>{
    useEffect(()=>{
        const id = setInterval(()=>console.log('hello'),1000)
        return ()=>{
            clearInterval(id)
        }
    },[])
    return(
        <div>1</div>
    )
}
export default Test