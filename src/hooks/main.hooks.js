import { useState } from "react"

const useMain = ()=>{
    const [users, setUsers] = useState([
        {
            id : 1,
            name : 'Edgar',
            surname : 'Hambardzumyan'
        },
        {
            id : 2,
            name : 'Martin',
            surname : 'Elizbaryan'
        },
        {
            id : 3,
            name : 'Karen',
            surname : 'Sargsyan'
        }
    ])
    const[posts, setPosts] = useState([
        {
            userId : 1,
            post : 'the spirit says slowburn but the flesh says pwp'
        },
        {
            userId : 2,
            post : 'What’s big and white and will kill you if it falls out a tree A freezer'
        },
        {
            userId : 3,
            post : 'are there actually new tumblr users or are we just memeing ourselves into a fever dream where this site is popular again like two hundred thousand people hallucinating as they die in a trench'
        },
        {
            userId : 3,
            post : 'are there actually new tumblr users or are we just memeing ourselves into a fever dream where this site is popular again like two hundred thousand people hallucinating as they die in a trench'
        },
        {
            userId : 1,
            post : 'the spirit says slowburn but the flesh says pwp'
        },
        {
            userId : 2,
            post : 'What’s big and white and will kill you if it falls out a tree A freezer'
        },

    ])
    const[isShow, setIsShow] = useState(false)
    localStorage.setItem('users',JSON.stringify(users))
    localStorage.setItem('posts',JSON.stringify(posts))
    return {users, posts, isShow, setIsShow}

}
 export default useMain