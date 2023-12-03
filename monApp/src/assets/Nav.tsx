import {Link, Outlet} from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/users'}>Users</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};