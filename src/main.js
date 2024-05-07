import useMain from "./hooks/main.hooks"


const Main = ()=>{
    const {users, posts, isShow, setIsShow} = useMain()
    return <div>
        <button onClick={()=> setIsShow(true)}>1</button>
        <button onClick={()=> setIsShow(false)}>2</button>
        <table>
                {isShow ? posts.map((postsElement)=>{
                    return(
                        <tr>
                    {users.map((usersElement)=>{
                        if(usersElement.id === postsElement.userId){
                            return (
                                <td>{usersElement.id}</td>,
                                <td>{usersElement.name}</td>,
                                <td>{usersElement.surname}</td>,
                                <td>{postsElement.post}</td>
                            )
                        }
                    })}
                    </tr>
                    )
                    
                }
                ) : ''}
        </table>
        
    </div>
}
export default Main 