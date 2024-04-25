import { useState } from "react";

const useMain = ()=>{
    const [isShow, setIsShow] = useState(true)
    return {isShow, setIsShow}
}
export default useMain

