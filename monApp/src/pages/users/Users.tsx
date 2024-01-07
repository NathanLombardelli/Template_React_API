import {ReactNode, useEffect, useState} from "react";
import {Nav} from "../../assets/Nav.tsx";

interface User {
    /** id user */
    user_id: number,
    /** firstname user */
    firstname: string,
    /** lastname user */
    lastname: string,

}

const url = import.meta.env.VITE_API_URL;

export const Users = () => {

    const [users, setUsers] = useState([]);

    console.log(url);

    useEffect(() => {
        fetch(url +'/users')
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