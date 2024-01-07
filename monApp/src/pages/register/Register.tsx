import {Nav} from "../../assets/Nav.tsx";

export const Register = () => {
    return (
        <div className={"register"}>
            <Nav/>
            <h1>Register</h1>
            <input placeholder={"email or username"}/>
            <input placeholder={"password"}/>
        </div>
    );
};