import {ReactNode, useEffect, useState} from "react";
import {Nav} from "../assets/Nav.tsx";
interface User {
    /** id user */
    user_id: number,
    /** firstname user */
    firstname: string,
    /** lastname user */
    lastname: string,

}

export const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/users')
            .then(res => res.json())
            .then(datas => setUsers(datas));
    }, []);


    return (
        <div className={'users'}>
            <Nav/>
            <h1>Users</h1>
            <ul>
                {users.map((user:User):ReactNode =>
                    <li key={user.user_id}>{user.firstname + " " + user.lastname}</li>
                )}
            </ul>
        </div>
    );
};