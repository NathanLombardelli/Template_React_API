import {Nav} from "../../assets/Nav.tsx";

export const Login = () => {
    return (
        <div className={"login"}>
            <Nav/>
            <h1>Login</h1>
            <input placeholder={"email or username"}/>
            <input placeholder={"password"}/>
        </div>
    );
};