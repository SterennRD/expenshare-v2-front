import React from "react";
import { routeNode } from "react-mobx-router5";
import HomePage from "./HomePage";
import RouteRenderer from "components/RouteRenderer";

function Home(props) {
    const { route, routerStore } = props;
    return (
        <RouteRenderer
            config={{
                home: { PageComponent: HomePage }
            }}
            routerStore={routerStore}
            render={({ PageComponent }) => {
                return <PageComponent route={route} />;
            }}
        />
    );
}

export default routeNode("home")(Home);
