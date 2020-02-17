import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import * as stores from "./stores/stores"; //mobx stores
import createRouter from "./navigation/create-router5";
import MainNode from "./app/layout/MainNode";

const router = createRouter(true);

// Provider will add all the mobx stores (including the routerStore) in context.
const wrappedApp = (
    <Provider {...stores}>
        <MainNode />
    </Provider>
);

// Renders the entire app when the router starts
router.start((err, state) => {
    ReactDOM.render(wrappedApp, document.getElementById("root"));
});
