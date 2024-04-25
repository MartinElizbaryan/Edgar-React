import useMain from "./main.hooks"
import Test from "./Test"
export const Main = ()=>{
    const {isShow, setIsShow} = useMain()


    return <div>
        <button onClick={() => setIsShow(true)}>show</button>
        <button onClick={() => setIsShow(false)}>hide</button>
        {isShow && (
            <Test/>
        )}
    </div>
}
