import { useState } from "react";

const useMain = ()=>{
    const [show, setShow] = useState(true)
    const[hide, setHide] = useState()
}
export {show, setShow, hide, setHide} = useMain
export default useMain

