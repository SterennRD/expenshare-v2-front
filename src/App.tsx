import React from "react";
import "./App.css";
import { Link } from "react-mobx-router5";

function App() {
    return (
        <div className="App">
            <Link routeName="user">User</Link>
            <Link routeName="home">Home</Link>
        </div>
    );
}

export default App;
