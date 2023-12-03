import './App.css'
import {ReactNode, useEffect, useState} from "react";

interface User {
    /** id user */
    user_id: number,
    /** firstname user */
    firstname: string,
    /** lastname user */
    lastname: string,

}

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/users')
            .then(res => res.json())
            .then(datas => setUsers(datas));
    }, []);


    return (
    <ul>
        {users.map((user:User):ReactNode =>
            <li key={user.user_id}>{user.firstname + " " + user.lastname}</li>
        )}
    </ul>
  )
}

export default App
