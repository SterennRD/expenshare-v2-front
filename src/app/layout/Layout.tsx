import React from "react";
import { Link } from "react-mobx-router5";

function Layout(props) {
    const { children } = props;
    return (
        <div>
            <Link routeName="user">User</Link>
            <Link routeName="home">Home</Link>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
